import { type TeamLeadCard } from '@/app/i18n/types/teamLeads';
import { basePath } from '@/next.config.mjs';
import ExportedImage from 'next-image-export-optimizer';

const TeamLeadCard = ({ name, texts, image, altText, role }: TeamLeadCard) => {
  return (
    <div className="relative">
      <ExportedImage
        className="h-[225px] w-[158px] object-cover md:h-[450px] md:w-[375px]"
        src={image}
        alt={altText}
        basePath={basePath}
      />

      {/* apply opaque background to dim card */}
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-black bg-opacity-20"></div>

      {role && (
        <div className="absolute inset-x-0 top-2 px-1 text-center text-sm font-bold text-white md:text-2xl">
          {role}
        </div>
      )}

      {/* Text Container */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-black bg-opacity-50 px-2 py-2 text-center md:h-40">
        <h2 className="pb-1 text-xs font-bold md:text-2xl">{name}</h2>
        {texts.map((text, i) => (
          <div key={i} className="text-[9px] md:text-lg">
            {text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamLeadCard;
