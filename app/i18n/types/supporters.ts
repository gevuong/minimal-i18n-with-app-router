import { type StaticImageData } from 'next/image';

export type Supporters = {
  supportersList: SupporterImg[];
};

type SupporterImg = {
  img: StaticImageData;
  alt: string;
  link: string;
};
