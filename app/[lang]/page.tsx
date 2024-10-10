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
          text={introSection.welcome}
          text2={introSection.digital}
          mainText={introSection[2]}
          subText={introSection[3]}
          buttonText={introSection[4]}
          disclaimer1={introSection[5]}
          disclaimer2={introSection[6]}
          mainText2={introSection[7]}
          subText2={introSection[8]}
        />
        <Section2
          lang={lang}
          text={section2[0]}
          subtext={section2[1]}
          title1={section2[2]}
          sub1={section2[3]}
          title2={section2[4]}
          sub2={section2[5]}
          title3={section2[6]}
          sub3={section2[7]}
          disclaimer={section2[8]}
          buttonText={section2[9]}
        />
      </div>
    </div>
  );
};

export default HomePage;
