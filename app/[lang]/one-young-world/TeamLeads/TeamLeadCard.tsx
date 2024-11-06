import { type TeamLeadCard } from '@/app/i18n/types/teamLeads';
import { basePath } from '@/next.config.mjs';
import ExportedImage from 'next-image-export-optimizer';

const TeamLeadCard = ({ name, texts, image, altText }: TeamLeadCard) => {
  return (
    <div className="relative w-40 text-center text-gray-300 md:w-[23rem]">
      <ExportedImage
        className="h-[225px] w-40 object-cover md:h-[450px] md:w-[23rem]"
        src={image}
        alt={altText}
        basePath={basePath}
      />
      {/* Text Container */}
      <h2 className="pb-1 pt-4 text-xs md:text-2xl">{name}</h2>
      {texts.map((text, i) => (
        <div key={i} className="text-[9px] font-thin md:text-lg">
          {text}
        </div>
      ))}
    </div>
  );
};

export default TeamLeadCard;
