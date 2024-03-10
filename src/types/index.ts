export interface DataTypes {
    data: {
        allFilms: AllFilmsType;
        film: Films;
        person: Person;
        allPeople: AllPeople;
    }
}

export interface AllFilmsType {
    films: FilmsType[];
}

export interface Films {
    film: FilmsType[];
}

export interface Person {
    person: FilmsType[];
}

export interface FilmsType {
    id: string
    title: string
    director: string
    releaseDate: string
    producers: [string]
    charachers:[string]
    name: string
    birthYear: string
    gender: string
    height: string
}

export interface People_edges_node {
    __typename: "Person";
    id: string;
    name: string;
  }
  
  export interface People_edges {
    __typename: "PeopleEdge";
    node: People_edges_node;
  }
  
  export interface People {
    __typename: "PeopleConnection";
    edges: (People_edges | null)[];
  }

  export interface AllPeople {
    allPeople: People
}
  
  



