import { FaAmazon, FaCode, FaBookOpen, FaApple, FaGoogle } from 'react-icons/fa';
import { SiOreilly } from 'react-icons/si';
import Image from 'next/image';
import webApiCookbookCover from '@/images/web-api-cookbook-cover.jpg';

export default function WebAPICookbookPage() {
  const tableOfContents = [
    { title: 'Asynchronous APIs', description: 'Explore fundamental asynchronous JavaScript concepts, including callback functions and Promises.' },
    { title: 'Simple Persistence with the Web Storage API', description: 'Store and retrieve data using persistent storage.' },
    { title: 'URLs and Routing', description: 'Work with the URL and History APIs.' },
    { title: 'Network Requests', description: 'Communicate with remote servers and APIs.' },
    { title: 'IndexedDB', description: 'Learn how to use IndexedDB to store and retrieve large amounts of structured data.' },
    { title: 'Observing the DOM', description: 'Explore how to observe changes in the DOM using MutationObserver, IntersectionObserver, and ResizeObserver.' },
    { title: 'Forms', description: 'Discover how to handle form submissions and input validation using the FormData and Constraint Validation API.' },
    { title: 'The Web Animations API', description: 'Learn how to create and control animations using the Web Animations API.' },
    { title: 'The Web Speech API', description: 'Discover how to add speech recognition and synthesis capabilities to web applications.' },
    { title: 'Working With Files', description: 'Learn how to handle file uploads and downloads using the File API.' },
    { title: 'Internationalization', description: 'Explore how to create internationalized web applications that can be easily localized.' },
    { title: 'Web Components', description: 'Discover how to create reusable custom elements using the Web Components API.' },
    { title: 'UI Elements', description: 'Use dialogs and other interactive elements.' },
    { title: 'Device Integration', description: 'Interact with sensors and services on your device.' },
    { title: 'Measuring Performance', description: 'Capture performance metrics.' },
    { title: 'Working With the Console', description: 'Learn about different ways to present information using the Console API.' },
    { title: 'CSS', description: 'Explore CSS related APIs.' },
    { title: 'Media', description: 'Work with images and video.' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Web API Cookbook
            </h1>
            <h2 className="text-2xl text-gray-700 mb-8">by Joe Attardi</h2>
            <p className="text-xl text-gray-700 mb-8">
              Your comprehensive guide to modern web APIs and browser capabilities. Master the tools you need to build powerful web applications.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.amazon.com/Web-API-Cookbook-JavaScript-Applications/dp/1098150694"
                className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <FaAmazon className="text-xl" />
                Buy on Amazon
              </a>
              <a
                href="https://webapis.info"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <FaCode className="text-xl" />
                See Code and Demos
              </a>
            </div>
            <div className="mt-8">
              <h3 className="text-sm font-medium text-gray-500 mb-3">Also available from</h3>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.barnesandnoble.com/w/web-api-cookbook-joe-attardi/1144735729?ean=9781098150693"
                  className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors text-sm"
                >
                  <FaBookOpen className="text-lg" />
                  Barnes &amp; Noble
                </a>
                <a
                  href="https://www.oreilly.com/library/view/web-api-cookbook/9781098150686/"
                  className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors text-sm"
                >
                  <SiOreilly className="text-lg" />
                  O&apos;Reilly Platform
                </a>
                <a
                  href="https://books.apple.com/us/book/web-api-cookbook/id6479818683"
                  className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors text-sm"
                >
                  <FaApple className="text-lg" />
                  Apple Books
                </a>
                <a
                  href="https://play.google.com/store/books/details/Joe_Attardi_Web_API_Cookbook?id=ZaT8EAAAQBAJ"
                  className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors text-sm"
                >
                  <FaGoogle className="text-lg" />
                  Google Play Books
                </a>
              </div>
            </div>
          </div>
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src={webApiCookbookCover}
              alt="Web API Cookbook book cover"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={95}
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What Readers Are Saying</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <blockquote className="text-lg text-gray-700 mb-4">
                &ldquo;Web API Cookbook covers a wide range of browser-based APIs and provides valuable examples for all skill levels. Plus, Joe&apos;s writing style and thoughtful explanations make the learning enjoyable. This is a must-read for web developers!&rdquo;
              </blockquote>
              <cite className="text-gray-900 font-semibold">
                — Sarah Shook, Software developer/owner, Shook LLC
              </cite>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <blockquote className="text-lg text-gray-700 mb-4">
                &ldquo;This book offered fresh insights and introduced me to APIs I never knew existed.&rdquo;
              </blockquote>
              <cite className="text-gray-900 font-semibold">
                — Bret Little, Staff Software Engineer, Shopify
              </cite>
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
          <h2 className="text-3xl font-bold mb-6">Ready to Master Web APIs?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Get your copy today and start building better web applications.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://www.amazon.com/Web-API-Cookbook-JavaScript-Applications/dp/1098150694"
              className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <FaAmazon className="text-xl" />
              Buy on Amazon
            </a>
            <a
              href="https://webapis.info"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <FaCode className="text-xl" />
              See Code and Demos
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
