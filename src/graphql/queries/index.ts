import { gql } from "@apollo/client";

export const GET_ALL_FILMS = gql`
query AllFilms {
    allFilms {
      films {
        id
        title
        releaseDate
        director
        producers
        openingCrawl
        characterConnection {
          characters {
            id
            name
          }
        }
      }
    }
  }
`;  

export const GET_FILM = gql`
query Films($id: ID!) {
  film(id: $id) {
    id
    title
    director
    producers
    openingCrawl
    releaseDate
    characterConnection {
      characters {
        id
        name
      }
    }
  }
}
`;

export const GET_CHARACTER = gql`
query Person($id: ID!) {
  person(id: $id) {
    id
    name
    birthYear
    gender
    height
    filmConnection {
      films {
        id
        title
      }
    }
  }
}
`;

export const GET_ALL_CHARACTERS = gql `
query AllPeople($after: String) {
  allPeople( first: 12, after: $after) {
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
    edges {
      cursor
      node {
        id
        name
      }
      
    }
    totalCount
  } 
}
`;