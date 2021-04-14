import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AdminModel } from '../models/admin';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = 'http://localhost:3000'
  constructor(private http: HttpClient) { }

  loginAdministrador(admin: AdminModel) {
    console.log(admin);
    return this.http.post(`${this.url}/login`, admin).toPromise() ;
    
  }

}
