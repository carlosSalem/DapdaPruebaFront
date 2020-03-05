import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';




@Injectable()
export class PedidoService {

  
  constructor(private http:HttpClient) { }

  Url='http://localhost:8081/usuarios';

//   getProducto(){
//     return this.http.get<Pedido[]>(this.Url);
//   }
  
}