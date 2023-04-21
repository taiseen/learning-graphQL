import { gql } from '@apollo/client';

export const GET_ALL_QUOTES = gql`
    query getAllQuote {
        quotes {
            quote
            userId{
                firstName
                _id
            }
        }
    }
`;