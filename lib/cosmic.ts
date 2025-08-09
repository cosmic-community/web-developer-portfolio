import { createBucketClient } from '@cosmicjs/sdk';

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
  apiEnvironment: 'staging'
});

// Fetch functions
export async function getTestimonials() {
  try {
    const { objects } = await cosmic.objects.find({
      type: 'testimonials',
      props: 'id,title,slug,metadata',
    });
    return objects;
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    return [];
  }
}

export async function getWorkExperience() {
  try {
    const { objects } = await cosmic.objects.find({
      type: 'work-experience',
      props: 'id,title,slug,metadata',
    });
    return objects;
  } catch (error) {
    console.error('Error fetching work experience:', error);
    return [];
  }
}

export async function getSkills() {
  try {
    const { objects } = await cosmic.objects.find({
      type: 'skills',
      props: 'id,title,slug,metadata',
    });
    return objects;
  } catch (error) {
    console.error('Error fetching skills:', error);
    return [];
  }
}

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