import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Cab } from './cab';
import { CabService } from './cab.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cab-edit',
  templateUrl: './cab-edit.component.html',
  styleUrls: ['./cab-edit.component.css']
})
export class CabEditComponent implements OnInit {

  cab!:Cab;
  editForm!:FormGroup;

  constructor(private formBuilder: FormBuilder,
    private cabService: CabService,
    private router : Router) { }
  
  ngOnInit(): void {
    this.editForm = this.formBuilder.group({
           
      
      cabId: this.cab.cabId,
      carType: this.cab.carType,
      perKmRate: this.cab.perKmRate
     
    })
  }

  deleteCab(cab: Cab): void {
    this.cabService.deleteCab(cab).subscribe( data => {console.log("cab deleted")
    this.cab=this.cab.filter((u: Cab) =>u !== cab);
  })
}
onSubmit(){
  this.cabService.updateCab(this.editForm.value)
  .subscribe(data => {},
  error => {
    alert(error);
  });
}
}
