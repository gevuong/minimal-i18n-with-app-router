import type { QA } from '@/app/i18n/types/faq';
import Link from 'next/link';
import { Fragment, useState } from 'react';
import ArrowIcon from '../faq/ArrowIcon';

const AccordionItem = ({ question, answer }: QA) => {
  const [isActive, setIsActive] = useState(false);
  const heightStyle = isActive ? 'max-h-screen' : 'max-h-0';
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
        <h3 className="pr-6 font-semibold">{question}</h3>
        <ArrowIcon isActive={isActive} />
      </div>

      {/* Answer Container */}
      {/* When accordion is not active, delay disappearance of top border */}
      <div className={`${borderTransitionStyle}`}>
        <div
          className={`overflow-hidden transition-all duration-500 ${heightStyle}`}
        >
          <div className="px-5 py-4 font-normal leading-relaxed text-stone-300">
            <p>
              {answer.map(({ type, text, href }, i) => {
                return type === 'link' ? (
                  <Link
                    key={i}
                    href={href as string}
                    target="_blank"
                    className="hover:text-blue-600"
                  >
                    {text}
                  </Link>
                ) : (
                  <Fragment key={i}>{text}</Fragment>
                );
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
