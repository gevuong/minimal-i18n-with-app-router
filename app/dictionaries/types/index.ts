import { Home } from './home';
import { NavbarItem } from './navbar';
import { OurStory } from './ourStory';

export type I18nData = {
  ourStory: OurStory;
  navbar: NavbarItem[];
  home: Home;
};
