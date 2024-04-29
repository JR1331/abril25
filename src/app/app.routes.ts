import { Routes } from '@angular/router';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { AltaProductosComponent } from './alta-productos/alta-productos.component';
import { BajaProductosComponent } from './baja-productos/baja-productos.component';

export const routes: Routes = [
    { path: 'listar', title: 'Listar', component: ListaProductosComponent },
    { path: 'añadir', title: 'Añadir', component: AltaProductosComponent },
    { path: 'eliminar', title: 'Eliminar', component:BajaProductosComponent}
];
