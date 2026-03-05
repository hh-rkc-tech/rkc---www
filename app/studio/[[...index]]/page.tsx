// app/studio/[[...index]]/page.tsx
'use client';

import { NextStudio } from 'next-sanity/studio';
import config from '../../../sanity.config'; // Adjust the relative path if necessary

export default function StudioPage() {
  // This component mounts the entire Sanity Studio interface on the /studio route
  return <NextStudio config={config} />;
}