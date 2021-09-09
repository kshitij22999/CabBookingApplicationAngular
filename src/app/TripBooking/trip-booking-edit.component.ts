import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TripBooking } from './tripbooking';
import { TripBookingService } from './tripbooking.service';

@Component({
  selector: 'trip-booking-edit',
  templateUrl: './trip-booking-edit.component.html',
  styleUrls: ['./trip-booking-edit.component.css']
})
export class TripBookingEditComponent implements OnInit {
  tripbooking!:TripBooking;
  editForm!:FormGroup;
  constructor(private tripservice:TripBookingService,private route:ActivatedRoute,
    private router:Router,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') || 0;
    this.tripservice.getTripById(+id).subscribe( tripbooking => {
      this.tripbooking=tripbooking;
    });
    this.editForm = this.formBuilder.group({

      fromLocation:['',Validators.required],
      toLocation:['',Validators.required]

    })

  }

  onSubmit(){
    this.tripservice.updateTrip(this.editForm.value).subscribe((data)=>{
        alert('Data updated successfully');
        console.log(data);
        this.router.navigate(['triplist']);

    });
    
  }

}
