import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { Usuario } from './usuario';
import { map } from 'rxjs/operators';





@Injectable()
export class UsuarioService {

  url='http://localhost:8081/usuarios';
  constructor(private http:HttpClient) { }

  private httpHeader = new HttpHeaders({'Content-Type': 'application/json'})


getUsuarios(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.url).pipe(
        map(response => response as Usuario[])
    );
  } 
create(usuario: Usuario) : Observable<Usuario>{
  return this.http.post<Usuario>(this.url, usuario, {headers: this.httpHeader})
   
     
}
getUsuario(id):Observable<Usuario>{
  return this.http.get<Usuario>(`${this.url}/${id}`)
}
update(usuario: Usuario): Observable<Usuario>{
  return this.http.put<Usuario>(`${this.url}/${usuario.id}`, usuario, {headers: this.httpHeader})
}
delete(id: number): Observable<Usuario>{
  return this.http.delete<Usuario>(`${this.url}/${id}`, {headers: this.httpHeader})
}

  





}
