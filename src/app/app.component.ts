import { Component } from '@angular/core';
import {UsuariosService} from "./services/usuarios.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'interceptores';

  constructor( private usuariosService: UsuariosService ) {

    this.usuariosService.obtenerUsuarios().subscribe( {
         next: (resp: any) => {

           // console.log( resp );

                   },
         error: (err: any) => {
                console.log('Error en el appComponent', err);
              }

        }

      );


  }
}
