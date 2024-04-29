import { Injectable } from "@angular/core";
import { entorno } from "../_entorno/entorno";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Producto } from "../_modelo/producto";


@Injectable({
    providedIn: 'root'
})
export class ProductoService{
    private url:string = `${entorno.HOST}/productos`;

    constructor(private http:HttpClient) {}

    obtenerTodos():Observable<Producto[]>{
        return this.http.get<Producto[]>(this.url);
    }

    alta(p:Producto){
        console.log('ha llegado al servicio '+p.nombreProducto)
        return this.http.post(this.url,p)
    }

    baja(id:number){
        const urlBaja = `${this.url}/${id}`
        return this.http.delete(urlBaja)
    }
}