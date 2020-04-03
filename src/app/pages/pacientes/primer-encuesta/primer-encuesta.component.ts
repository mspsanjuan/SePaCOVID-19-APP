import { Component, OnInit } from '@angular/core';
import {  NbComponentStatus,
  NbGlobalLogicalPosition,
  NbGlobalPhysicalPosition,
  NbGlobalPosition,
  NbToastrService,
  NbToastrConfig,
  NbIconConfig,
} from '@nebular/theme';

@Component({
  selector: 'ngx-primer-encuesta',
  templateUrl: './primer-encuesta.component.html',
  styleUrls: ['./primer-encuesta.component.scss']
})
export class PrimerEncuestaComponent implements OnInit {
  // 
  constructor(private toastrService: NbToastrService) { }

  // checked = false;

  // toggle(checked: boolean) {
  //   this.checked = checked;
  // }
  btnGuardar = false;
  loadingLargeGroup = false;
  iconConfig: NbIconConfig = { icon: 'checkmark-circle-2-outline', pack: 'eva' };
  hasIcon = true;
  position: NbGlobalPosition = NbGlobalPhysicalPosition.TOP_RIGHT;
  status: NbComponentStatus = 'success';
  config: NbToastrConfig;

  toggleLoadingLargeGroupAnimation() {
    this.loadingLargeGroup = false;
    this.btnGuardar = true;
    this.showToast('top-right');
    setTimeout(() =>{     
      this.btnGuardar = false
      }, 3000);
  }

  showToast(position) {
    const config = {
      status: this.status,
      hasIcon: this.hasIcon,
      position: this.position,
      icon: 'checkmark-circle-2-outline',
      pack: 'eva'
    };
    this.toastrService.show(
      '',
      'Los datos se guardaron correctamente',
      config);
  }

  arregloListadoAntecedentes = [
    {
      "value": "asma",
      "label": "Asma",
    },
    {
      "value": "enfRespiratoria",
      "label": "Enfermedad Respiratoria",
    },
    {
      "value": "hiperArterial",
      "label": "Hipertensión Arterial",
    },
    {
      "value": "enfCardiovascular",
      "label": "Enfermedad Cardiovascular",
    },
    {
      "value": "enfRenal",
      "label": "Enfermedad Renal",
    },
    {
      "value": "enfEpatica",
      "label": "Enfermedad Hepática",
    },
    {
      "value": "cancer",
      "label": "Neoplasia Maligna (Cáncer)",
    }];

  arregloListadoActualmente = [
    {
      "value": "asma",
      "label": "Asma",
    },
    {
      "value": "epoc",
      "label": "EPOC (Enfermedad Pulmonar Obstructiva Crónica)",
    },
    {
      "value": "hiperArterial",
      "label": "Hipertensión Arterial",
    },
    {
      "value": "diabmellitus",
      "label": "Diabetes Mellitus",
    },
    {
      "value": "enfRenalCronica",
      "label": "Enfermedad Renal Crónica",
    },
    {
      "value": "enfEpaticaCronica",
      "label": "Enfermedad Hepática Crónica",
    },
    {
      "value": "embarazada",
      "label": "Embarazada",
    }];



  ngOnInit(): void {
  }

}
