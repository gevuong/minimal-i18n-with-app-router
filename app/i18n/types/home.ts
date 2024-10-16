export interface HomeType {
  introSection: WelcomeSection;
  section2: Section2;
}

interface WelcomeSection {
  text: string;
  text2: string;
  subText: subText[];
  buttonText: string;
  disclaimers: Array<string>;
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

interface Section2 {
  text: string;
  subtext: string;
  title: Array<string>;
  sub: Array<string>;
  disclaimer: string;
  buttonText: string;
}
