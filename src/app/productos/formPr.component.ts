import { Component, OnInit } from '@angular/core';
import { Producto } from './producto';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductoService } from './producto.service';
import swal from 'sweetalert2';


@Component({
  selector: 'app-formPr',
  templateUrl: './formPr.component.html'
})
export class FormPrComponent implements OnInit {
  public producto: Producto = new Producto()
  public tituloProducto:string = "crear Producto"
  
  constructor(public ProductoService: ProductoService,
    public router: Router,
    public activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarProducto()
  }
  cargarProducto(): void{
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.ProductoService.getProducto(id).subscribe( (producto) => this.producto = producto)
      }

    })

  }
  public createPr(): void{
    this.ProductoService.createPr(this.producto)
    .subscribe(producto => { 
      this.router.navigate(['/productos'])
      swal.fire('Nuevo Producto', `Producto ${producto.nombre} creado con éxito!`, 'success')


      }
      );
    
  }
  update():void{
    this.ProductoService.update(this.producto)
    .subscribe(producto => {
      this.router.navigate(['/productos'])
      swal.fire('producto Actualizado', `Cliente ${this.producto.nombre} actualizado con éxito!`, 'success')
    }

    )
  }

}
