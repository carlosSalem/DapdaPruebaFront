import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { Pedido } from './pedido';
import { map } from 'rxjs/operators';





@Injectable()
export class PedidoService {

  
  constructor(private http:HttpClient) { }
  private httpHeader = new HttpHeaders({'Content-Type': 'application/json'})


  url3='http://localhost:8083/pedidos';

  getPedidos(): Observable<Pedido[]>{
    return this.http.get<Pedido[]>(this.url3).pipe(
        map(response => response as Pedido[])
    );
  }
  createPe(pedido: Pedido) : Observable<Pedido>{
    return this.http.post<Pedido>(this.url3, pedido, {headers: this.httpHeader})

  } 
  getPedido(id):Observable<Pedido>{
    return this.http.get<Pedido>(`${this.url3}/${id}`)
  }
  update(pedido: Pedido): Observable<Pedido>{
    return this.http.put<Pedido>(`${this.url3}/${pedido.id}`, pedido, {headers: this.httpHeader})
  }
  delete(id: number): Observable<Pedido>{
    return this.http.delete<Pedido>(`${this.url3}/${id}`, {headers: this.httpHeader})
  }
  





}