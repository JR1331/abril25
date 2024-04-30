import { Injectable } from "@angular/core";
import { entorno } from "../_entorno/entorno";
import { HttpClient } from "@angular/common/http";
import { Observable, Subject, map } from "rxjs";
import { Producto } from "../_modelo/producto";


@Injectable({
    providedIn: 'root'
})
export class ProductoService{
    private url:string = `${entorno.HOST}/productos`;
    productoCambio = new Subject<Producto[]>();

    constructor(private http:HttpClient) {}

    obtenerTodos():Observable<Producto[]>{
        return this.http.get<Producto[]>(this.url)
        .pipe(
            map(data => {return data.sort((a,b) =>a.idProducto-b.idProducto)})
        )
    }

    obtenerPorId(id:number){
        return this.http.get<Producto>(`${this.url}/${id}`)
    }

    alta(p:Producto):Observable<any>{
        console.log('ha llegado al servicio '+p.nombreProducto)
        return this.http.post(this.url,p)
    }

    baja(id:number):Observable<any>{
        const urlBaja = `${this.url}/${id}`
        return this.http.delete(urlBaja)
    }

    modificar(p:Producto):Observable<any>{
        return this.http.put(this.url, p)
    }
}