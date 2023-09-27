import { gql } from "@apollo/client";

export const GET_BOOKS = gql`
  query MyQuery {
    booksApi {
      name
      description
      image {
        url
      }
    }
  }
`;
