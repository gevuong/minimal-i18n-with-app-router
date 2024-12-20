import { type PublicationCard } from '@/app/i18n/types/publications';
import Link from 'next/link';

const PublicationCard = ({
  title,
  date,
  subtext,
  url,
  linkText,
}: PublicationCard) => {
  return (
    <div className='flex flex-col justify-between h-full'>
      <h3 className="max-w-lg text-xl font-medium md:max-w-md">{title}</h3>
      <p className={`${!subtext ? 'hidden' : ''}`}>{subtext}</p>
      <div className="items-center space-y-6 md:flex md:justify-between md:space-y-0">
        <ul className="list-inside lg:list-outside xl:list-inside list-disc pb-6">
          <li>{date}</li>
        </ul>
        <Link
          className="rounded-3xl bg-white px-4 py-2 text-[#123d62] sm:px-8 whitespace-nowrap"
          target="_blank"
          href={url}
        >
          {linkText}
        </Link>
      </div>
    </div>
  );
};

export default PublicationCard;
