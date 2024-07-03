import { Locale } from '@/i18n-config';
import ExportedImage from 'next-image-export-optimizer';
import MaskHeader from '../../assets/mask_header.png';
import { getDictionary } from '../dictionary';

const OurStoryPage = async ({
  params: { lang },
}: {
  params: { lang: Locale };
}) => {
  const dict = await getDictionary(lang);
  return (
    <div>
      <h1>{dict.ourStory.title}</h1>
      <ExportedImage
        className="object-cover"
        src={MaskHeader}
        alt=""
        width={1512}
        height={997}
        priority
      />
    </div>
  );
};

export default OurStoryPage;
