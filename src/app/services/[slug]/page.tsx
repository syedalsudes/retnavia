import { Metadata } from 'next';
import Services from '@/components/pagesCode/ServiceDetailPage';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;

  const title = slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return {
    title: `${title} Services | Retnavia Solutions`,
    description: `Expert ${title} solutions tailored for scalability and performance. Partner with Retnavia to engineer your next big idea in the USA, UAE, and EU markets.`,
    openGraph: {
      title: `${title} Excellence | Retnavia`,
      description: `High-performance ${title} engineered for global brands.`,
      url: `https://retnavia.com/services/${slug}`,
    },
  };
}

export default function ServiceDetailPage({ params }: Props) {
  return <Services params={params} />;
}