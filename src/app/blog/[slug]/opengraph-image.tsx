import { ImageResponse } from 'next/og'
import { getPost } from '../utils'

// Image metadata
export const size = {
  width: 1200,
  height: 630,
}
 
export const contentType = 'image/png'
 
// Image generation
export default async function Image({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug)

  const isDevelopment = process.env.NODE_ENV === 'development';
  const baseUrl = isDevelopment ? 'http://localhost:3000' : 'https://joeattardi.com';
 
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: post.data.image 
            ? 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)'
            : 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Cover image if exists */}
        {post.data.image && (
          <div
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              display: 'flex',
              backgroundImage: `url(${baseUrl}/${post.data.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.3,
            }}
          />
        )}

        {/* Base gradient layer */}
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            display: 'flex',
            background: post.data.image 
              ? 'linear-gradient(45deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.6) 100%)'
              : 'linear-gradient(45deg, #1e3a8a 0%, #6b21a8 100%)',
          }}
        />

        {/* Color overlay */}
        {!post.data.image && (
          <div
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              display: 'flex',
              background: 'linear-gradient(135deg, rgba(30, 58, 138, 0.8) 0%, rgba(107, 33, 168, 0.8) 100%)',
            }}
          />
        )}

        {/* Geometric pattern */}
        {!post.data.image && (
          <div
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              display: 'flex',
              backgroundImage: `
                linear-gradient(45deg, rgba(255, 255, 255, 0.1) 25%, transparent 25%),
                linear-gradient(-45deg, rgba(255, 255, 255, 0.1) 25%, transparent 25%),
                linear-gradient(45deg, transparent 75%, rgba(255, 255, 255, 0.1) 75%),
                linear-gradient(-45deg, transparent 75%, rgba(255, 255, 255, 0.1) 75%)
              `,
              backgroundSize: '100px 100px',
              backgroundPosition: '0 0, 0 50px, 50px -50px, -50px 0px',
              opacity: 0.2,
            }}
          />
        )}

        {/* Glowing circles */}
        {!post.data.image && (
          <div
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              display: 'flex',
              backgroundImage: `
                radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.15) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.15) 0%, transparent 50%)
              `,
              opacity: 0.3,
            }}
          />
        )}

        {/* Content container */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px',
            maxWidth: '80%',
            textAlign: 'center',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* Avatar */}
          <div
            style={{
              width: '120px',
              height: '120px',
              borderRadius: '60px',
              overflow: 'hidden',
              marginBottom: '24px',
              border: '4px solid rgba(255,255,255,0.2)',
              display: 'flex',
              boxShadow: '0 0 20px rgba(0,0,0,0.3)',
            }}
          >
            <img
              src={`${baseUrl}/avatar.jpg`}
              alt="Joe Attardi"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>

          {/* Title */}
          <h1
            style={{
              fontSize: '64px',
              fontWeight: 'bold',
              color: 'white',
              margin: '0',
              lineHeight: '1.2',
              textShadow: '0 2px 4px rgba(0,0,0,0.3)',
            }}
          >
            {post.data.title}
          </h1>

          {/* Author name */}
          <p
            style={{
              fontSize: '24px',
              color: 'rgba(255,255,255,0.9)',
              marginTop: '16px',
            }}
          >
            Joe Attardi
          </p>
        </div>
      </div>
    )
  )
}