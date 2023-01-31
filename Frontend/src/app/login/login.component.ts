import { Component, ElementRef, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import { users } from '../user';
import { HomepageComponent  } from '../homepage/homepage.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm: FormGroup | any;
 
  constructor(
    private router:Router,private el:ElementRef,
    
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

  //  email!: String;
  //  password!: String;
  //   users={
  //    email:'',
  //    password:''
  //  }

  credentials={
    email:'',
    password:''
  }

  ngOnInit(): void {
  }
  onSubmit(email:any,password:any){
    if(!this.loginForm.valid){
      return;
    }
    console.log(email.value);
    
    this.credentials.email==email.value;
    this.credentials.password==password.value;
    
    console.log(this.credentials.email);
    

    this.router.navigate(['homepage'])
  }
}