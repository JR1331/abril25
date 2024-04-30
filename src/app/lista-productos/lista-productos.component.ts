import { Component, OnInit } from '@angular/core';
import { Producto } from '../_modelo/producto';
import { ProductoService } from '../_servicio/productos.service';
import { Observable } from 'rxjs';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-lista-productos',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  templateUrl: './lista-productos.component.html',
  styleUrl: './lista-productos.component.css'
})
export class ListaProductosComponent implements OnInit{
  productos: Producto[]= [];
  constructor(private servicio:ProductoService){}

  ngOnInit(): void {
    this.servicio.productoCambio
    .subscribe((data) => {this.productos = data})

    this.servicio.obtenerTodos()
    .subscribe(datos => {this.productos=datos;console.log("Entra listar")})
  }

  eliminar(id:number){
    this.servicio.baja(id)
    .subscribe(()=>{this.servicio.obtenerTodos()
      .subscribe(data=>this.servicio.productoCambio.next(data))
    })
  }

  recibirAviso(listaActualizada:Observable<Producto[]>){
    console.warn("regresa al padre ----")
    this.servicio.obtenerTodos()
    .subscribe(datos=>{this.productos=datos})
  }

}
