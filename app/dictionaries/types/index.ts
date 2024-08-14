import { type Ai } from './ai';
import { type AmilsStory } from './amilsStory';
import { type FAQ } from './faq';
import { type Footer } from './footer';
import { type JobDetails } from './jobDetails';
import { type JobListing } from './jobListing';
import { type NavbarType } from './navbar';
import { type OneYoungWorld } from './oneYoungWorld';
import { type OurPeople } from './ourPeople';
import { type OurStory } from './ourStory';
import { type Publications } from './publications';
import { type ShareYourCough } from './shareYourCough';
import { type Supporters } from './supporters';
import { type TeamLeadsType } from './teamLeads';

export interface I18nData {
  ai: Ai;
  amilsStory: AmilsStory;
  faq: FAQ;
  footer: Footer;
  jobDetails: JobDetails;
  jobListing: JobListing;
  navbar: NavbarType;
  oneYoungWorld: OneYoungWorld;
  ourPeople: OurPeople;
  ourStory: OurStory;
  publications: Publications;
  shareYourCough: ShareYourCough;
  supporters: Supporters;
  teamLeads: TeamLeadsType;
}
