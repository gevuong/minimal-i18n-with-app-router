export interface Footer {
  sectionPersonalInformation: SectionPersonalInformation[];
  sectionPrivacyPolicy: SectionPrivacyPolicy[];
}

export interface SectionPersonalInformation {
  title: string;
  content: string;
  link?: string;
}

export interface SectionPrivacyPolicy {
  title: string;
  content: string;
  link: string;
}