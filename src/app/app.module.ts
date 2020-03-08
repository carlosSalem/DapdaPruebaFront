import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ProductosComponent } from './productos/productos.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { UsuarioService } from './usuarios/usuario.service';
import { ProductoService } from './productos/producto.service';
import { PedidoService } from './pedidos/pedido.service';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './usuarios/form.component';
import { FormsModule } from '@angular/forms';
import { FormPeComponent } from './pedidos/formPe.component';
import { FormPrComponent } from './productos/formPr.component';



const routes: Routes = [
  {path: '', redirectTo: 'usuarios', pathMatch:'full'},
  {path: 'usuarios', component: UsuariosComponent},
  {path: 'pedidos', component: PedidosComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'usuarios/form', component: FormComponent},
  {path: 'productos/formPr', component: FormPrComponent},
  {path: 'pedidos/formPe', component: FormPeComponent},
  {path: 'usuarios/form/:id', component: FormComponent},
  {path: 'productos/formPr/:id', component: FormPrComponent},
  {path: 'pedidos/formPe/:id', component: FormPeComponent}


];



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UsuariosComponent,
    ProductosComponent,
    PedidosComponent,
    FormComponent,
    FormPeComponent,
    FormPrComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UsuarioService, ProductoService, PedidoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
