import {
  AmbassadorIcon,
  BgBody,
  BgHeader,
  DiverseIcon,
  GlobeIcon,
  GonzaloTestimonial,
  MarcosTestimonial,
  SebastianTestimonial,
  YouthIcon,
} from '@/public/images/oneYoungWorld';
import { type OneYoungWorld } from '../types/oneYoungWorld';

const oneYoungWorld: OneYoungWorld = {
  header: {
    text: 'Empresas y organizaciones nos respaldan desde su amplio conocimiento y nos brindan seguridad y certeza en lo que hacemos.',
    image: BgHeader,
    altText: '',
  },
  navbarTexts: {
    oyw: 'One Young World',
    teamLeads: 'Team Leads',
  },
  oyw: {
    bgImage: BgBody,
    altText: '',
    virufyAndOyw: {
      title: 'One Young World',
      subTitle: 'Virufy & One Young World',
      texts: [
        'Our world needs great leadership. The new generation is one of the most informed, educated and well connected generations in world history. One Young World identifies, promotes and connects the most impactful young leaders across the globe to create a better world: a world with more responsible and effective leadership.',
        'Virufy has been featured on various OYW platforms, including in the Americas and Japan, ambassadors in action , and ambassadors on the frontline for COVID-19 response . We are also collaborating with OYW coordinating ambassadors across various regions for outreach efforts.',
      ],
      videoUrl: 'https://www.youtube.com/embed/hvJgwPNYnZo?si=k_ujoF1pBeYFg65C',
      videoTitle: "Virufy's Vision and Call to Action",
    },
    whyOyw: {
      title: 'Why One Young World?',
      cards: [
        {
          title: 'Ambassador driven',
          text: 'Our organization structure matches One Young World with youth ambassadors leading operations in each country, with regional coordinating ambassadors.',
          image: AmbassadorIcon,
          altText: '',
        },
        {
          title: 'Youth led',
          text: 'Our growing team is led by youth from over a dozen countries and are advised by global leaders.',
          image: YouthIcon,
          altText: '',
        },
        {
          title: 'Focused on global impact',
          text: 'Collect data and provide equitable solutions for people in developing countries across the world.',
          image: GlobeIcon,
          altText: '',
        },
        {
          title: 'Diverse representation',
          text: 'Our team has representation from over 25 universities and 15 countries and includes more than 10 One Young World ambassadors.',
          image: DiverseIcon,
          altText: '',
        },
      ],
    },
    volunteerStories: {
      title: 'Volunteer Stories',
      text: 'Our team is led by students dedicated to social good from reputable institutions like Stanford, Princeton, and One Young World. We have strong trust in members of the One Young World community and warmly welcome any ambassadors interested to pitch in.',
      testimonials: [
        {
          name: 'Sebastian Pedraza',
          origin: 'Colombia',
          image: SebastianTestimonial,
          altText: 'image of Sebastian Pedraza',
          testimonial: `“Virufy unites the power of youth and technology to transform the world. We hope that this solution will reach the whole world and that it will become a support for doctors, especially in low-income countries.”`,
        },
        {
          name: 'Gonzalo Roiffe',
          origin: 'Argentina',
          image: GonzaloTestimonial,
          altText: 'image of Gonzalo Roiffe',
          testimonial: `“Virufy will impact globally, no matter the users' background or social status. This is what changing the status quo feels like.”`,
        },
        {
          name: 'Marcos Deza',
          origin: 'Argentina',
          image: MarcosTestimonial,
          altText: 'image of Marcos Deza',
          testimonial: `“I think that Virufy will develop a very accurate solution and this will be useful for the entire world in every industry. So I encourage everyone to take some minutes and contribute with us.”`,
        },
      ],
      buttonText: 'Join our Team',
    },
  },
};

export default oneYoungWorld;
