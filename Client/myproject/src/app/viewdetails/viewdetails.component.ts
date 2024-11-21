import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { ActivatedRoute }from '@angular/router'
import { MediatorserviceService } from '../mediatorservice.service'
import { TranslateService } from '@ngx-translate/core';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-viewdetails',
  templateUrl: './viewdetails.component.html',
  styleUrls: ['./viewdetails.component.css']
})
export class ViewdetailsComponent{
  constructor(private route: ActivatedRoute,public c:MediatorserviceService,public r:Router,private translate:TranslateService,private cd: ChangeDetectorRef) {
    translate.setDefaultLang('en');
  }
  
data = {id: "",email: "",first_name: "",gender: "",last_name: "",contact: "",password: "",username: ""}
todo:any[] = []
complete:any[] = []
incomplete :any[]= []
selectedFilter = 'all'; // Default filter
filteredTasks: any[] = []; // Tasks to display after filtering
ngOnInit() {
  this.route.queryParams.subscribe((params) => {
      this.data.id = params['id'];
      this.data['email']=params['email']
      this.data['first_name']=params['first_name']
      this.data['last_name']=params['last_name']
      this.data['contact']=params['contact']
      this.data['password']=params['password']
      this.data['username']=params['username']
      this.data['gender']=params['gender']
    });
    this.c.view(this.data['id']).subscribe(
      (res:any)=>{
        this.todo = res['data']
        console.log(this.todo)
        this.filteredTasks = this.todo
      }
    )

    this.c.getspecific(this.data.id,1).subscribe(
      (res:any)=>{
        this.complete = res['data']
      }
    )

    this.c.getspecific(this.data.id,0).subscribe(
      (res:any)=>{
        this.incomplete = res['data']
      }
    )
    
  }

  b={taskname: '', taskdesc: '',user: ''}
  addtodo(a:any){
    this.b['taskname']=a['taskname']
    this.b['taskdesc']=a['taskdesc']
    this.b['user']=this.data['id']
    this.c.create_task(this.b).subscribe(
      (res:any)=>{
        console.log(res)
        if (res['status'] == 1){
          alert("Task Created Successfully")
          const newTask = {
            taskname: a['taskname'],
            taskdesc: a['taskdesc'],
            status: 0 // Default status (adjust if needed)
          };
          this.todo.push(newTask)
        }
      }
    )
  }

  isDivVisible = false;
  toggleDiv() {
    this.isDivVisible = !this.isDivVisible;
    this.showall1 = true;
    this.showincomplete0=false;
    this.showcomplete1 = false;
  }

  showall1 = true;
  showall() {
    this.showall1 = !this.showall1;
    this.isDivVisible = false;
    this.showincomplete0=false;
    this.showcomplete1 = false;
  }

  showcomplete1 = false;
  showcomplete() {
    this.showcomplete1 = !this.showcomplete1;
    this.showall1 = false;
    this.isDivVisible = false;
    this.showincomplete0=false;
  }

  showincomplete0=false;
  showincomplete(){
    this.showincomplete0=!this.showincomplete0;
    this.showall1 = false;
    this.isDivVisible = false;
    this.showcomplete1 = false;
  }

  deletask(i:any){
    this.c.deltask(i).subscribe(
      (res:any)=>{
        console.log(res)
        if(res["status"] == 1){
          alert("Deleted Successfully")
          this.todo = this.todo.filter((task) => task.id !== i); 
          this.r.navigate(["view"])

        }
      }
    )
  }

  show = false;
  d = { id: '', taskname: '', taskdesc: '', status: 0, user: 0 };

  update(i: any) {
    this.c.updatetask(i).subscribe((res: any) => {
      console.log(res);
      this.d.id = res['data']['id'];
      this.d.taskname = res['data']['taskname'];
      this.d.taskdesc = res['data']['taskdesc'];
      this.d.status = res['data']['status'];
      this.d.user = res['data']['user'];
  
      this.show = !this.show;
      this.showall1 = true;
      this.isDivVisible = false;
      this.showincomplete0 = false;
      this.showcomplete1 = false;
  
      console.log(this.d);
      
      const index = this.todo.findIndex(task => task.id === this.d.id);
      if (index !== -1) {
        this.todo[index] = { ...this.d };  
      }
  
      this.cd.detectChanges();
  
      console.log(this.todo); 
    });
  }
  
  updatetodo(a: any) {
    this.d.taskname = a['taskname'];
    this.d.taskdesc = a['taskdesc'];
    this.d.status = parseInt(a['status']);
    
    this.c.updatetask_post(this.d).subscribe((res: any) => {
      console.log(res);
      
      const index = this.todo.findIndex(task => task.id === this.d.id);
      if (index !== -1) {
        this.todo[index] = { ...this.d };  
      }
  
      this.cd.detectChanges();
    });
  
    this.show = !this.show;
  }

  
  changeLanguage(language: string) {
    this.translate.use(language)
  }
}
