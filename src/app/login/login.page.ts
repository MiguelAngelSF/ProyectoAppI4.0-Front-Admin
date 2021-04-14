import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import Swal from 'sweetalert2';
import { AdminModel } from '../models/admin';
import { AdminService } from '../service/admin.service';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario: any;
  password: string;
  tipo: string;

  constructor(public alertController: AlertController, 
    public router: Router, 
    public modalCtrl: ModalController, 
    private loginService: LoginService, 
    private AdminService: AdminService ) { 
    this.usuario = this.password = this.tipo = "";
  }
  admin: AdminModel = new AdminModel();

  async logIn(){
    if(this.usuario == this.admin.email && this.password == this.admin.password ){
      //Las credenciales son correctas
     let navExtras:NavigationExtras = {
       queryParams:{
         userName:this.usuario
       }
     }
     let infoUser = {
       userName: this.usuario,
       correo: 'user@gamil.com',
       tipoUser: 'admin'
     }
     localStorage.setItem('infoUserFacebook',JSON.stringify(infoUser))
     this.router.navigate(['/menu-passenger'], navExtras)

    } 
    if(this.usuario == 'admin' && this.password == 'pass123' ){
      //Las credenciales son correctas
     let navExtras:NavigationExtras = {
       queryParams:{
         userName:this.usuario
       }
     }
     let infoUser = {
       userName: this.usuario,
       correo: 'user@gamil.com',
       tipoUser: 'admin'
     }
     localStorage.setItem('infoUserFacebook',JSON.stringify(infoUser))
     this.router.navigate(['/menu-passenger'], navExtras)

    } 
  
    
    
  }

  loginAdmin(){
    console.log(this.admin); 
    this.loginService.loginAdministrador(this.admin).then((data: any) =>{
      if (this.admin.nombre=='admin' && this.admin.password=='admin') {
        this.router.navigate(['/tabs/tab2'])
      }
      Swal.fire({
        icon: 'success',
        title: 'Bienvenido',
        text: 'Administrador',
      }) 
    }).catch((err) =>{
    console.log(err)
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: ' Ocurrio algo inesperado',
    })
    });
  }
 

  async dismiss() {
    await this.modalCtrl.dismiss();
  }
 
  ngOnInit() {
  }



}
