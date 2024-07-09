import { type FAQ } from './faq';
import { type Home } from './home';
import { type NavbarItem } from './navbar';
import { type OneYoungWorld } from './oneYoungWorld';
import { type OurStory } from './ourStory';
import { type TeamLeadsType } from './teamLeads';

export interface I18nData {
  faq: FAQ;
  home: Home;
  navbar: NavbarItem[];
  oneYoungWorld: OneYoungWorld;
  ourStory: OurStory;
  teamLeads: TeamLeadsType;
}
