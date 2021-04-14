import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { AdminService } from '../service/admin.service';
import { AdminModel } from '../models/admin';
import { Plugins } from '@Capacitor/core';
const {Geolocation} = Plugins;

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  usuarios: any;
  currentCenter: any;
  coordinates: any[] = [];
  defaultZoom = 14;

  constructor(private adminService:AdminService) {}

  id: AdminModel = new AdminModel();

  ionViewDidEnter() {
    this.getCurrentPosition();
  }

  async getCurrentPosition(){
    const coordinates = await Geolocation.getCurrentPosition();
    this.currentCenter = {
      lat: coordinates.coords.latitude,
      lng: coordinates.coords.longitude
    };
  }

  watchPOsition(){
    Geolocation.watchPosition({}, position=>{
      this.currentCenter = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      this.coordinates.push({
        lat: position.coords.latitude,
        lng: position.coords.longitude
      });
    })
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

  deleteUser(id: string){
    this.adminService.bajaAdmin(id).then((data: any) => {
      Swal.fire({
        icon: 'success',
        title: 'Exito',
        text: 'Usuario Eliminado',
      })
      this.ngOnInit();
    }).catch((err) => {
      console.log(err);
    });
      
  }

}
