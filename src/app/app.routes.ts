import { Routes } from '@angular/router';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { AltaProductosComponent } from './lista-productos/alta-productos/alta-productos.component';
import { BajaProductosComponent } from './baja-productos/baja-productos.component';

export const routes: Routes = [
    { path: '', component: ListaProductosComponent,children:
        [{path:'alta',component:AltaProductosComponent},
            {path:'edicion/:id',component:AltaProductosComponent}
        ]
     },
];
