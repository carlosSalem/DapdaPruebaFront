import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { from, fromEventPattern } from 'rxjs';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ProductosComponent } from './productos/productos.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { UsuarioService } from './usuarios/usuario.service';
import { ProductoService } from './productos/producto.service';
import { PedidoService } from './pedidos/pedido.service';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';



const routes: Routes = [
  {path: '', redirectTo: 'usuarios', pathMatch:'full'},
  {path: 'usuarios', component: UsuariosComponent},
  {path: 'pedidos', component: PedidosComponent},
  {path: 'productos', component: ProductosComponent},

];



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UsuariosComponent,
    ProductosComponent,
    PedidosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UsuarioService, ProductoService, PedidoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
