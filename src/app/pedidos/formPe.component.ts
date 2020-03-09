import { Component, OnInit } from '@angular/core';
import { Pedido } from './pedido';
import { PedidoService} from './pedido.service'
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-formPe',
  templateUrl: './formPe.component.html'
})
export class FormPeComponent implements OnInit {
  public pedido: Pedido = new Pedido ()
  public tituloPedido:string = "crear Pedido"
  
  constructor(public PedidoService: PedidoService,
    public router: Router,
    public activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarPedido()
  }
  cargarPedido(): void{
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.PedidoService.getPedido(id).subscribe( (pedido) => this.pedido = pedido)
      }

    })

  }
  public createPe(): void{
    this.PedidoService.createPe(this.pedido)
    .subscribe(pedido => { 
      this.router.navigate(['/pedidos'])
      swal.fire('Nuevo Pedido', `Pedido ${pedido.nombre} creado con éxito!`, 'success')


      }
      );
    
  }
  update():void{
    this.PedidoService.update(this.pedido)
    .subscribe(pedido => {
      this.router.navigate(['/pedidos'])
      swal.fire('Usuario Actualizado', `Cliente ${this.pedido.nombre} actualizado con éxito!`, 'success')
    }

    )
  }

}
