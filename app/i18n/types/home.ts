export interface HomeType {
  introSection: WelcomeSection;
  section2: { [key: string]: string };
}

interface WelcomeSection {
  text: string;
  text2: string;
  subText: subText[];
  buttonText: string;
  disclaimer1: string;
  disclaimer2: string;
  mainText2: string;
  subText2: subText2[];
}

interface subText {
  type: string;
  text: string;
}

interface subText2 {
  type: string;
  text: string;
}
