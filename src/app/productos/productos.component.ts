import { Component, OnInit } from '@angular/core';
import { Producto } from './producto';
import { ProductoService } from './producto.service';
import { from } from 'rxjs';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html'
})
export class ProductosComponent implements OnInit {
  productos: Producto[]

  constructor(private productoService: ProductoService) { }

  ngOnInit() {
    this.productoService.getProductos().subscribe(
      productos => this.productos = productos
    );
  }

}
