import { type FAQ } from './faq';
import { type Home } from './home';
import { type NavbarType } from './navbar';
import { type OneYoungWorld } from './oneYoungWorld';
import { type OurStory } from './ourStory';
import { type Publications } from './publications';
import { type ShareYourCough } from './shareYourCough';
import { type TeamLeadsType } from './teamLeads';

export interface I18nData {
  faq: FAQ;
  home: Home;
  navbar: NavbarType;
  oneYoungWorld: OneYoungWorld;
  ourStory: OurStory;
  publications: Publications;
  shareYourCough: ShareYourCough;
  teamLeads: TeamLeadsType;
}
