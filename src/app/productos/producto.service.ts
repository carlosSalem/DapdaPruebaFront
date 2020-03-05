import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from './producto';
import { map } from 'rxjs/operators';




@Injectable()
export class ProductoService {

  url2='http://localhost:8082/productos';
  constructor(private http:HttpClient) { }

  


getProductos(): Observable<Producto[]>{
    return this.http.get<Producto[]>(this.url2).pipe(
        map(response => response as Producto[])
    );
    }
  

}