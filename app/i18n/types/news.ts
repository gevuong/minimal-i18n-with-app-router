import { type PublicationCard } from './publications';

export interface PressReleases {
  pressReleaseSection: PressReleaseSection;
  pressReleaseCards: PublicationCard[];
}

export interface PressReleaseSection {
  title: string;
}
