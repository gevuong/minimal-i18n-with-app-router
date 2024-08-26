import { redirect } from 'next/navigation';

const JohnBioPage = () => {
  redirect('https://tiny.cc/john-bio');
  return <>Redirecting...</>;
};

export default JohnBioPage;
