import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { usei18n } from '../../i18n';
import StoryPage from './page';

vi.mock('../../i18n', () => ({
  usei18n: vi.fn(),
}));

vi.mock('next/link', () => ({
  default: ({ children }: { children: React.ReactNode }) => children,
}));

vi.mock('next-image-export-optimizer', () => ({
  default: ({ src, alt }: { src: string; alt: string }) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={alt} />;
  },
}));

describe('StoryPage', () => {
  const mockI18nData = {
    story: {
      aboutUsSection: {
        title: 'About Us',
        texts: ['We are a company', 'We value innovation'],
      },
      storySection: {
        title: 'Our Story',
        texts: [
          [
            { type: 'text', text: 'Our journey started in 2020.' },
            { type: 'link', text: 'Learn more', url: 'our-story' },
          ],
        ],
      },
      valuesSection: {
        title: 'Our Values',
        cards: [
          { title: 'Integrity', description: 'We do the right thing.' },
          { title: 'Innovation', description: 'We create the future.' },
        ],
      },
      privacySection: {
        title: 'Privacy Policy',
        texts: ['Your privacy is important to us.'],
      },
    },
  };

  beforeEach(() => {
    vi.mocked(usei18n).mockReturnValue(mockI18nData);
  });

  it('renders the About Us section', () => {
    render(<StoryPage params={{ lang: 'en' }} />);
    expect(
      screen.getByRole('heading', { level: 2, name: 'About Us' }),
    ).toBeDefined();
  });
});
