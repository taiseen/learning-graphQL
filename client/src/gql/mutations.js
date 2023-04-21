import { gql } from '@apollo/client';

export const CREATE_NEW_USER = gql`
    mutation createNewUser($newUser: UserInfoInput!) {
        createNewUser(newUser: $newUser) {
            email
        }
    }
`;


export const LOGIN_USER = gql`
    mutation loginUser($existingUser: LoginUserInput!) {
        loginExistingUser(existingUser: $existingUser) {
                token
        }
    }
`;

