import {
  FingerSnapIcon,
  GlobeIcon,
  HeartRhythmIcon,
  PhoneInHandIcon,
  RecycleIcon,
  TeamIcon,
} from '@/public/images/story';
import { type Story } from '../types/story';

const story: Story = {
  aboutUsSection: {
    title: 'Sobre Nosotros',
    texts: [
      'Nuestro enfoque innovador tiene como objetivo ofrecer una detección previa de COVID superior para pacientes, médicos y gobiernos, especialmente en países de bajos ingresos.',
      'Aspiramos a ser la organización sin fines de lucro líder en la identificación de enfermedades habilitada por la tecnología, transformando la atención médica global e inspirando a otros a apoyar e invertir en esta misión con nosotros.',
    ],
  },
  storySection: {
    title: 'Historia',
    texts: [
      [
        {
          type: 'text',
          text: 'Cuando llegó la pandemia, ',
        },
        {
          type: 'link',
          url: '/amils-story',
          text: 'el fundador de Virufy, Amil Khanzada',
        },
        {
          type: 'text',
          text: ', sabía que los teléfonos inteligentes eran omnipresentes y que el COVID afectaba la nariz, la garganta y los pulmones.',
        },
      ],
      [
        {
          type: 'text',
          text: 'Planteó la hipótesis de que los sonidos de la respiración y la tos podrían analizarse con aprendizaje automático para detectar patrones de COVID.',
        },
      ],
      [
        {
          type: 'text',
          text: 'Con el deseo de generar un impacto positivo, orquestó un estudio clínico con 362 pacientes en un prestigioso hospital universitario. El equipo original de Virufy, que comenzó con estudiantes graduados en IA de Stanford, se amplió a voluntarios de universidades de todo el mundo.',
        },
      ],
    ],
  },
  valuesSection: {
    title: 'Valores',
    cards: [
      {
        title: 'Transformación',
        image: RecycleIcon,
        imageText: '',
        text: 'Nuestro objetivo es transformar los costosos sistemas de salud mediante el uso de la tecnología para impulsar los cambios necesarios.',
      },
      {
        title: 'Colaboración',
        image: GlobeIcon,
        imageText: '',
        text: 'Nos comprometemos a hacer que la detección rápida de enfermedades esté disponible para todas las personas en el mundo, independientemente de sus antecedentes.',
      },
      {
        title: 'Salud',
        image: HeartRhythmIcon,
        imageText: '',
        text: 'Nos comprometemos a anteponer siempre la salud y el bienestar de todas las personas en todo el mundo.',
      },
      {
        title: 'Asequibilidad',
        image: TeamIcon,
        imageText: '',
        text: 'Nuestro objetivo es utilizar la tecnología para que la prevención y detección de enfermedades sea gratuita para todas las personas en todo el mundo.',
      },
      {
        title: 'Eficiencia',
        image: FingerSnapIcon,
        imageText: '',
        text: 'Nos comprometemos a crear tecnología intuitiva que brinde una detección rápida, detenga la propagación del virus y salve vidas.',
      },
      {
        title: 'Innovación',
        image: PhoneInHandIcon,
        imageText: '',
        text: 'Nuestro objetivo es garantizar la detección rápida de enfermedades con solo un toque en un dispositivo móvil.',
      },
    ],
  },
  privacySection: {
    title: 'Nuestro Compromiso con la Privacidad',
    texts: [
      'Virufy se toma en serio la privacidad y protección de su información personal. Nuestro equipo legal ha preparado una Política de Privacidad y una Política de Cookies detalladas para proteger la información personal que comparte con nosotros a través del uso de nuestro sitio web.',
    ],
  },
};

export default story;
