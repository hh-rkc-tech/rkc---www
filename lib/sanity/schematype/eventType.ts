import { defineArrayMember, defineField, defineType } from "sanity";

export const eventType = defineType({
  name: "event",
  title: "Event",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Event Title",
      type: "string",
      validation: (Rule) => Rule.required().min(5).max(100),
      description:
        'The name of the event ',
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
      description: "Unique URL-friendly identifier for the event page.",
    }),
    defineField({
      name: "link",
      title: "LUMA Link",
      description: "",
      type: "url",
    }),
    defineField({
      name: "description",
      title: "Event Description",
      type: "string",
      validation: (Rule) => Rule.required(),
      description:
        "A small description of the event, highlighting key details like agenda or purpose.",
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alt Text",
          type: "string",
          description: "Describe the image for accessibility.",
        },
      ],
      description:
        "A vibrant cover image for the event page",
    }),
    defineField({
      name: "dateTime",
      title: "Date and Time",
      type: "datetime",
      options: {
        dateFormat: "DD MMM YYYY",
        timeFormat: "hh:mm A",
        timeStep: 15,
      },
      validation: (Rule) => Rule.required(),
      description: "The start date and time of the event.",
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      validation: (Rule) => Rule.required(),
      description:
        "Specify if the event is physical or virtual and provide relevant details.",
    }),
    defineField({
      name: "body",
      type: "blockContent",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "images",
      type: "array",
      of: [
        defineArrayMember({
          name: "image",
          type: "image",
          validation: (rule) => rule.required(),
          options: {
            hotspot: true,
          },
          fields: [
            defineField({
              name: "alt",
              type: "string",
              title: "Alternative text",
            }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      date: "dateTime",
      media: "coverImage",
    },
    prepare(selection) {
      const { title, date, media } = selection;
      return {
        title,
        subtitle: date
          ? `Event on ${new Date(date).toLocaleDateString()}`
          : "No date set",
        media,
      };
    },
  },
});