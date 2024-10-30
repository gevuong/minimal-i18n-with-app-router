import { type StaticImageData } from 'next/image';

export type Supporters = {
  title: string;
  supportersList: SupporterImg[];
};

type SupporterImg = {
  img: StaticImageData;
  alt: string;
  link: string;
};
