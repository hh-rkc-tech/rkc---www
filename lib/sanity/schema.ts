import { type SchemaTypeDefinition } from 'sanity';
import { productType } from './schematype/productType';
import { categoryType } from './schematype/categoryType';
import { articleType } from './schematype/articleType';
import { author } from './schematype/author';
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productType,categoryType,articleType,author
  ],
};