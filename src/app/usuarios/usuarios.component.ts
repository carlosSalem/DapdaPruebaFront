import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';
import { UsuarioService } from './usuario.service';
import { from } from 'rxjs';




@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html'
  
})
export class UsuariosComponent implements OnInit {
  
  usuarios: Usuario[] 
 
  constructor(private usuarioService: UsuarioService) { } 

  ngOnInit() {
    this.usuarioService.getUsuarios().subscribe(
      usuarios => this.usuarios = usuarios
    );
  }

}
