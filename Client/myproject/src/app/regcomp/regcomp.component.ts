import { Component } from '@angular/core';
import { MediatorserviceService } from '../mediatorservice.service'
import { Router } from'@angular/router'
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-regcomp',
  templateUrl: './regcomp.component.html',
  styleUrls: ['./regcomp.component.css']
})
export class RegcompComponent {
  constructor(private mservice:MediatorserviceService,private rout:Router,private translate:TranslateService){
    translate.setDefaultLang('en');
}
  registerdetails(data:any){
    console.log('................',data);
    this.mservice.register(data).subscribe(
      (res:any)=>{
        console.log(res)
        if(res['status'] == 1){
          alert("{{'Successfully Saved'|translate}}")
          this.rout.navigate(["log"])

        }
        else{
          alert("{{'Already exists'|translate}}")
        }
      }
    );
  }
changeLanguage(language: string) {
    this.translate.use(language)
  }

}
