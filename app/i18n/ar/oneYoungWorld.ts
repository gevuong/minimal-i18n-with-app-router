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
    text: 'تدعمنا الشركات والمنظمات بمعرفتها الواسعة وتوفر لنا الأمان واليقين في ما نقوم به.',
    image: BgHeader,
    altText: '',
  },
  navbarTexts: {
    oyw: 'وان يونغ وورلد',
    teamLeads: 'قادة الفريق',
  },
  oyw: {
    bgImage: BgBody,
    altText: '',
    virufyAndOyw: {
      title: 'وان يونغ وورلد',
      subTitle: 'فيروفي & وان يونغ وورلد',
      texts: [
        'عالمنا يحتاج إلى قيادة عظيمة. الجيل الجديد هو واحد من أكثر الأجيال علمًا وتعليمًا وترابطًا في تاريخ العالم. تقوم وان يونغ وورلد بتحديد وتعزيز وربط أكثر القادة الشباب تأثيرًا عبر العالم لإنشاء عالم أفضل: عالم مع قيادة أكثر مسؤولية وفعالية.',
        'تم تسليط الضوء على فيروفاي في العديد من منصات وان يونغ وورلد، بما في ذلك في الأمريكتين واليابان، السفراء في العمل، مؤتمرات المندوبين، والسفراء في الخطوط الأمامية لاستجابة كوفيد-19. نحن أيضًا نتعاون مع وان يونغ وورلد لتنسيق السفراء عبر مختلف المناطق من أجل جهود التوعية.',
      ],
      videoUrl: 'https://www.youtube.com/embed/hvJgwPNYnZo?si=k_ujoF1pBeYFg65C',
      videoTitle: 'رؤية فيروفاي والدعوة للعمل',
    },
    whyOyw: {
      title: 'لماذا وان يونغ وورلد؟',
      cards: [
        {
          title: 'مدفوعة بالسفراء',
          text: 'هيكل منظمتنا يتوافق مع وان يونغ وورلد حيث يقوم سفراء الشباب بتنسيق العمليات في كل منطقة.',
          image: AmbassadorIcon,
          altText: '',
        },
        {
          title: 'يقودها الشباب',
          text: 'فريقنا المتنامي يقوده محترفون شباب من أكثر من عشرة دول مع إشراف قريب من قادة الصناعة العالميين.',
          image: YouthIcon,
          altText: '',
        },
        {
          title: 'مركزة على التأثير العالمي',
          text: 'هدفنا من اليوم الأول كان تقديم حلول عادلة لجميع الناس في جميع البلدان حول العالم.',
          image: GlobeIcon,
          altText: '',
        },
        {
          title: 'تمثيل متنوع',
          text: 'فريقنا يمثل أكثر من 50 جامعة و 25 دولة وقد تلقى دعمًا من العديد من سفراء وان يونغ وورلد.',
          image: DiverseIcon,
          altText: '',
        },
      ],
    },
    volunteerStories: {
      title: 'شهادات المتطوعين',
      text: 'تطوع العديد من السفراء في فيروفاي وقد قدموا شهادات. لدينا ثقة قوية في أعضاء مجتمع وان يونغ وورلد ونرحب بحرارة بأي سفراء مهتمين بالمساهمة.',
      testimonials: [
        {
          name: 'سيباستيان بيدرازا',
          origin: 'كولومبيا',
          image: SebastianTestimonial,
          altText: 'صورة سيباستيان بيدرازا',
          testimonial: `“فيروفي تجمع بين قوة الشباب والتكنولوجيا لتحويل العالم. نأمل أن يصل هذا الحل إلى جميع أنحاء العالم وأن يصبح دعمًا للأطباء، خاصة في البلدان ذات الدخل المنخفض.”`,
        },
        {
          name: 'جونزالو رويفي',
          origin: 'الأرجنتين',
          image: GonzaloTestimonial,
          altText: 'صورة جونزالو رويفي',
          testimonial: `“فيروفي ستؤثر عالميًا، بغض النظر عن خلفية المستخدمين أو وضعهم الاجتماعي. هذه هي طريقة تغيير الوضع الراهن.”`,
        },
        {
          name: 'ماركوس ديزا',
          origin: 'الأرجنتين',
          image: MarcosTestimonial,
          altText: 'صورة ماركوس ديزا',
          testimonial: `“أعتقد أن فيروفاي ستطور حلاً دقيقًا جدًا وسيكون مفيدًا للعالم بأسره في كل صناعة. لذلك أشجع الجميع على تخصيص بعض الوقت والمساهمة معنا.”`,
        },
      ],
      buttonText: 'انضم إلى فريقنا',
    },
  },
};

export default oneYoungWorld;
