import { resolve, reject } from "q";
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { ApicallsService } from './services/apicalls.service';

@Injectable({
    providedIn: 'root'
  })
export class AuthService{
    constructor(private router: Router, private apiService:ApicallsService) {
       if(localStorage.getItem("loged")=='true'){
        this.logedIn=true;
       }
       else{
           this.logedIn=false;
       }
     }
    logedIn;
    isAuthenticated(){
        const promise =new Promise(
            (resolve,reject)=>{
                resolve(this.logedIn);
            }
        )
        return promise;
    }
    login(){
            this.logedIn=true;
            this.apiService.login.next(true);
            this.router.navigate(['/categories']);
    }
    logout(){
        this.logedIn=false;
        this.router.navigate(['/login']);
        this.apiService.login.next(false);
    }
}