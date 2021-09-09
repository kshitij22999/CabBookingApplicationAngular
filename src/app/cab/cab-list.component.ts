import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cab } from './cab';
import { CabService } from './cab.service';


@Component({
  selector: 'app-cab-list',
  templateUrl: './cab-list.component.html',
  styleUrls: ['./cab-list.component.css']
})
export class CabListComponent implements OnInit {

  cablist!: Cab[];
  constructor(private cabService: CabService,
    private router : Router) {

  }

  ngOnInit(): void {
    this.cabService.getAllCabs().subscribe
      /* ({
        next: cablist => {
          this.cablist = cablist;
        }
      }) */
  }
  addCab() : void  {
    this.router.navigate(['add']);
  }


}