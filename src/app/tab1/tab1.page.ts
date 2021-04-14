import { Component,  OnInit } from '@angular/core';
import { AdminService } from '../service/admin.service';
import { AdminModel } from '../models/admin';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  admins: any;

  constructor(public router:Router, private adminService:AdminService) {}
  admin: AdminModel = new AdminModel();

  ngOnInit() {
  }

  logout(){
    localStorage.removeItem('infoUserFacebook');
    this.router.navigate(['/'])
  }

  editarPerfil(){
    this.router.navigate(['/editar-perfil']);
  }

  historial(){
    this.router.navigate(['/historial']);
  }

getUsuarios() {
  this.adminService.obtenerAdmin().then((data: any) =>{
    console.log(data.admins);
    this.admins=data.admins;
  }).catch((err) =>{
    console.log(err);
  })
}

postUsuario(){
  console.log(this.admin); 
  this.adminService.altaAdmin(this.admin).then((data: any) =>{
    Swal.fire({
      icon: 'success',
      title: 'Exito',
      text: 'Usuario Insertado',
    })
    this.ngOnInit();
  }).catch((err) =>{
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: ' Ocurrio algo inesperado',
    })
  });
}
}

