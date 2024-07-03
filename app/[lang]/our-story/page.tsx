import { Locale } from '@/i18n-config';
import { getDictionary } from '../dictionary';

const OurStoryPage = async ({
  params: { lang },
}: {
  params: { lang: Locale };
}) => {
  const dict = await getDictionary(lang);
  return <div>{dict.ourStory.title}</div>;
};

export default OurStoryPage;
