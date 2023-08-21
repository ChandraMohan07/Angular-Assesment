import { Component,OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-offer-ride',
  templateUrl: './offer-ride.component.html',
  styleUrls: ['./offer-ride.component.css']
})
export class OfferRideComponent implements OnInit {
  regForm:FormGroup;
  constructor(private fBuilder:FormBuilder){}
  ngOnInit(){
    this.regForm=this.fBuilder.group({
      name:['',Validators.required],
      slocation:['',Validators.required],
      destination:['',Validators.required],
      car:['',Validators.required],
      seats:['',[Validators.required,Validators.min(1),Validators.max(7)]]
    });
  }
  onSubmit(){
    if (this.regForm.valid) {
      alert('Registration Successful!');
    }
    else{
      alert('Data is Invalid');
    }
  }
}
