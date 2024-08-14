import { basePath } from '@/next.config.mjs';
import ExportedImage from 'next-image-export-optimizer';
import Text from '../components/Text';
import Title from '../components/Title';
import { type CardData } from './page';

type AdvisorCardsProps = {
  cards: CardData[];
};

const AdvisorCards = ({ cards }: AdvisorCardsProps) => {
  // Calculate the number of cards in the last row
  const remainder = cards?.length % 3;

  return (
    <div className="mx-[10rem] mb-4 mt-5 grid w-full grid-cols-2 items-center justify-center gap-4 text-center lg:mx-[5rem] lg:w-[80rem] lg:grid-cols-3 xl:w-[80rem]">
      {cards?.map(({ route, name, text, subtitle }, index) => (
        <div
          className={`flex w-full flex-col items-center space-y-4 p-4 ${
            remainder === 1 && index === cards.length - 1
              ? 'lg:col-start-2'
              : ''
          }`}
          key={name}
        >
          <div className="relative w-full">
            <div className="absolute top-4 z-10 w-full lg:top-5 xl:top-7">
              <Text
                Style="subtitleCompact"
                Text={subtitle}
                TextClassProps="text-white font-semibold text-xs lg:text-lg xl:text-xl sm:leading-tight sm:mb-1"
              />
            </div>
            <ExportedImage
              className="mt-3 w-full"
              src={route}
              alt=""
              priority
              basePath={basePath}
            />
            <div className="absolute inset-x-0 bottom-0 top-[66%] bg-black bg-opacity-50 p-1 lg:top-[70%]">
              {name && (
                <Title
                  H="h4compact"
                  Text={name}
                  TitleClassProps="text-white font-semibold text-xs sm:text-xs lg:text-lg xl:text-xl overflow-hidden text-ellipsis"
                  as="span"
                />
              )}
              <Text
                Style="xxs"
                Text={text}
                TextClassProps="mt-0 text-white text-xxs sm:text-xxs lg:text-lg xl:text-lg overflow-hidden text-ellipsis"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdvisorCards;
