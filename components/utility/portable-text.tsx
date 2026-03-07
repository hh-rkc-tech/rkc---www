"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { PortableText, type PortableTextBlock } from "next-sanity";

export const H1: React.FC<any> = ({ className, ...rest }) => (
  <h1 size="3xl" className={cn("font-semibold ", className)} {...rest} />
);
export const H2: React.FC<any> = ({ className, ...rest }) => (
  <h2 size="2xl" className={cn("", className)} {...rest} />
);
export const H3: React.FC<any> = ({ className, ...rest }) => (
  <h3 size="xl" className={cn("font-semibold mt-6", className)} {...rest} />
);
export const H4: React.FC<any> = ({ className, ...rest }) => (
  <h4 size="lg" className={cn("font-semibold mt-4", className)} {...rest} />
);
export const H5: React.FC<any> = ({ className, ...rest }) => (
  <h5 size="md" className={cn("font-semibold ", className)} {...rest} />
);
export const H6: React.FC<any> = ({ className, ...rest }) => (
  <h6 size="base" className={cn("font-semibold ", className)} {...rest} />
);
export const Para: React.FC<any> = ({ className, ...rest }) => (
  <p size="lg" className={cn("text-neutral-600", className)} {...rest} />
);

export const Quote: React.FC<any> = ({ className, children, ...rest }) => (
  <blockquote size="lg" className={cn("border-l border-l-zinc-500/20 px-4 my-8 text-2xl font-semibold tracking-[-0.04em] leading-7", className)} {...rest} >
    {children}
    </blockquote>
);
export const Anchor: React.FC<any> = ({ className, ...rest }) => (
  <Link
    href={rest.value.href}
    className={cn("text-blue-500", className)}
    {...rest}
  />
);

export const UnorderedList: React.FC<any> = ({ className, ...rest }) => (
  <ul
    className={cn("list-disc flex flex-col gap-y-2 ml-5", className)}
    {...rest}
  />
);
export const OrderedList: React.FC<any> = ({ className, ...rest }) => (
  <ol
    className={cn("list-decimal flex flex-col gap-y-2 ml-5", className)}
    {...rest}
  />
);

export const UnorderedListItem: React.FC<any> = ({
  className,
  children,
  ...rest
}) => (
  <li className={cn("", className)} {...rest}>
    {children}
  </li>
);

export const OrderedListItem: React.FC<any> = ({
  className,
  children,
  ...rest
}) => (
  <li className={cn("", className)} {...rest}>
    {children}
  </li>
);

export const Image: React.FC<any> = (props) => <img {...props} />;

// export const ImageBlock: React.FC<any> = ({
//   value: { alt, asset },
//   ...rest
// }) => {
//   const src = urlFor(asset).url();
//   return (
//     <figure className="mt-2">
//       <ZoomImage
//         src={src}
//         alt={alt}
//         priority={false}
//         loading="lazy"
//         {...rest}
//       />
//       <figcaption className="mt-1 text-neutral-500">{alt}</figcaption>
//     </figure>
//   );
// };

export const components = {
    types: {
      "image": Image,
    },
  block: {
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    h5: H5,
    h6: H6,
    p: Para,
    normal: Para,
    blockquote: Quote,
  },
  marks: {
    link: Anchor,
  },
  list: {
    number: OrderedList,
    bullet: UnorderedList,
  },
  listItem: {
    number: OrderedListItem,
    bullet: UnorderedListItem,
  },
};

export const BlockContent = ({ value }: any) => {
  return (
    <PortableText
      components={components}
      value={value as PortableTextBlock[]}
    />
  );
};