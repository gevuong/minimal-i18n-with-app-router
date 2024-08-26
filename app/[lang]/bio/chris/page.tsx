import { redirect } from 'next/navigation';

const ChrisBioPage = () => {
  redirect('https://tiny.cc/chris-bio');
  return <>Redirecting...</>;
};

export default ChrisBioPage;
