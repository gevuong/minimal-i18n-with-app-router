import { FAQ } from './faq';
import { Home } from './home';
import { NavbarItem } from './navbar';
import { OneYoungWorld } from './oneYoungWorld';
import { OurStory } from './ourStory';
import { TeamLeadsType } from './teamLeads';

export interface I18nData {
  faq: FAQ;
  home: Home;
  navbar: NavbarItem[];
  oneYoungWorld: OneYoungWorld;
  ourStory: OurStory;
  teamLeads: TeamLeadsType;
}
