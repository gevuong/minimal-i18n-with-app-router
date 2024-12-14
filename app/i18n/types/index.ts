import { type Ai } from './ai';
import { type AmilsStory } from './amilsStory';
import { type FAQ } from './faq';
import { type Footer } from './footer';
import { type HomeType } from './home';
import { type JobDetails } from './jobDetails';
import { type JobListing } from './jobListing';
import { type NavbarType } from './navbar';
import { type OneYoungWorld } from './oneYoungWorld';
import { type People } from './people';
import { type PressReleases } from './news';
import { type Publications } from './publications';
import { type ShareYourCough } from './shareYourCough';
import { type Story } from './story';
import { type Supporters } from './supporters';
import { type TeamLeadsType } from './teamLeads';

export interface I18nData {
  ai: Ai;
  amilsStory: AmilsStory;
  faq: FAQ;
  footer: Footer;
  home: HomeType;
  jobDetails: JobDetails;
  jobListing: JobListing;
  navbar: NavbarType;
  oneYoungWorld: OneYoungWorld;
  people: People;
  publications: Publications;
  pressReleases: PressReleases;
  shareYourCough: ShareYourCough;
  story: Story;
  supporters: Supporters;
  teamLeads: TeamLeadsType;
}
