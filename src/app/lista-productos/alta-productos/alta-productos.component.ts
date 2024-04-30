import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Producto } from '../../_modelo/producto';
import { ProductoService } from '../../_servicio/productos.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-alta-productos',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './alta-productos.component.html',
  styleUrl: './alta-productos.component.css'
})
export class AltaProductosComponent implements OnInit{

  form:FormGroup;
  id:number=0;
  edicion:boolean=false;

  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private servicio:ProductoService,
  ){
    this.form=new FormGroup({
      'idProducto':new FormControl(0),
      'nombreProducto':new FormControl(''),
      'precioUnitario':new FormControl(0),
      'discontinuado': new FormControl(0)
    })
  }
  
  ngOnInit(): void {
    this.route.params
    .subscribe(data=>{
      this.id = data['id'];
      this.edicion=data['id'] !=null;
      this.formaFormulario();
    });
  }

  formaFormulario(){
    if(this.edicion){
      this.servicio.obtenerPorId(this.id)
      .subscribe(data => {
        this.form = new FormGroup({
          'idProducto': new FormControl(data.idProducto),
          'nombreProducto': new FormControl(data.nombreProducto),
          'precioUnitario':new FormControl(data.precioUnitario),
          'discontinuado': new FormControl(data.discontinuado)
        });
      })
    }
  }

  operar(){
    let p:Producto={
      'idProducto':this.form.value['idProducto'],
      'nombreProducto':this.form.value['nombreProducto'],
      'precioUnitario':this.form.value['precioUnitario'],
      'discontinuado':this.form.value['discontinuado']
    }
    if(this.edicion){
      this.servicio.modificar(p)
      .subscribe(()=>{
        this.servicio.obtenerTodos()
        .subscribe(data=>{
          this.servicio.productoCambio.next(data)
        })
      })
    }else{
      this.servicio.alta(p)
      .subscribe(()=>{
        this.servicio.obtenerTodos()
        .subscribe(data=>{
          this.servicio.productoCambio.next(data)
        })
      })
    }
    this.router.navigate([''])
  }
}
