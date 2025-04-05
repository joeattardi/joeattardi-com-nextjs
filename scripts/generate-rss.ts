import { getPosts } from '../src/app/blog/utils';
import { Feed } from 'feed';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generateFeed() {
  const posts = await getPosts();
  const latestPosts = posts.slice(0, 10);

  const feed = new Feed({
    title: "Joe Attardi's Blog",
    description: "Software developer and author specializing in front-end development",
    id: "https://joeattardi.com/",
    link: "https://joeattardi.com/",
    language: "en",
    copyright: `All rights reserved ${new Date().getFullYear()}, Joe Attardi`,
    author: {
      name: "Joe Attardi",
      email: "jattardi@gmail.com",
      link: "https://joeattardi.com"
    }
  });

  latestPosts.forEach(post => {
    feed.addItem({
      title: post.title,
      id: `https://joeattardi.com/blog/${post.slug}`,
      link: `https://joeattardi.com/blog/${post.slug}`,
      description: post.description,
      date: new Date(post.pubDate),
      image: post.image ? {
        url: `https://joeattardi.com${post.image}`
      } : undefined
    });
  });

  const publicDir = path.join(process.cwd(), 'public');
  await fs.mkdir(publicDir, { recursive: true });
  await fs.writeFile(path.join(publicDir, 'rss.xml'), feed.rss2());
  console.log('RSS feed generated successfully!');
}

generateFeed().catch(console.error); 