import { Component, OnInit } from '@angular/core';
import { PedidoService } from './pedido.service';
import { Pedido } from './pedido';
import { from } from 'rxjs';
import Swal from 'sweetalert2';

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

  delete(pedido:Pedido): void {
    Swal.fire({
      title: 'Estas seguro?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'SI!'
    }).then((result) => {
      if (result.value) {
        this.pedidoService.delete(pedido.id).subscribe(
          response => {
            this.pedidos = this.pedidos.filter(cli => cli !== pedido)
        Swal.fire(
          'Pedido eliminado',
          'Tu archivo ${pedido.nombre} ha sido eliminado.',
          'success'
        )
      }
    )
    }
    
  })
  }

}

