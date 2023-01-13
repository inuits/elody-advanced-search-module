import { gql } from 'graphql-modules';

export const advancedSearchSchema = gql`
  #Advanced search
  input AdvancedSearchInput {
    value: [AdvancedInputType]
  }

  input SearchFilter {
    value: String
    isAsc: Boolean
    key: String
  }

  input MinMaxInput {
    min: Int
    max: Int
    isRelation: Boolean
  }
  input TextInput {
    value: String
  }
  input MultiSelectInput {
    value: [String]
    AndOrValue: Boolean
  }

  enum SearchInputType {
    AdvancedInputMediaFilesType
    AdvancedInputType
    SimpleInputtype
  }

  enum AdvancedInputType {
    MinMaxInput
    TextInput
    MultiSelectInput
  }

  input FilterInput {
    key: String!
    type: AdvancedInputType!
    minMaxInput: MinMaxInput
    textInput: TextInput
    multiSelectInput: MultiSelectInput
  }
`;
