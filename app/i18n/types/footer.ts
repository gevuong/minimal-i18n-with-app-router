import { type QA } from './faq';

export interface Footer {
  cookiePolicy: CookiePolicy;
  personalInfo: PersonalInfo;
  privacyPolicy: PrivacyPolicy;
}

interface CookiePolicy {
  title: string;
  body: QA[];
}

interface PersonalInfo {
  title: string;
  body: QA[];
}
interface PrivacyPolicy {
  title: string;
  body: QA[];
}
