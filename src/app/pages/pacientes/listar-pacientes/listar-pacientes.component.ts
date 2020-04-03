import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-listar-pacientes',
  templateUrl: './listar-pacientes.component.html',
  styleUrls: ['./listar-pacientes.component.scss']
})
export class ListarPacientesComponent implements OnInit {

  users: { name: string, title: string }[] = [
    { name: 'Carla Espinosa', title: 'Nurse' },
    { name: 'Bob Kelso', title: 'Doctor of Medicine' },
    { name: 'Janitor', title: 'Janitor' },
    { name: 'Perry Cox', title: 'Doctor of Medicine' },
    { name: 'Ben Sullivan', title: 'Carpenter and photographer' }];


  usuarioSelect(nombre: any){
    // alert(nombre);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
