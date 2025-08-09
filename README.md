# Web Developer Portfolio

![App Preview](https://imgix.cosmicjs.com/7a3b5db0-74bc-11f0-a051-23c10f41277a-photo-1516251193007-45ef944ab0c6-1754701328731.jpg?w=1200&h=300&fit=crop&auto=format,compress)

## Features

- **Project Showcases**: Highlight projects with detailed descriptions, technologies used, live URLs, and repository links.
- **Skills Display**: Categorize skills by proficiency and experience, showcasing key competencies.
- **Testimonials Section**: Display client testimonials with quotes and headshots.
- **Work Experience Timeline**: Show detailed professional history with roles, responsibilities, and company details.
- **Responsive Design**: Optimized for mobile and desktop views with fast load times.

## Clone this Bucket and Code Repository

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Bucket and Code Repository](https://img.shields.io/badge/Clone%20this%20Bucket-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](http://localhost:3040/projects/new?clone_bucket=689698d33d5033a7ab1ae041&clone_repository=6896b197f03b84c0e9a979bf)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create a content model for a web developer portfolio with projects, skills, work experience, and testimonials"

### Code Generation Prompt

> "Build a Next.js website that uses my existing objects in this bucket"

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- **Next.js** for server-side rendering and static generation.
- **React** for building interactive UIs.
- **TypeScript** for type safety.
- **Tailwind CSS** for modern styling.
- **Cosmic CMS** for managing content dynamically.
- **imgix** for image processing and optimization.

## Getting Started

### Prerequisites

- Node.js 18+ installed.
- Access to your Cosmic CMS bucket with correct read and write permissions.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your/repository.git
   cd your-repository-folder
   ```

2. **Install dependencies**:
   ```bash
   bun install
   ```

3. **Environment Variables**: Create a file called `.env.local` in the root of your project and add the following variables:
   ```plaintext
   COSMIC_BUCKET_SLUG=your-bucket-slug
   COSMIC_READ_KEY=your-read-key
   COSMIC_WRITE_KEY=your-write-key
   ```

4. **Run the Development Server**:
   ```bash
   bun run dev
   ```

5. **Build for Production**:
   ```bash
   bun run build
   bun run start
   ```

6. **Access the Local Development Site** at [http://localhost:3000](http://localhost:3000).

## Cosmic SDK Examples

Here's how you can use the Cosmic SDK to fetch projects:

```typescript
// lib/cosmic.ts
import { createBucketClient } from '@cosmicjs/sdk';

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
});

// Example fetching projects
export async function getProjects() {
  try {
    const { objects } = await cosmic.objects.find({
      type: 'projects',
      props: 'id,title,slug,metadata',
    });
    return objects;
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
}
```

## Cosmic CMS Integration

- This application uses Cosmic to manage content including projects, skills, work experiences, and testimonials.
- You can easily update the content through the Cosmic dashboard, and the changes will reflect on the site.

## Deployment Options

- **Vercel** for Next.js applications.
- **Netlify** for deploying Jamstack sites.
- **Environmental Variables**: Be sure to set `COSMIC_BUCKET_SLUG`, `COSMIC_READ_KEY`, and `COSMIC_WRITE_KEY` in your hosting platform dashboard.

<!-- README_END -->