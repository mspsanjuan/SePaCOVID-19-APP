import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  linearMode = true;

  

  toggleLinearMode() {
    this.linearMode = !this.linearMode;
  }
  
  constructor(protected ref: NbDialogRef<FormularioComponent>){}
  ngOnInit(){}

  cancel() {
    this.ref.close();
  }

  submit(name) {
    this.ref.close(name);
  }
  
  // firstForm: FormGroup;
  // secondForm: FormGroup;
  // thirdForm: FormGroup;

  // constructor(private fb: FormBuilder) { }

  // ngOnInit(): void {
  //   this.firstForm = this.fb.group({
  //     firstCtrl: ['', Validators.required],
  //   });

  //   this.secondForm = this.fb.group({
  //     secondCtrl: ['', Validators.required],
  //   });

  //   this.thirdForm = this.fb.group({
  //     thirdCtrl: ['', Validators.required],
  //   });
  // }

  // onFirstSubmit() {
  //   this.firstForm.markAsDirty();
  // }

  // onSecondSubmit() {
  //   this.secondForm.markAsDirty();
  // }

  // onThirdSubmit() {
  //   this.thirdForm.markAsDirty();
  // }

}
