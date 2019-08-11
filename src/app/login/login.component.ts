import { Component, OnInit } from '@angular/core';
import { User } from './login.model';
import { ApicallsService } from '../services/apicalls.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user:User;

  constructor(private apiService:ApicallsService, private authService:AuthService) { }

  ngOnInit() {
  }

  onSubmit(form){
    this.user=form.value;
    this.apiService.getUser().subscribe(
      (data:User[])=>{
        if(this.user.username==data[0].username && this.user.password==data[0].password){
          localStorage.setItem("loged", "true");
          this.login()
        }
        else{

        }
      }
    )
  }

  login(){
    this.authService.login();
  }

  logout(){
    this.authService.logout();
  }

}
