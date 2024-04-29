import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductoService } from '../_servicio/productos.service';

@Component({
  selector: 'app-baja-productos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './baja-productos.component.html',
  styleUrl: './baja-productos.component.css'
})
export class BajaProductosComponent {
  id:number=0;
  constructor(private productoService: ProductoService) {}
darDeBajaProducto() {
  this.productoService.baja(this.id).subscribe(
    respuesta => {
      console.log('Producto borrado exitosamente:', respuesta);
      this.id = 0;
    }
  )
}

}
