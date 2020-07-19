import gql from 'graphql-tag';

const GET_TODOS = gql`
  query todos($isDeleted: Boolean!) {
    todos(isDeleted: $isDeleted){
       id
       title
       description
       isDeleted
    }
  }
`

 export const queries = {
   GET_TODOS
 }

