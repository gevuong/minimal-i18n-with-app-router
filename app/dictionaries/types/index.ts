import { Home } from './home';
import { NavbarItem } from './navbar';
import { OneYoungWorld } from './oneYoungWorld';
import { OurStory } from './ourStory';
import { TeamLeadsType } from './teamLeads';

export type I18nData = {
  home: Home;
  navbar: NavbarItem[];
  oneYoungWorld: OneYoungWorld;
  ourStory: OurStory;
  teamLeads: TeamLeadsType;
};
