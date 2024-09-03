import type { SectionPersonalInformation } from '@/app/i18n/types/footer';
import { useState } from 'react';
import ArrowIcon from '../../faq/ArrowIcon';

const AccordionItemFooter = ({
  title,
  content,
  link,
}: SectionPersonalInformation) => {
  const [isActive, setIsActive] = useState(false);
  const heightStyle = isActive ? 'max-h-96' : 'max-h-0';
  const borderTransitionStyle = isActive
    ? 'border-t border-gray-400'
    : 'border-transparent transition-all delay-500';

  return (
    <div className="border-b border-gray-400 text-white last:border-b-0">
      {/* Question Container */}
      <div
        className="flex cursor-pointer items-center justify-between px-5 py-4"
        onClick={() => setIsActive(!isActive)}
      >
        <h3 className="pr-6 font-bold">{title}</h3>
        <ArrowIcon isActive={isActive} />
      </div>

      {/* Answer Container */}
      {/* When accordion is not active, delay disappearance of top border */}
      <div className={`${borderTransitionStyle}`}>
        <div
          className={`overflow-hidden transition-all duration-500 ${heightStyle} }`}
        >
          <div className="px-5 py-4">
            {link ? (
              <a href={link} className="leading-relaxed hover:text-blue-600 font-normal">
                {content}
              </a>
            ) : (
              <p className="font-normal leading-relaxed">{content}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionItemFooter;
