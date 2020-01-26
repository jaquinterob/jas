import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Md5 } from "md5-typescript";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario:string= '';
  password:string= '';
  usuario_jas:usuarioJas;
  constructor( private _api:ApiService) { }

  ngOnInit() {
    if (localStorage.getItem('usuario_jas')){
        this.usuario = localStorage.getItem('usuario_jas');
        this.password = localStorage.getItem('password_jas');
        this.validar_credencales();
    }
  }

  validar_credencales(){
    if (this.usuario != '' && this.password != '') {
      this._api.validar_credenciales(this.usuario, Md5.init(this.password)).subscribe(
        (data:any) => {
          if (data['validacion']) {
            console.log(data.datos[0]);
            this.usuario_jas = data.datos[0];
            localStorage.setItem('usuario_jas', this.usuario_jas.usuario);
            localStorage.setItem('password_jas', this.password);
          } else {
            console.log('Usuario no autorizado');
          }
        },
        error => {
          console.log(error);
        }
      );
    } else {
      console.log('faltan datos');
    }
  }
}

export interface usuarioJas {
  id: string;
  nombre: string;
  cargo: string;
  usuario: string;
  password: string;
  activo: string;
}
