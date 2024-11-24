import { type HomeType } from '../types/home';

const home: HomeType = {
  introSection: {
    text: 'Welcome to Virufy',
    text2: 'Your Digital Health Companion',
    subText: [
      {
        type: 'text',
        text: 'Introducing ',
      },
      {
        type: 'span',
        text: 'Virufy',
      },
      {
        type: 'text',
        text: ', the cutting-edge app that utilizes advanced audio and generative AI algorithms to analyze your breathing patterns and provide insights into potential infection symptoms.',
      },
    ],
    buttonText: 'Demo App',
    disclaimers: [
      '*Any device with a web browser and microphone (e.g. iPhone, Android, laptop, iPad).', '*The app is still under development, support us by contributing your cough sounds into our data collection app.'
    ],
    mainText2: 'How It Works',
    subText2: [
      {
        type: 'text',
        text: "With just a simple intentional cough into your device's microphone, ",
      },
      {
        type: 'span',
        text: 'Virufy',
      },
      {
        type: 'text',
        text: ' harnesses the power of artificial intelligence to detect unique sound patterns associated with respiratory diseases, such as COVID-19, TB, flu, RSV, COPD, and asthma.',
      },
    ],
  },
  section2: {
    text: 'Your Health, Our Priority',
    subtext:
      'At Virufy, your well-being is at the heart of everything we do. We prioritize privacy, ensuring that your data remains secure and confidential.',
    title: ['Instant Analysis', 'At-home Anonymity', 'User-Friendly Interface'],
    sub: [
      "Rapid feedback on your cough's characteristics and abnormality profile based on the sound pattern of your cough",
      'Feel secure knowing that your results are only for your eyes.',
      'Intuitive design for easy navigation and seamless user experience.',
    ],
    disclaimer:
      '*Virufy is not a substitute for professional medical advice, diagnosis, or treatment. Users are advised to consult a licensed healthcare provider for any medical concerns or decisions.',
    buttonText: 'Our Technology',
  },
};

export default home;
