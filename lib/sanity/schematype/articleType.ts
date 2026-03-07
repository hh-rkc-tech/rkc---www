import { TagIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const articleType = defineType(
    {
        name: 'blogPost',
        title: 'Blog Post',
        type: 'document',
        icon: TagIcon,
        fields: [
            defineField(
                {
                    name: 'title',
                    title: 'Title',
                    validation: (rule) => rule.required(),
                    type: 'string'
                }
            ),
            defineField(
                {
                    name: 'slug',
                    title: 'URL Slug',
                    validation: (rule) => rule.required(),
                    type: 'slug',
                    options: { source: 'title', maxLength: 96 }
                }
            ),
            defineField(
                {
                    name: 'author',
                    title: 'Author',
                    validation: (rule) => rule.required(),
                    type: 'reference',
                    to: { type: 'author' }
                }
            ),
            defineField(
                {
                    name: 'mainImage',
                    title: 'Main Cover Image',
                    validation: (rule) => rule.required(),
                    type: 'image',
                    options: { hotspot: true }
                }
            ),
            defineField(
                {
                    name: 'publishedAt',
                    title: 'Published at',
                    type: 'datetime'
                }
            ),
            defineField(
                {
                    name: 'body',
                    title: 'Article Body',
                    validation: (rule) => rule.required(),
                    type: 'array',
                    of: [
                        { type: 'block' },
                        { type: 'image' }
                    ]
                }
            )
        ]
    }
);