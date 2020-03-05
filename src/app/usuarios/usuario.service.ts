import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { Usuario } from './usuario';
import { map } from 'rxjs/operators';




@Injectable()
export class UsuarioService {

  url='http://localhost:8081/usuarios';
  constructor(private http:HttpClient) { }

  


getUsuarios(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.url).pipe(
        map(response => response as Usuario[])
    );
}
  





}
