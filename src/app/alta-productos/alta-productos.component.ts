import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Producto } from '../_modelo/producto';
import { ProductoService } from '../_servicio/productos.service';

@Component({
  selector: 'app-alta-productos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './alta-productos.component.html',
  styleUrl: './alta-productos.component.css'
})
export class AltaProductosComponent {
  producto: Producto = new Producto();

  constructor(private productoService: ProductoService) {}
  insertar() {
    this.productoService.alta(this.producto).subscribe(
      respuesta => {
        console.log('Producto creado exitosamente:', respuesta);
        this.producto = new Producto();
      }
    );
  }
}
