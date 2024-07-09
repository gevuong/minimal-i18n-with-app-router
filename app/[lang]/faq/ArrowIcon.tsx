import { ArrowDownIcon } from '@/app/assets/images/faq';
import ExportedImage from 'next-image-export-optimizer';

const ArrowIcon = ({ isActive }: { isActive: boolean }) => {
  const altText = isActive ? 'arrow up icon' : 'arrow down icon';
  const rotateStyle = isActive ? 'rotate-180' : 'rotate-0';

  return (
    <ExportedImage
      className={`${rotateStyle} h-6 w-6 object-cover transition duration-500 ease-in-out`}
      src={ArrowDownIcon}
      alt={altText}
    />
  );
};

export default ArrowIcon;
