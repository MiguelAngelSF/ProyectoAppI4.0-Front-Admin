import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AdminModel } from '../models/admin';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.page.html',
  styleUrls: ['./editar-perfil.page.scss'],
})
export class EditarPerfilPage implements OnInit {
  usuarios: any;

  constructor(public router:Router, private adminService:AdminService) { }
  usu: AdminModel = new AdminModel();



  back(){
    this.router.navigate(['/tabs/tab1']);
  }

  putUsuario() {
    this.adminService.modificarAdmin(this.usu._id, this.usu).then((data: any) => {
      Swal.fire({
        icon: 'success',
        title: 'Exito',
        text: 'Usuario Actualizado',
      })
      this.ngOnInit();
    }).catch((err) => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: ' Ocurrio algo inesperado',
      })
    });
  }

  ngOnInit() {
    this.getUsuarios();
  }

  getUsuarios() {
    this.adminService.obtenerAdmin().then((data: any) =>{
      console.log(data.usuarios);
      this.usuarios=data.usuarios;
    }).catch((err) =>{
      console.log(err);
    })
  }

}
