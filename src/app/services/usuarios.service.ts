import { Injectable } from '@angular/core';
import {map} from "rxjs";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {


  constructor( private http: HttpClient ) { }

  obtenerUsuarios() {

    let params = new HttpParams().append('page', '1');
    params = params.append('nombre', 'Fernando Herrera');

    // https://reqres.in/api/users?page=2


    return this.http.get(`https://reqres.in/api/user`, {
      params
    }).pipe(
      map( (resp: any) => {

        console.log('pipe map', resp)

        resp['data']
      }),
    );

  }


}

