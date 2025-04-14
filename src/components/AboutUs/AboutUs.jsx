'use client';

import AboutUsBanner from '@/components/AboutUs/AboutUsBanner';
import WhatIsWscubeTech from '@/components/AboutUs/WhatIsWscubeTech';
import WhatWeDo from '@/components/AboutUs/WhatWeDo';
import InpectfulNumbers from '@/components/AboutUs/InpectfulNumbers';
import FounderMessage from '@/components/AboutUs/FounderMessage';

export default function AboutUs() {
  return (
    <>
      <AboutUsBanner />
      <WhatIsWscubeTech />
      <WhatWeDo />
      <InpectfulNumbers />
      <FounderMessage />
    </>
  );
}
