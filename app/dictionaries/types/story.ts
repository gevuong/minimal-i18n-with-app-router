import { type StaticImageData } from 'next/image';

export interface Story {
  aboutUsSection: AboutUsSection;
  storySection: StorySection;
  valuesSection: ValuesSection;
  privacySection: PrivacySection;
}

export interface ValuesCard {
  title: string;
  image: StaticImageData;
  imageText: string;
  text: string;
}

interface StorySection {
  title: string;
  texts: StorySectionText[][];
}

interface StorySectionText {
  type: string;
  text: string;
  url?: string;
}

interface ValuesSection {
  title: string;
  cards: ValuesCard[];
}

export interface Section {
  title: string;
  texts: string[];
}

type AboutUsSection = Section;
type PrivacySection = Section;
