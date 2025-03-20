"use client";

import Head from 'next/head';

interface DocumentHeadProps {
  title?: string;
}

export default function DocumentHead({ title = "Full Throttle Revenue: How RevOps & Automation Drive Success" }: DocumentHeadProps) {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      <meta name="theme-color" content="#121212" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <title>{title}</title>
      <link 
        href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300;400;600;700;900&display=swap" 
        rel="stylesheet"
      />
    </Head>
  );
}
