import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-manav-singh',
  templateUrl: './manav-singh.component.html',
  styleUrls: ['./manav-singh.component.css']
})
export class ManavSinghComponent implements OnInit {

  constructor(el: ElementRef) { }

  ngOnInit(): void {
    
  }

  PatientDetails=[{
    Name:"Manav Singh",
    Address:"Treasure Collection Bldg, Ab Nair Road, Near Juhu Church & Post Office, Juhu, Mumbai, Maharashtra, 400049",
    Phone:"9998856610",

  }]

  PatientContactDetails=[{
    FatherName:"Randeep Singh",
    MotherName:"Arshpreet Singh"
  }]

  PatientHistory=[{
    Date:"19/12/2022",
    VisitNo:"23365",
    VisitStatus:"Complete",
    ClaimNo:"559698",
    ClaimStatus:"Complete",
    InvoiceNo:"7786546576"
  }]
}
