import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

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

}
