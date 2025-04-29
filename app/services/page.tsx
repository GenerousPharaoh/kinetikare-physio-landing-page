import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import SectionWithBackground from '@/components/SectionWithBackground';

export const metadata: Metadata = {
  title: 'Premium Physiotherapy Services | Kareem Hassanein',
  description: 'Explore our comprehensive range of services',
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Premium Physiotherapy Services"
        subtitle="Specialized care for optimal recovery"
        imagePath="/images/patterns/pattern-3.jpg"
      />
      <SectionWithBackground className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-primary-900">Manual Therapy</h3>
              <p>Expert hands-on techniques to alleviate pain</p>
            </div>
          </div>
        </div>
      </SectionWithBackground>
    </>
  );
}
