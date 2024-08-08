import { basePath } from '@/next.config.mjs';
import ExportedImage from 'next-image-export-optimizer';
import Text from './Text';
import Title from './Title';

export default function Card({ CardsData }) {
  // Calculate the number of cards in the last row
  const remainder = CardsData?.length % 3;

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-4 text-center items-center justify-center mt-5 w-full lg:w-[80rem] xl:w-[80rem] mx-[10rem] lg:mx-[5rem]">
      {CardsData?.map(({ route, name, text, subtitle }, index) => (
        <div
          className={`flex flex-col items-center space-y-4 p-4 w-full ${
            remainder === 1 && index === CardsData.length - 1
              ? 'lg:col-start-2'
              : ''
          }`}
          key={name}
        >
          <div className="relative w-full">
            <div className="absolute top-4 lg:top-5 xl:top-7 z-10 w-full">
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
            <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-50 p-1 top-[66%] lg:top-[70%]">
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
}
