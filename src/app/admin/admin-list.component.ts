import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Admin } from './admin';
import { AdminService } from './admin.service';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {
  admins!:Observable<Admin[]>;
 

  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit(){
    this.reloadData();
  }
   reloadData() {
     this.admins = this.adminService.getAdminsList();
  }

  deleteAdmin(id: number) {
    this.adminService.deleteAdmin(id)
    .subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));
    
  }
  editAdmin(id: number) {
    this.router.navigate(['edit', id]);
  }
  adminDetails(id: number) {
    this.router.navigate(['details', id]);
  }
}

