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
          text2="Your Personal Health Companion"
          mainText="Empower yourself with the latest in health technology."
          subText="Introducing CoughCheck, the cutting-edge app that utilizes advanced algorithms to analyze your cough and provide insights into potential infection symptoms."
          buttonText="View App Here"
          disclaimer1="*Any device with a web browser and microphone (e.g. iPhone, Android, laptop, iPad)."
          disclaimer2="*The app is still being trained, help us with its development by donating your cough."
          mainText2="How It Works"
          subText2="With just a simple cough into your device's microphone, CoughCheck harnesses the power of Artificial Intelligence to detect unique sound patterns associated with respiratory diseases, such as those indicative of COVID-19, TB, Flu, RSV, COPD, and Asthma."
        />
        <Section3
          lang={lang}
          text="Your Health, Our Priority"
          subtext="At Virufy, your well-being is at the heart of everything we do. We prioritize privacy, ensuring that your data remains secure and confidential. Join the thousands already benefiting from our App and take control of your health today!"
          title1="Instant Analysis"
          sub1="Receive immediate prompt feedback on your cough's characteristics and the likelihood of an infection based on the normality of cough*"
          title2="Stay Informed"
          sub2="Access the latest information and guidelines from health authorities regarding respiratory disease symptoms."
          title3="User-Friendly Interface"
          sub3="Intuitive design for easy navigation and seamless user experience."
          disclaimer="*The results of the analysis done by the system do not replace the diagnosis by a specialized doctor."
          buttonText="Our Technology"
        />
      </div>
    </div>
  );
};

export default HomePage;
