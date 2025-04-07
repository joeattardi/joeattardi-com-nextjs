import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import * as motion from 'motion/react-client'

export const metadata: Metadata = {
  title: 'Projects | Joe Attardi',
  description: 'A showcase of my personal and professional projects',
}

// Sample project data
const projects = [
    {
        title: 'Web API Demos',
        description: 'A collection of demos and sample code from my book, Web API Cookbook. Covers web animations, speech recognition, DOM observers, and more.',
        image: '/images/projects/web-api-demos.png',
        tags: ['HTML', 'JavaScript'],
        link: 'https://webapis.info'
    },
    {
        title: 'URL Scrub',
        description: 'A tool for building and cleaning URLs. Use the visual URL builder, or paste in a URL and automatically remove tracking parameters to protect your privacy.',
        image: '/images/projects/url-scrub.png',
        tags: ['JavaScript'],
        link: 'https://urlscrub.com'
    },
    {
        title: 'JSON Colorizer',
        description: 'An npm package to pretty-print JSON data with syntax highlighting.',
        image: '/images/projects/json-colorizer.png',
        tags: ['JavaScript'],
        link: 'https://www.npmjs.com/package/json-colorizer'
    },
    {
        title: 'Promise Poller',
        description: 'An npm package that provides a Promise based interface for performing polling operations.',
        tags: ['JavaScript'],
        link: 'https://www.npmjs.com/package/promise-poller'
    },
    {
        title: 'PicMo',
        description: 'A vanilla JavaScript emoji picker component. No longer maintained.',
        image: '/images/projects/picmo.png',
        tags: ['JavaScript'],
        link: 'https://npmjs.com/package/picmo'
    },
    {
        title: 'Build a Toast Notification System With Svelte',
        description: 'A guided project series on building a basic toast notification system in a Svelte application. Published by Educative.',
        image: '/images/projects/svelte-toast.png',
        tags: ['JavaScript', 'Svelte'],
        link: 'https://www.educative.io/projects/build-a-toast-notification-system-with-svelte'
    }
]

const PlaceholderImage = () => (
  <div className="w-full h-full flex items-center justify-center bg-gray-200">
    <svg
      className="w-12 h-12 text-gray-400"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  </div>
)

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <Link
              href={project.link}
              className="group block"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 group-hover:scale-105">
                <div className="aspect-video bg-gray-200 relative">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <PlaceholderImage />
                  )}
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-600">
                    {project.title}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 text-sm rounded-full text-gray-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
