import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private loginService:LoginService,private router:Router) { }

  ngOnInit(): void {
    console.log(this.loggedin);
    
  }
  public loggedin=this.loginService.isLoggedIn;
  
  public loginvalue="Login";
  Login(){
    this.loginService.isLoggedIn();
    this.loginvalue=="Logout"
  }

  Logout(){
    this.loginService.logout();
    this.router.navigate(["/login"]);
  }

  gotoPatients(){

  }
  gotoDoctors(){

  }
}
