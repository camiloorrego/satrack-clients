import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private token = '';

  constructor(private http: HttpClient) { }

  login(body: any) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };

    return this.http.post('https://rutas-clientes.azurewebsites.net/api/user/signin', body, options);
  }

  setToken(value: string){
    this.token = value;
  }

  hasToken(): boolean {
    return this.token !== '';
  }
}
