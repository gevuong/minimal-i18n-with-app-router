import { basePath } from '@/next.config.mjs';
import Link from 'next/link';
import ExportedImage from 'next-image-export-optimizer';
import {
  InstagramIconDarkTurquoise,
  InstagramIconWhite,
  LinkedInIconDarkTurquoise,
  LinkedInIconWhite,
  XIconDarkGradient,
  XIconWhite,
} from '@/public/images/footer/index';

export default function SocialLinks({ lang }) {
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
      <Link
        href="https://x.com/virufy_japan"
        className={lang === 'ja' ? 'lg:hidden' : 'hidden'}
      >
        <ExportedImage
          src={XIconWhite}
          alt="X icon"
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
      <Link
        href="https://x.com/virufy_japan"
        className={lang === 'ja' ? 'hidden lg:flex' : 'hidden'}
      >
        <ExportedImage
          src={XIconDarkGradient}
          alt="X icon"
          className="h-[40px] w-[30px]"
          basePath={basePath}
        />
      </Link>
    </div>
  );
}
