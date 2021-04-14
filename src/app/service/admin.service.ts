import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AdminModel } from '../models/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  url = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  obtenerAdmin() {
    return this.http.get(`${this.url}/usuario`).toPromise();
  }
    
  altaAdmin(admin: AdminModel) {
    console.log(admin);
    return this.http.post(`${this.url}/usuario`, admin).toPromise() ;
  }

  modificarAdmin(_id, actualizar){
    return this.http.put(`${this.url}/usuario/${_id}`, actualizar).toPromise();
  }

  bajaAdmin(_id: string){
    return this.http.delete(`${this.url}/usuario/${_id}`).toPromise();

  }

  obtenerViajes() {
    return this.http.get(`${this.url}/viaje`).toPromise();
  }
    

}
