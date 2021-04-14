import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertapModel } from '../models/alerta';

@Injectable({
  providedIn: 'root'
})
export class AlertaService {
  
  url = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  obtenerAlertas() {
  return this.http.get(`${this.url}/alerta`).toPromise();
  }

  altaAlerta(alertap: AlertapModel) {
  console.log(alertap);
  return this.http.post(`${this.url}/alerta`, alertap).toPromise() ;
  }

  bajaAlerta(_id: string){
  return this.http.delete(`${this.url}/alerta/${_id}`).toPromise();
  }
}
