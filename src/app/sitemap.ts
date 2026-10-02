import type { MetadataRoute } from 'next';
import { ALL_COURSES, SITE } from '@/lib/content';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE.url, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: `${SITE.url}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    ...ALL_COURSES.map((c) => ({ url: `${SITE.url}/courses/${c.slug}`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 })),
  ];
}
