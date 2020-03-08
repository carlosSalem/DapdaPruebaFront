import { Component, OnInit } from '@angular/core';
import { PedidoService } from './pedido.service';
import { Pedido } from './pedido';
import { from } from 'rxjs';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html'
})
export class PedidosComponent implements OnInit {
  pedidos: Pedido[]
  constructor(private pedidoService: PedidoService) { }

  ngOnInit() {
    this.pedidoService.getPedidos().subscribe(
      pedidos => this.pedidos = pedidos
    );
  }

}
