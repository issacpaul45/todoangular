import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class MediatorserviceService {

  constructor(private htt:HttpClient) { }


  register(data:any){
    console.log(data)
    return this.htt.post('https://issacpaul451.pythonanywhere.com/register/',data)

  }
  login(data:any){
    console.log(data)
    return this.htt.post('https://issacpaul451.pythonanywhere.com/login/',data)

  }





  
  create_task(a:any){
    console.log("Services.........",a)
    return this.htt.post('https://issacpaul451.pythonanywhere.com/add_task/',a)
  }


  view(a:any){
    return this.htt.get('https://issacpaul451.pythonanywhere.com/view_task/?user_id='+a)
  }


  deltask(id:any){
    return this.htt.delete('https://issacpaul451.pythonanywhere.com/delete_task/'+id)
  }

  updatetask(id:any){
    let a1 = parseInt(id)
    console.log(a1)
    return this.htt.get('https://issacpaul451.pythonanywhere.com/update_task/?id='+a1)
  }

  updatetask_post(a:any){
    return this.htt.post('https://issacpaul451.pythonanywhere.com/update_task/',a)
  }

  getspecific(user:any,s:any){
    return this.htt.get('https://issacpaul451.pythonanywhere.com/view_completed_task/'+user+'/'+s)
  }



}


