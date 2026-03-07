import { TagIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const author = defineType(
    {
        name: 'author',
        title: 'Author',
        type: 'document',
        icon: TagIcon,
        fields: [
            defineField(
                {
                    name: 'name',
                    title: 'Name',
                    validation: (rule) => rule.required(),
                    type: 'string'
                }
            ),
            defineField(
                {
                    name: "slug",
                    type: "slug",
                    validation: (rule) => rule.required(),
                    options: {
                        source: "name",
                    },
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
                    name: 'bio',
                    title: 'Bio',
                    validation: (rule) => rule.required(),
                    type: 'text'
                }
            )
        ]
    }
)