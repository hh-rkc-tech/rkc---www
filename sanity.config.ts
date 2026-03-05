// sanity.config.ts
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { schema } from './lib/sanity/schema';
import {media} from 'sanity-plugin-media'

export default defineConfig({
  basePath: '/studio', // This dictates the URL where your CMS will live
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  title: 'Website Content Manager',
  schema,
  plugins: [deskTool(),media()], 
});