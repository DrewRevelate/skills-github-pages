import { Metadata } from 'next';

export const siteConfig = {
  name: 'Full Throttle Revenue Presentation',
  description: 'How RevOps & Automation Drive Success in Today\'s High-Speed Business Environment',
  url: 'https://revops-presentation.vercel.app',
  ogImage: 'https://revops-presentation.vercel.app/images/og-image.png',
  links: {
    github: 'https://github.com/DrewRevelate/RevOps_Presentation',
  },
};

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'Revenue Operations', 
    'RevOps', 
    'Sales Automation', 
    'F1', 
    'Racing', 
    'Business', 
    'Presentation'
  ],
  authors: [
    {
      name: 'Drew Lambert',
      url: 'https://revelateops.com',
    },
  ],
  creator: 'Drew Lambert',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#E10600' },
    { media: '(prefers-color-scheme: dark)', color: '#E10600' },
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@DrewLambert',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  metadataBase: new URL(siteConfig.url),
};
