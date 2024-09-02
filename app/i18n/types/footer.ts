export interface Footer {
  sectionPersonalInformation: SectionPersonalInformation[];
  sectionCookiePolicy: SectionCookiePolicy[];
  sectionPrivacyPolicy: SectionPrivacyPolicy[];
}

export interface SectionPersonalInformation {
  title: string;
  content: string;
}

export interface SectionCookiePolicy {
  title: string;
  content: string;
}

export interface SectionPrivacyPolicy {
  title: string;
  content: string;
}