import { Component, OnInit } from '@angular/core';
import { Producto } from './producto';
import { ProductoService } from './producto.service';
import { from } from 'rxjs';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html'
})
export class ProductosComponent implements OnInit {
  productos: Producto[];

  constructor(private productoService: ProductoService) { }

  ngOnInit() {
    this.productoService.getProductos().subscribe(
      productos => this.productos = productos
    );
  }
  delete(producto:Producto): void {
    Swal.fire({
      title: 'Estas seguro?',
      text: "No podras volver a recuperarlo!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'SI!'
    }).then((result) => {
      if (result.value) {
        this.productoService.delete(producto.id).subscribe(
          response => {
            this.productos = this.productos.filter(cli => cli !== producto)
        Swal.fire(
          'Producto eliminado',
          'Tu archivo ${producto.nombre} ha sido eliminado.',
          'success'
        )
      }
    )
    }
    
  })
  }

}



