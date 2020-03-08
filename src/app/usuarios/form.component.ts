import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';
import {UsuarioService} from './usuario.service';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {
   public usuario: Usuario = new Usuario()
   public tituloUsuario:string = "crear Usuario"
  


  constructor(public UsuarioService: UsuarioService,
    public router: Router,
    public activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarUsuario()
  }


  cargarUsuario(): void{
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.UsuarioService.getUsuario(id).subscribe( (usuario) => this.usuario = usuario)
      }

    })

  }


   create(): void {
    this.UsuarioService.create(this.usuario)
    .subscribe(usuario => { 
      this.router.navigate(['/usuarios'])
      swal.fire('Nuevo Usuario', `Usuario ${usuario.nombre} creado con éxito!`, 'success')


      }
      );
      
    }


    update():void{
      this.UsuarioService.update(this.usuario)
      .subscribe(usuario => {
        this.router.navigate(['/usuarios'])
        swal.fire('Usuario Actualizado', `Cliente ${this.usuario.nombre} actualizado con éxito!`, 'success')
      }
  
      )
    }
  

}
