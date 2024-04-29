import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { AltaProductosComponent } from './alta-productos/alta-productos.component';
import { BajaProductosComponent } from './baja-productos/baja-productos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ListaProductosComponent,AltaProductosComponent,BajaProductosComponent,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'abril25';
}
