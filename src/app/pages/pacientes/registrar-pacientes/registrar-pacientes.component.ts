import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { IDatosPaciente } from "./../interfaces/interface-paciente";
import {Location} from '@angular/common';

@Component({
  selector: 'ngx-registrar-pacientes',
  templateUrl: './registrar-pacientes.component.html',
  styleUrls: ['./registrar-pacientes.component.scss']
})
export class RegistrarPacientesComponent implements OnInit {

  paciente: IDatosPaciente = {
    nombre : '',
    apellido: '',
    dni: 0,
    fechaNacimiento: new Date(''),
    contacto: '',
    email: '',
  };

  constructor(
    private route: ActivatedRoute,
    private _location: Location
  ){}

  ngOnInit(){
    this.route.params.subscribe( params => {
     
      // console.log(Object.keys(params['id'].length > 0));
      if(typeof params['id'] !== 'undefined'){
        this.paciente.nombre = params['id'].split(' ')[0];
        this.paciente.apellido = params['id'].split(' ')[1];
      }
    })
  }

  backClicked() {
    this._location.back();
  }
}
