import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public loggedin=false;
  public loginvalue="Login"
  Login(){
    this.loggedin=true;
    this.loginvalue="Logout";
  }

  Logout(){
    this.loggedin=false;
  }

  gotoPatients(){

  }
  gotoDoctors(){

  }
}
