import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from './admin';
import { AdminService } from './admin.service';

@Component({
  selector: 'app-admin-add',
  templateUrl: './admin-add.component.html',
  styleUrls: ['./admin-add.component.css']
})
export class AdminAddComponent implements OnInit {
  admin: Admin = new Admin();
  submitted = false;

  constructor(private adminService: AdminService, private router:Router) { }
 
  ngOnInit(): void {
  }
  newAdmin(): void {
    this.submitted = false;
    this.admin = new Admin();
  }
  save() {
    this.adminService.addAdmin(this.admin).subscribe(data => {
      console.log(data)
      this.admin = new Admin();
      this.gotoList();
    },
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/admin']);
  }
  onBack() : void{
    this.router.navigate(['/admin/list']);
  }
}
