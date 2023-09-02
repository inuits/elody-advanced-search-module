import { gql } from "graphql-modules";

export const advancedSearchSchema = gql`
  #Advanced search
  input AdvancedSearchInput {
    value: [AdvancedInputType]
  }

  input SearchFilter {
    value: String
    isAsc: Boolean
    key: String
    order_by: String
  }

  input MinMaxInput {
    min: Int
    max: Int
    isRelation: Boolean
  }
  input TextInput {
    value: String
  }
  input SelectionInput {
    value: [String]
    AndOrValue: Boolean
  }

  enum SearchInputType {
    AdvancedSavedSearchType
  }

  enum AdvancedInputType {
    MinMaxInput
    TextInput
    SelectionInput
  }

  input FilterInput {
    key: String!
    type: AdvancedInputType!
    minMaxInput: MinMaxInput
    textInput: TextInput
    selectionInput: SelectionInput
  }
`;
