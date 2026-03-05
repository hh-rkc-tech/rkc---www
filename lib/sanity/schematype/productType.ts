
import { PackageIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const productType = defineType({
    name: "product",
  title: "Product",
  type: "document",
  icon: PackageIcon,
  fields: [
    defineField({
      name: "name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      validation: (rule) => rule.required(),
      options: {
        source: "name",
      },
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
    }),
    defineField({
      name: "category",
      type: "reference", 
      to: { type: "category" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "tag",
      title: "Tag",
      type: "string",
      description: "e.g., New Arrival, Best Seller",
    }),
    defineField({
      name: "img",
      title: "Main Image",
      type: "image",
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "thumbnail",
      title: "Thumbnail",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "brochure",
      title: "Brochure (PDF)",
      type: "file",
      options: {
        accept: ".pdf",
      },
    }),
    defineField({
      name: "desc",
      title: "Description",
      type: "array",
      of: [
        defineArrayMember({
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          lists: [],
        }),
      ],
    }),
    defineField({
      name: "specs",
      title: "Specs",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "detailSpecs",
      title: "Detailed Specifications",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "productSpec",
          fields: [
            defineField({
              name: "label",
              title: "Label",
              type: "string",
            }),
            defineField({
              name: "value",
              title: "Value",
              type: "string",
            }),
          ],
          preview: {
            select: {
              title: "label",
              subtitle: "value",
            },
          },
        }),
      ],
    }),
  ],
    preview: {
        select: {
            title: "name",
            media: "image",
        },
    },
});
