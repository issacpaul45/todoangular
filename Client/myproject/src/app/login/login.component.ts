import { Component } from '@angular/core';
import { MediatorserviceService } from '../mediatorservice.service'
import { Router } from '@angular/router'
import { TranslateService } from '@ngx-translate/core';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private mservice:MediatorserviceService,private rout:Router,private translate:TranslateService){
    translate.setDefaultLang('en');
  }
  login(params:any){
      console.log('................',params);
      this.mservice.login(params).subscribe(
        (res:any)=>{
          console.log(res)
          if(res['status'] == 1){
            this.rout.navigate(['view'],{queryParams:res['values']})
          }
          else{
            alert('Please provide your valid info...')
          }
        }
      );
    }
    changeLanguage(language: string) {
      this.translate.use(language)
    }

}
