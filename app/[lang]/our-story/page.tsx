import { Locale } from '@/i18n-config';
import NextConfig from '@/next.config.mjs';
import ExportedImage from 'next-image-export-optimizer';
import { getDictionary } from '../dictionary';

const OurStoryPage = async ({
  params: { lang },
}: {
  params: { lang: Locale };
}) => {
  const { basePath } = NextConfig;
  const dict = await getDictionary(lang);
  return (
    <div>
      <h1>{dict.ourStory.title}</h1>
      <ExportedImage
        className="object-cover"
        src={`${basePath}/mask_header.png`}
        alt=""
        width={1512}
        height={997}
        priority
      />
    </div>
  );
};

export default OurStoryPage;
