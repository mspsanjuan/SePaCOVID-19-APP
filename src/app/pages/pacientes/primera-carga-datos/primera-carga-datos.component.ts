import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { FormularioComponent } from './formulario/formulario.component';

@Component({
  selector: 'ngx-primera-carga-datos',
  templateUrl: './primera-carga-datos.component.html',
  styleUrls: ['./primera-carga-datos.component.scss']
})
export class PrimeraCargaDatosComponent implements OnInit {

  // @ViewChild('contentTemplate', { static: true }) contentTemplate: TemplateRef<any>;
  // @ViewChild('disabledEsc', { read: TemplateRef, static: true }) disabledEscTemplate: TemplateRef<HTMLElement>;

  names: string[] = [];


  constructor(private dialogService: NbDialogService) {}

  open3(){
    this.dialogService.open(FormularioComponent)
    .onClose.subscribe(name => name && this.names.push(name));
  }

  // openWindowForm() {
  //   this.windowService.open(FormularioComponent, { title: `Window`, hasBackdrop: true, closeOnEsc: false });
  // }
  ngOnInit(): void {
    // this.windowService.open(FormularioComponent, { title: `Empecemos`, hasBackdrop: true, closeOnEsc: false, closeOnBackdropClick: false }).fullScreen();
    // this.dialogService.open(FormularioComponent,{ hasBackdrop: true, closeOnEsc: false, closeOnBackdropClick: false })
    //   .onClose.subscribe(name => name );


    this.dialogService.open(FormularioComponent)
    .onClose.subscribe(name => name && this.names.push(name));

  }

}
