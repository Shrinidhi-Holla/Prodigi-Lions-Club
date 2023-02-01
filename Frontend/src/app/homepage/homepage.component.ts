import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
   
  }

  public patientslist=[
    "Dante Horton",
    "Gina Everett",
    "Porter Vasquez",
    "Jenny Snow",
    "Derrick Manning",
    "Alfonso Santos",
    "Johnathon Byrd",
    "Ivan Harvey",
    "Zachariah Morales",
    "Mario Rasmussen",
    "Keagan Best",
    "Julius Hutchinson"
  ]

  patientdetails(){
    
    
  }
  updatedetails(){
   this.router.navigate(["/login"]) 
  }

}
