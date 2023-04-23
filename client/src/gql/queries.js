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

export const GET_USER_PROFILE = gql`
    query getUserProfile {
        userProfile {
            firstName
            lastName
            email
            quotes{
                quote
            }
        }
    }
`;