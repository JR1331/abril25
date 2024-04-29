import { Component, OnInit } from '@angular/core';
import { Producto } from '../_modelo/producto';
import { ProductoService } from '../_servicio/productos.service';

@Component({
  selector: 'app-lista-productos',
  standalone: true,
  imports: [],
  templateUrl: './lista-productos.component.html',
  styleUrl: './lista-productos.component.css'
})
export class ListaProductosComponent implements OnInit{
  productos: Producto[]= [];
  constructor(private servicio:ProductoService){}

  ngOnInit(): void {
    this.servicio.obtenerTodos()
    .subscribe(data => this.productos = data);
  }

}
