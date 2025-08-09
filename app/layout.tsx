import './globals.css';
import CosmicBadge from '@/components/CosmicBadge';

export const metadata = {
  title: 'Web Developer Portfolio',
  description: 'Showcase of projects, skills, work experience, and testimonials.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const bucketSlug = process.env.COSMIC_BUCKET_SLUG as string;

  return (
    <html lang="en">
      <body>
        {children}
        <CosmicBadge bucketSlug={bucketSlug} />
      </body>
    </html>
  )
}