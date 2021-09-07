import { Component, OnInit } from '@angular/core';
import { Cab } from './cab';
import { CabService } from './cab.service';

@Component({
  selector: 'app-cab-list',
  templateUrl: './cab-list.component.html',
  styleUrls: ['./cab-list.component.css']
})
export class CabListComponent implements OnInit {

  cablist!: Cab[];
  constructor(private cabservice:CabService) { }

  ngOnInit(): void {
  }

}
