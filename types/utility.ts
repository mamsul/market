import { OpenGraphType } from 'next/dist/lib/metadata/types/opengraph-types';
import { ResolvedTwitterMetadata } from 'next/dist/lib/metadata/types/twitter-types';

export interface INavbarMenuItem {
  name: string;
  url: string;
  icon?: React.ReactNode;
}

export interface INavbarMenu {
  logedIn: INavbarMenuItem[];
  notLoggedIn: INavbarMenuItem[];
}

export interface IconProps {
  className?: string;
  strokeWidth?: number;
}

export interface PageSEOProps {
  title: string;
  description?: string;
  canonicalUrl?: string;
  ogType?: string | OpenGraphType;
  ogImage?: string;
  twitterCard?: string | ResolvedTwitterMetadata['card'];
  keywords?: string[];
}
