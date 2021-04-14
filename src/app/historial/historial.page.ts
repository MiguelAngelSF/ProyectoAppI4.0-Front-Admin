import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage implements OnInit {
  viajes: any;

  constructor(public adminService: AdminService, public router:Router) { }

  ngOnInit() {
    this.getViajes();
  }

  getViajes() {
    this.adminService.obtenerViajes().then((data: any) =>{
      console.log(data.viajes);
      this.viajes=data.viajes;
    }).catch((err) =>{
      console.log(err);
    })
  }

  back(){
    this.router.navigate(['/tabs/tab1']);
  }


}
