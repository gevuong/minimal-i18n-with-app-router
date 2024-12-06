import {
  BgHeader,
  GlobeIcon,
  MonitorIcon,
  PhoneInHandIcon,
  PrivacyIcon,
  QuestionMarkIcon,
  RecycleIcon,
  SearchIcon,
} from '@/public/images/faq';

import { type FAQ } from '../types/faq';

const faq: FAQ = {
  headerSection: {
    img: BgHeader,
    altText: '',
    title: [
      {
        type: 'text',
        text: 'كيف يمكننا ',
      },
      {
        type: 'span',
        text: 'مساعدتك ',
      },
      {
        type: 'text',
        text: '؟',
      },
    ],
    input: {
      placeholder: 'ابدأ الكتابة للبحث...',
      img: SearchIcon,
      altText: 'أيقونة البحث',
    },
    texts: [
      {
        type: 'text',
        text: 'أو ',
      },
      {
        type: 'span',
        text: 'اختر ',
      },
      {
        type: 'text',
        text: 'خياراً أدناه لمساعدتك في العثور على ما تبحث عنه.',
      },
    ],
  },
  topicsSection: {
    title: 'مواضيع الأسئلة الشائعة',
    cards: [
      {
        title: 'تطبيق Virufy',
        img: PhoneInHandIcon,
        altText: '',
      },
      {
        title: 'حول Virufy',
        img: GlobeIcon,
        altText: '',
      },
      {
        title: 'حول الذكاء الاصطناعي',
        img: RecycleIcon,
        altText: '',
      },
      {
        title: 'الشؤون المالية',
        img: MonitorIcon,
        altText: '',
      },
      {
        title: 'الخصوصية',
        img: PrivacyIcon,
        altText: '',
      },
      {
        title: 'أخرى',
        img: QuestionMarkIcon,
        altText: '',
      },
    ],
  },
  questionsSection: {
    topicTitle: 'الأسئلة الشائعة',
    noResultsTitle: 'لم يتم العثور على نتائج',
    questionsByTopic: {
      'تطبيق Virufy': [
        {
          question: 'متى وكيف ستعرض التطبيق نتائج توقعات COVID-19؟',
          answer: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: 'تطبيقنا حالياً مخصص لجمع البيانات فقط. لا يمكننا إصدار تطبيق لتوقع COVID-19 بدون موافقات إدارات الصحة العامة في كل بلد ودراسات سريرية للتحقق من صحة تقنية الذكاء الاصطناعي في الظروف المحلية. قد يستغرق هذا بضعة أسابيع أو أشهر بناءً على سرعة الشركاء الحكوميين. Virufy يرحب بالشراكات مع المسؤولين الصحيين والمستشفيات لتوفير التقنية للاستخدام المجاني وتحسين استخدام اختبارات PCR المكلفة عند الضرورة.',
                },
              ],
            },
          ],
        },
        {
          question:
            'أين يمكنني تحميل التطبيق؟ هل سيكون متاحاً لنظامي iOS و Android؟',
          answer: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: 'سيكون التطبيق متاحاً للاستخدام عبر موقعنا المتوافق مع الأجهزة المحمولة حيث نحتاج إلى موافقة حكومية أو طبية في بعض البلدان لنشر التطبيق في متاجر التطبيقات الرسمية. يمكن الاتصال بالتطبيق من الهاتف الذكي، وبالتالي فهو متوافق مع أي نظام تشغيل بما في ذلك iOS و Android.',
                },
              ],
            },
          ],
        },
        {
          question: 'هل سيكون التطبيق متاحاً مجاناً وعلى مستوى العالم؟',
          answer: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: 'باعتبارنا منظمة غير ربحية (501(c)(3))، نعتزم جعل التطبيق مجانياً لفائدة البلدان ذات الدخل المنخفض. ومع ذلك، قد نحتاج إلى فرض رسوم رمزية لدعم عملياتنا في حالة عدم تمكننا من جمع التبرعات الكافية.',
                },
              ],
            },
          ],
        },
        {
          question: 'هل تخططون لتحويل هذا التطبيق إلى مشروع ربحي؟',
          answer: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: 'Virufy هي منظمة غير ربحية. قد نتعاون مع شركات إذا لزم الأمر لتسريع نشر التطبيق لصالح الناس.',
                },
              ],
            },
          ],
        },
      ],
      'حول Virufy': [
        {
          question: 'كيف تم إنشاء هذه المبادرة؟',
          answer: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: 'عندما ضربت الجائحة، كان مؤسس Virufy، أميل، يعلم أن الهواتف الذكية منتشرة وأن COVID يؤثر على الأنف والحلق والرئتين. افترض أن أصوات التنفس والسعال يمكن تحليلها باستخدام التعلم الآلي للكشف عن أنماط COVID. لرغبته في تحقيق تأثير إيجابي، نظم دراسة سريرية مع 362 مريضاً في مستشفى جامعي مرموق...',
                },
              ],
            },
          ],
        },
      ],
    },
  },
};
export default faq;
