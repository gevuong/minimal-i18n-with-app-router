import { basePath } from '@/next.config.mjs';
import Link from 'next/link';
import ExportedImage from 'next-image-export-optimizer';
import {
  InstagramIconDarkTurquoise,
  InstagramIconWhite,
  LinkedInIconDarkTurquoise,
  LinkedInIconWhite,
} from '@/public/images/footer/index';

export default function SocialLinks({}) {
  return (
    <div className="mt-8 flex justify-center gap-10 lg:mt-4 lg:gap-7">
      <Link href="https://www.instagram.com/virufy/" className="lg:hidden">
        <ExportedImage
          src={InstagramIconWhite}
          alt="Instagram icon"
          className="h-[40px] w-[30px]"
          basePath={basePath}
        />
      </Link>
      <Link
        href="https://www.linkedin.com/company/virufy/"
        className="lg:hidden"
      >
        <ExportedImage
          src={LinkedInIconWhite}
          alt="LinkedIn icon"
          className="h-[40px] w-[30px]"
          basePath={basePath}
        />
      </Link>
      <Link href="https://www.instagram.com/virufy/" className="hidden lg:flex">
        <ExportedImage
          src={InstagramIconDarkTurquoise}
          alt="Instagram icon"
          className="h-[40px] w-[30px]"
          basePath={basePath}
        />
      </Link>
      <Link
        href="https://www.linkedin.com/company/virufy/"
        className="hidden lg:flex"
      >
        <ExportedImage
          src={LinkedInIconDarkTurquoise}
          alt="LinkedIn icon"
          className="h-[40px] w-[30px]"
          basePath={basePath}
        />
      </Link>
    </div>
  );
}
