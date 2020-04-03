import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'ngx-primera-carga-datos',
  templateUrl: './primera-carga-datos.component.html',
  styleUrls: ['./primera-carga-datos.component.scss']
})
export class PrimeraCargaDatosComponent implements OnInit {

  loadingLargeGroup = false;
  btnGuardar = true;
  confirmarcionTerminada = true;
  // repetirContrasenia = "";

  cim = 
   { investmentDate: ''}
  

  toggleLoadingLargeGroupAnimation() {
    this.loadingLargeGroup = true;
    this.btnGuardar = true;
    setTimeout(() =>{
      this.confirmarcionTerminada = false
      this.loadingLargeGroup = false
      this.btnGuardar = false
      }, 3000);
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
 
  }

    
}
