import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { userInfo } from 'os';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  
  constructor( private storage:Storage) { }

  loginUser(credentials: any){
    return new Promise((accept,reject)=>{
      this.storage.get("user").then((val)=>{
        if (credentials.email==val.email && btoa(credentials.password)==val.password){
          accept("Login Exitoso");
        }else{
          reject("Login Fallido");
        }
      });
      
    });
  }
  
  registerUser(userData:any){ 
    userData.password=btoa(userData.password);
    return this.storage.set("user", userData);
   }
}
