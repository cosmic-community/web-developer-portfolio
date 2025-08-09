import './globals.css';
import CosmicBadge from '@/components/CosmicBadge';

export const metadata = {
  title: 'Web Developer Portfolio | Modern Digital Solutions',
  description: 'Professional web developer creating beautiful, functional websites and applications. Specializing in React, Next.js, and modern web technologies.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const bucketSlug = process.env.COSMIC_BUCKET_SLUG as string;

  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
        <CosmicBadge bucketSlug={bucketSlug} />
      </body>
    </html>
  )
}