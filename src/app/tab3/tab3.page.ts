import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { AlertapModel } from '../models/alerta';
import { AlertaService } from '../service/alerta.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

  alerta: any;

  constructor(private alertaService: AlertaService) {}

  id: AlertapModel = new AlertapModel();

  ngOnInit() {
    this.getAlerts();
  }

  getAlerts(){
    this.alertaService.obtenerAlertas().then((data: any) => {
      console.log(data.alerta);
      this.alerta=data.alerta;
    }).catch((err) =>{
      console.log(err);
    })
  }

  deleteAlerts(id: string){
    this.alertaService.bajaAlerta(id).then((data: any) => {
      Swal.fire({
        icon: 'success',
        title: 'Exito',
        text: 'Alerta Eliminada',
      })
      this.ngOnInit();
    }).catch((err) => {
      console.log(err);
    });
      
  }

}
