import { type Locale } from '@/i18n-config';
import { BgHeader } from '@/public/images/home';
import Section2 from './components/home/Section2';
import Section3 from './components/home/Section3';

const HomePage = ({ params: { lang } }: { params: { lang: Locale } }) => {
  return (
    <div className="-mb-24 flex flex-col items-center justify-center">
      <div className="relative -top-24 w-full overflow-hidden">
        <Section2
          lang={lang}
          src={BgHeader}
          text="Welcome to Virufy"
          text2="Your Digital Health Companion"
          subText="Introducing Virufy, the cutting-edge app that utilizes advanced audio and generative AI algorithms to analyze your breathing patterns and provide insights into potential infection symptoms."
          buttonText="Demo App"
          disclaimer1="*Any device with a web browser and microphone (e.g. iPhone, Android, laptop, iPad)."
          disclaimer2="*The app is still under development, support us by contributing your data into our data collection app."
          mainText2="How It Works"
          subText2="With just a simple intentional cough into your device's microphone, Virufy harnesses the power of artificial intelligence to detect unique sound patterns associated with respiratory diseases, such as COVID-19, TB, flu, RSV, COPD, and asthma."
        />
        <Section3
          lang={lang}
          text="Your Health, Our Priority"
          subtext="At Virufy, your well-being is at the heart of everything we do. We prioritize privacy, ensuring that your data remains secure and confidential."
          title1="Instant Analysis"
          sub1="Receive immediate prompt feedback on your cough's characteristics and abnormality profile based on the sound pattern of your cough*"
          title2="At-home Anonymity"
          sub2="Feel secure knowing that your results are only for your eyes."
          title3="User-Friendly Interface"
          sub3="Intuitive design for easy navigation and seamless user experience."
          disclaimer="*The results of the analysis done by the system will not replace the diagnosis by a specialized doctor."
          buttonText="Our Technology"
        />
      </div>
    </div>
  );
};

export default HomePage;
