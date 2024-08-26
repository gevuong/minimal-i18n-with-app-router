import { type JobListing } from '../types/jobListing';

const jobListing: JobListing = {
  titleImage:
    'Virufy está gestionado íntegramente por voluntarios y empresas asociadas pro bono.',
  title: 'Nuestra misión',
  text: 'Virufy, un consorcio de investigación sin fines de lucro formado por investigadores, innovadores y científicos, ha unido a voluntarios de más de 25 países para desarrollar una aplicación para teléfonos inteligentes para la detección de COVID-19. Desarrollada inicialmente como un proyecto del Laboratorio de Innovación de Respuesta al COVID-19 de la Universidad de Stanford, la solución de diagnóstico de COVID-19 con inteligencia artificial (IA) de Virufy lucha contra la pandemia mediante pruebas generalizadas, accesibles y gratuitas.',
  modal: {
    text: '¿Entiende que todos estos son puestos voluntarios no remunerados?',
    yes: 'Si',
    no: 'No',
  },
  jobList: [
    {
      category: 'Ingeniería',
      positions: [
        {
          title: 'Ingeniero de Software',
          id: 1,
        },
        {
          title: 'Ingeniero de Aprendizaje Automático',
          id: 2,
        },
        {
          title: 'Ingeniero de Aprendizaje Automático (Modelado)',
          id: 3,
        },
        {
          title: 'Ingeniero de Procesamiento de Señales de Audio',
          id: 4,
        },
        {
          title: 'Ingeniero DevOps',
          id: 5,
        },
        {
          title: 'Ingeniero de Seguridad Informática',
          id: 6,
        },
      ],
    },
    {
      category: 'Datos',
      positions: [
        {
          title: 'Pasante de Privacidad de Datos',
          id: 7,
        },
        {
          title: 'Científico de Datos Asociado',
          id: 8,
        },
      ],
    },
    {
      category: 'Gestión',
      positions: [
        {
          title: 'Gerente de Negocios',
          id: 9,
        },
        {
          title: 'Gerente de Proyectos',
          id: 10,
        },
        {
          title: 'Gerente de Producto',
          id: 11,
        },
      ],
    },
    {
      category: 'Recursos Humanos',
      positions: [
        {
          title: 'Socio de Negocios de RRHH',
          id: 12,
        },
      ],
    },
    {
      category: 'Legal',
      positions: [
        {
          title: 'Abogado Corporativo (Orientado a TI)',
          id: 13,
        },
        {
          title: 'Paralegal',
          id: 14,
        },
      ],
    },
    {
      category: 'Tecnología de la Información (TI)',
      positions: [
        {
          title: 'Analista de Negocios',
          id: 15,
        },
        {
          title: 'Programador de Python',
          id: 16,
        },
        {
          title: 'Redactor Técnico',
          id: 17,
        },
        {
          title: 'Ingeniero de Garantía de Calidad',
          id: 18,
        },
        {
          title: 'Desarrollador de AWS',
          id: 19,
        },
        {
          title: 'Arquitecto de AWS',
          id: 20,
        },
        {
          title: 'Ingeniero de AWS',
          id: 21,
        },
        {
          title: 'Ingeniero de Nube',
          id: 22,
        },
        {
          title: 'Administrador de Unix',
          id: 23,
        },
      ],
    },
  ],
};

export default jobListing;
