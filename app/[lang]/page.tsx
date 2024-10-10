import { type Locale } from '@/i18n-config';
import { BgHeader } from '@/public/images/home';
import Section1 from './components/home/Section1';
import Section2 from './components/home/Section2';
import { usei18n } from '../i18n';

const HomePage = ({ params: { lang } }: { params: { lang: Locale } }) => {
  
  const {
    home: {introSection, section2},
  } = usei18n(lang);

  return (
    <div className="-mb-24 flex flex-col items-center justify-center">
      <div className="relative -top-24 w-full overflow-hidden">
        <Section1
          lang={lang}
          src={BgHeader}
          text={introSection.text}
          text2={introSection.text2}
          subText={introSection.subText}
          buttonText={introSection.buttonText}
          disclaimer1={introSection.disclaimer1}
          disclaimer2={introSection.disclaimer2}
          mainText2={introSection.mainText2}
          subText2={introSection.subText2}
        />
        <Section2
          lang={lang}
          text={section2.text}
          subtext={section2.subtext}
          title1={section2.title1}
          sub1={section2.sub1}
          title2={section2.title2}
          sub2={section2.sub2}
          title3={section2.title3}
          sub3={section2.sub3}
          disclaimer={section2.disclaimer}
          buttonText={section2.buttonText}
        />
      </div>
    </div>
  );
};

export default HomePage;
