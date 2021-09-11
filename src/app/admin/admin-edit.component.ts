import { Component, OnInit } from '@angular/core';
import { Admin } from './admin';
import { AdminService } from './admin.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.css']
})
export class AdminEditComponent implements OnInit {

id: number=0;
admin!: Admin;
submitted = false;
  constructor(private route: ActivatedRoute, private router: Router, private adminService: AdminService) { }

  ngOnInit(){
    this.admin = new Admin();
    this.id = this.route.snapshot.params['id'];
    this.adminService.getAdmin(this.id).subscribe(data => {
      console.log(data)
      this.admin = data;

    }, error => console.log(error));
  }
editAdmin() {
  this.adminService.editAdmin(this.id, this.admin)
  .subscribe(data => {
    console.log(data);
    this.admin = new Admin();
    this.gotoList();
  }, error => console.log(error));
}
onSubmit() {
  this.submitted = true;
  this.editAdmin();
}
gotoList() {
  this.router.navigate(['/admins']);
}
onBack() : void {
  this.router.navigate(['/admin/list']);
}
}

