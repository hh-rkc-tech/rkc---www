import { type SchemaTypeDefinition } from 'sanity';
import { productType } from './schematype/productType';
import { categoryType } from './schematype/categoryType';
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productType,categoryType],
};