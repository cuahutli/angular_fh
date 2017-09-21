import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { Heroe } from "../../interfaces/heroe.interface";
import { HeroesService } from "../../services/heroes.service";

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  heroe:Heroe = {
    nombre:"",
    casa:"Marvel",
    bio:""
  }
  nuevo:boolean = false;
  id:string;

  constructor(private _heroesService:HeroesService, private _router:Router, private _route:ActivatedRoute) { 
    this._route.params.subscribe( parametros =>{
      this.id = parametros['id'];
    });
  }
  
  ngOnInit() {
  }
  
  guardar(){
    console.log(this.heroe);
    
    //this._heroesService.nuevoHeroe(this.heroe); // si lo dejo así no se hará hasta que no nos subscribamos
    if( this.id == "nuevo"){
      //insertando
      this._heroesService.nuevoHeroe(this.heroe).subscribe( data => {
          this._router.navigate(['/heroe', data.name])
        }, error => {
        console.error(error)
      })
    }else{
      //actualizando
      this._heroesService.actualizarHeroe(this.heroe, this.id).subscribe( data => {
        console.log(data);
      }, error => {
      console.error(error)
    })
      
    }
    
  }  

}
