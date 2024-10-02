import { PageSEOProps } from '@/types';
import { clsx, type ClassValue } from 'clsx';
import { Metadata } from 'next';
import { OpenGraphType } from 'next/dist/lib/metadata/types/opengraph-types';
import { ResolvedTwitterMetadata } from 'next/dist/lib/metadata/types/twitter-types';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function customMetaDataGenerator({
  title,
  description = 'Jual beli jajan dan barang di Pasar Knitto',
  canonicalUrl = process.env.SITE_URL || 'https://pasarknitto.co.id',
  ogType = 'website',
  keywords = ['an array', 'of default', 'keywords'],
  ogImage = 'https://url-to-your-image-this-is-a-default-value-for-optional-parameter',
  twitterCard = 'summary_large_image',
}: PageSEOProps): Metadata {
  const siteTitle = 'Pasar Knitto';
  const fullTitle = `${title} | ${siteTitle}`;

  return {
    title: fullTitle,
    description,
    keywords: keywords.join(', '),
    openGraph: {
      title: fullTitle,
      description,
      type: ogType as OpenGraphType,
      url: canonicalUrl,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: twitterCard as ResolvedTwitterMetadata['card'],
      title: fullTitle,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export const generateSlug = {
  slugify(text: string) {
    return text
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]+/g, '')
      .replace(/--+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
  },
  unslug(text: string) {
    return text.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase());
  },
};
