import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';
import { UsuarioService } from './usuario.service';
import { from } from 'rxjs';
import swal from 'sweetalert2';
import Swal from 'sweetalert2';





@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html'
  
})
export class UsuariosComponent implements OnInit {
  
  usuarios: Usuario[];
  
 
  constructor(private usuarioService: UsuarioService) { } 

  ngOnInit() {
    this.usuarioService.getUsuarios().subscribe(
      usuarios => this.usuarios = usuarios
    );
  }
  delete(usuario:Usuario): void {
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
        this.usuarioService.delete(usuario.id).subscribe(
          response => {
            this.usuarios = this.usuarios.filter(cli => cli !== usuario)
        Swal.fire(
          'Cliente eliminado',
          'Tu archivo ${usuario.nombre} ha sido eliminado.',
          'success'
        )
      }
    )
    }
    
  })
  }

}
