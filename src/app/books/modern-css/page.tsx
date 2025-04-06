import modernCssCover from '@/images/modern-css-cover.jpg';
import Image from 'next/image';
import { FaAmazon, FaApple, FaBookOpen } from 'react-icons/fa';

export default function ModernCSSPage() {
  const tableOfContents = [
    { title: 'Introduction to CSS', description: 'Get started with CSS fundamentals and understand its role in modern web development.' },
    { title: 'CSS Selectors', description: 'Master the art of targeting elements with powerful and efficient selectors.' },
    { title: 'Basic CSS Concepts', description: 'Learn about the box model, specificity, and inheritance.' },
    { title: 'Basic Styling', description: 'Explore colors, units, and basic styling properties.' },
    { title: 'Backgrounds and Gradients', description: 'Create stunning backgrounds using gradients, patterns, and images.' },
    { title: 'Text Styling', description: 'Learn typography, text effects, and advanced text styling techniques.' },
    { title: 'Layout and Positioning', description: 'Master the art of positioning elements and creating complex layouts.' },
    { title: 'Transforms', description: 'Transform elements in 2D and 3D space with CSS transforms.' },
    { title: 'Transitions and Animations', description: 'Bring your designs to life with smooth transitions and animations.' },
    { title: 'Flexbox', description: 'Create flexible and responsive layouts with CSS Flexbox.' },
    { title: 'Responsive Design', description: 'Learn how to make your designs work across all devices.' },
    { title: 'CSS Grid', description: 'Master the powerful CSS Grid layout system.' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Modern CSS
            </h1>
            <h2 className="text-2xl text-gray-700 mb-8">by Joe Attardi</h2>
            <p className="text-xl text-gray-700 mb-8">
              Master the art of modern CSS with this comprehensive guide. Learn how to create beautiful, responsive, and performant web designs.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.amazon.com/Modern-CSS-Master-Concepts-Development/dp/148426293X"
                className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <FaAmazon className="text-xl" />
                Buy on Amazon
              </a>
            </div>
            <div className="mt-8">
              <h3 className="text-sm font-medium text-gray-500 mb-3">Also available from</h3>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.barnesandnoble.com/w/modern-css-joe-attardi/1137355059?ean=9781484262931"
                  className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors text-sm"
                >
                  <FaBookOpen className="text-lg" />
                  Barnes &amp; Noble
                </a>
                <a
                  href="https://link.springer.com/book/10.1007/978-1-4842-6294-8"
                  className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors text-sm"
                >
                  <FaBookOpen className="text-lg" />
                  Apress
                </a>
                <a
                  href="https://books.apple.com/us/book/modern-css/id1534750842"
                  className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors text-sm"
                >
                  <FaApple className="text-lg" />
                  Apple Books
                </a>
              </div>
            </div>
          </div>
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src={modernCssCover}
              alt="Modern CSS book cover"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={95}
            />
          </div>
        </div>
      </section>

      {/* Concept Showcase */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Key CSS Concepts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Flexbox Tile */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-4">Flexbox Layout</h3>
              <div className="flex gap-2 h-32 bg-gray-100 rounded-lg p-4">
                <div className="w-8 h-8 bg-blue-500 rounded"></div>
                <div className="w-8 h-8 bg-blue-500 rounded"></div>
                <div className="w-8 h-8 bg-blue-500 rounded"></div>
              </div>
              <p className="mt-4 text-gray-600">Create flexible layouts that adapt to their container.</p>
            </div>

            {/* Grid Tile */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-4">CSS Grid</h3>
              <div className="grid grid-cols-2 gap-2 h-32 bg-gray-100 rounded-lg p-4">
                <div className="bg-purple-500 rounded"></div>
                <div className="bg-purple-500 rounded"></div>
                <div className="bg-purple-500 rounded"></div>
                <div className="bg-purple-500 rounded"></div>
              </div>
              <p className="mt-4 text-gray-600">Build complex two-dimensional layouts with ease.</p>
            </div>

            {/* Animations Tile */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-4">Animations</h3>
              <div className="h-32 bg-gray-100 rounded-lg p-4 flex items-center justify-center">
                <div className="w-12 h-12 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              <p className="mt-4 text-gray-600">Bring your designs to life with smooth animations.</p>
            </div>

            {/* Responsive Design Tile */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-4">Responsive Design</h3>
              <div className="h-32 bg-gray-100 rounded-lg p-4 flex items-center justify-center">
                <div className="w-16 h-16 bg-orange-500 rounded-lg transform hover:scale-110 transition-transform"></div>
              </div>
              <p className="mt-4 text-gray-600">Create designs that work beautifully on any device.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What You&apos;ll Learn</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tableOfContents.map((chapter, index) => (
            <div
              key={index}
              className="p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <span className="text-blue-600 font-mono text-sm">Chapter {index + 1}</span>
              <h3 className="text-lg font-semibold text-gray-900">{chapter.title}</h3>
              <p className="text-gray-600">{chapter.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Master Modern CSS?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Get your copy today and start creating beautiful, responsive web designs.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://www.amazon.com/Modern-CSS-Master-Concepts-Development/dp/148426293X"
              className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <FaAmazon className="text-xl" />
              Buy on Amazon
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
