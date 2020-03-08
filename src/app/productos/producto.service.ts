import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from './producto';
import { map } from 'rxjs/operators';




@Injectable()
export class ProductoService {

  url2='http://localhost:8082/productos';
  constructor(private http:HttpClient) { }

  private httpHeader = new HttpHeaders({'Content-Type': 'application/json'})


getProductos(): Observable<Producto[]>{
    return this.http.get<Producto[]>(this.url2).pipe(
        map(response => response as Producto[])
    );
  }
  createPr(producto: Producto) : Observable<Producto>{
    return this.http.post<Producto>(this.url2, producto, {headers: this.httpHeader})
     
       
  }
  getProducto(id):Observable<Producto>{
    return this.http.get<Producto>(`${this.url2}/${id}`)
  }  
  update(producto: Producto): Observable<Producto>{
    return this.http.put<Producto>(`${this.url2}/${producto.id}`, producto, {headers: this.httpHeader})
  }
  delete(id: number): Observable<Producto>{
    return this.http.delete<Producto>(`${this.url2}/${id}`, {headers: this.httpHeader})
  }
  

}