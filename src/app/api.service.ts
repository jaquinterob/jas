import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http:HttpClient) { }
  
  validar_credenciales(usuario,password){
    let form = new FormData();
    form.append('validar_credenciales','1');
    form.append('usuario', usuario);
    form.append('password', password);
    return this._http.post('http://localhost/api/api_jas.php', form);
  }

}


