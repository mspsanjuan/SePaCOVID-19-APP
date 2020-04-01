import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { IDatosProfesional } from "./../interfaces/interface-profesional";
import {Location} from '@angular/common';

@Component({
  selector: 'ngx-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss']
})

export class RegistrarComponent implements OnInit {
 
  profesional: IDatosProfesional = {
    nombre : '',
    apellido: '',
    dni: 0,
    fechaNacimiento: new Date(''),
    contacto: '',
    email: '',
    especialidad: '',
  };

  constructor(
    private route: ActivatedRoute,
    private _location: Location
  ){}

  ngOnInit(){
    this.route.params.subscribe( params => {
     
      // console.log(Object.keys(params['id'].length > 0));
      if(typeof params['id'] !== 'undefined'){
        this.profesional.nombre = params['id'].split(' ')[0];
        this.profesional.apellido = params['id'].split(' ')[1];
      }
    })
  }

  backClicked() {
    this._location.back();
  }

}



