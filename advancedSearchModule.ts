import { createModule } from 'graphql-modules';
import { advancedSearchSchema } from './advancedSearchSchema.schema';

const advancedSearchModule = createModule({
  id: 'advancedSearchModule',
  dirname: __dirname,
  typeDefs: [advancedSearchSchema],
  // resolvers: [],
});

export { advancedSearchModule, advancedSearchSchema };
