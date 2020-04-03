import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'IoT Dashboard',
    icon: 'home-outline',
    link: '/pages/iot-dashboard',
  },
  {
    title: 'Profesionales',
    icon: 'briefcase-outline',
    children: [
      {
        title: 'Registrar Nuevo Profesional',
        link: '/pages/profesionales/registrar',
      },
      {
        title: 'Profesionales Registrados',
        link: '/pages/profesionales/listar',
      }],
  },
  {
    title: 'Pacientes',
    icon: 'people-outline',
    children: [
      {
        title: 'Registrar Nuevo Paciente',
        link: '/pages/pacientes/registrar',
      },
      {
        title: 'Pacientes Registrados',
        link: '/pages/pacientes/listar',
      }],
  },
  {
    title: 'Primeros Datos del Paciente',
    icon: 'checkmark-circle-outline',
    link: '/pages/pacientes/primera-carga-datos',
  },
  {
    title: 'Primer encuesta paciente',
    icon: 'clipboard-outline',
    link: '/pages/pacientes/primer-encuesta',
  },
  {
    title: 'LOGIN',
    icon: 'home-outline',
    link: '/auth/login',
  }];
