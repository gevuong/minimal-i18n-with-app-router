import { type PublicationCard } from './publications';
// import { type Section } from './story';

export interface PressReleases {
    pressReleaseSection: PressReleaseSection;
    pressReleaseCards: PublicationCard[];
}

export interface PressReleaseSection {
    title: string;
}
