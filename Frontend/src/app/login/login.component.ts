import { Component, ElementRef, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import { HomepageComponent  } from '../homepage/homepage.component';
import { LoginService } from '../services/login.service';
import { AuthResponse } from 'src/model/AuthResponse';
import { HeaderComponent } from '../header/header.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm: FormGroup | any;
 
  constructor(
    private router:Router,private el:ElementRef,
    private loginService:LoginService,
    // private headercomp:HeaderComponent
  ) {
    this.loginForm = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email,Validators.pattern(
          '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,63}$',
          // email pattern: '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,63}$'
        ),]),
        password: new FormControl('', [Validators.required,Validators.pattern(
          '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$'
          // password pattern:^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$
        )])
  });
   }

   msg:string='';
   credentials={
   username:'',
   password:''
  }

  ngOnInit(): void {

  }

  onSubmit()
  {
    console.log("hellooo");
    
    if((this.credentials.username!='' && this.credentials.password!='')
    &&(this.credentials.username!=null && this.credentials.password!=null))
    {
      console.log("Have to Submit Form the server");
      //token generated
      this.loginService.generateToken(this.credentials).subscribe(
        (response:AuthResponse)=>{
          console.log(response);
          this.loginService.loginUser(response["jwttoken"]);
          console.log(this.loginService.getToken());
          window.location.href="/homepage";
          
        },
        (error:any)=>{
          console.log(error);
          this.msg="Invalid Credentials"
        }
      )
    }
    else{
      console.log("Files are empty !!");
      this.msg="User name or Password missing"
    }
  }

}