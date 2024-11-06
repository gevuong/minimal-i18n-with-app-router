import { type TeamLeadCard } from '@/app/i18n/types/teamLeads';
import { basePath } from '@/next.config.mjs';
import ExportedImage from 'next-image-export-optimizer';

const TeamLeadCard = ({ name, texts, image, altText }: TeamLeadCard) => {
  return (
    <div className="relative text-center text-gray-300 w-40 md:w-[23rem]">
      <ExportedImage
        className="h-[225px] w-40 object-cover md:h-[450px] md:w-[23rem]"
        src={image}
        alt={altText}
        basePath={basePath}
      />

      {/* apply opaque background to dim card */}
      {/* <div className="absolute bottom-0 left-0 right-0 top-0 bg-black bg-opacity-20"></div> */}

      {/* Text Container */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-24 bg-black bg-opacity-50 px-2 py-2 text-center md:h-40"> */}
        <h2 className="pb-1 text-xs md:text-2xl pt-4">{name}</h2>
        {texts.map((text, i) => (
          <div key={i} className="text-[9px] md:text-lg font-thin">
            {text}
          </div>
        ))}
      {/* </div> */}
    </div>
  );
};

export default TeamLeadCard;
