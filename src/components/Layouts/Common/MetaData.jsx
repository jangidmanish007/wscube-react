'use client';
import Head from 'next/head';
import PropTypes from 'prop-types';
import React from 'react';
import { useRouter } from 'next/navigation';

export default function MetaData(props) {
  const { metaContent } = props;
  const router = useRouter();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const dynamicSegments = router.asPath;
  const myArray = dynamicSegments.split('?');

  return (
    <Head>
      {/* <title>Law-Prep React</title> */}
      <title>{metaContent?.metaTitle}</title>
      {/* <link rel="canonical" href={siteUrl + decodeURIComponent(router.asPath)} /> */}
      {/*  <meta name="robots" content="noindex" /> */}
      <link rel="canonical" href={siteUrl + myArray[0]} />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="keyword" content={metaContent?.metaKeywords} />
      <meta name="description" content={metaContent?.metaDescription} />
      <meta property="og:title" content={metaContent?.metaTitle} />
      <meta property="og:site_name" content={process.env.APP_NAME} />
      <meta property="og:url" content={process.env.NEXT_PUBLIC_SITE_URL} />
      <meta property="og:type" content="business.business" />
      <meta property="og:description" content={metaContent?.metaDescription} />
      <meta property="og:image" content={`${process.env.NEXT_PUBLIC_SITE_URL}images/logo.svg`} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@wscubetechindia" />
      <meta name="twitter:title" content={metaContent?.metaTitle} />
      <meta name="twitter:description" content={metaContent?.metaDescription} />
      <meta name="twitter:image:src" content={`${process.env.NEXT_PUBLIC_SITE_URL}images/logo.svg`} />
      <meta itemprop="name" content={process.env.APP_NAME} />
      <meta itemprop="description" content={metaContent?.metaDescription} />
      <meta itemprop="image" content={`${process.env.NEXT_PUBLIC_SITE_URL}images/logo.svg`} />
    </Head>
  );
}

MetaData.propTypes = {
  metaContent: PropTypes.object,
};
