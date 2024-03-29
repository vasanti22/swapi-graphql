import React, { FC } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_CHARACTER } from '../graphql/queries';
import { FilmsType } from '../types';
import { DetailsContainer, H3, H1,Lists } from '../styles/global';
import Spinner from '../styles/Spinner';
import { IoIosPeople } from "react-icons/io";
import { RiMovie2Fill } from "react-icons/ri";


const CharacterDetail: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { loading, error, data } = useQuery(GET_CHARACTER, { 
    variables: { id }, 
    pollInterval: 500,
    fetchPolicy: 'cache-and-network',
  });

  if(loading) return <Spinner/>
  if (error) return <p>Error: {error.message}</p>;

  //console.log(data);

  const { person } = data;
  const character = person?.filmConnection?.films;

  return (
    <DetailsContainer>
      <H1 $detailsPage><IoIosPeople size={60} />{person.name}</H1>
      <H3 $detailsPage>Height <span>{person.height}</span></H3>
      <H3 $detailsPage>DOB <span>{person.birthYear}</span></H3>
      <H3 $detailsPage>Gender <span>{person.gender}</span></H3>
      <H1 $detailsPage>Films</H1>
      <Lists>
        {character.map((film:FilmsType) => (
            <li key={film.id}> 
              <RiMovie2Fill /><Link to={`/films/${film.id}`}>{film.title}</Link>
            </li>
          
        ))}
      </Lists>
    </DetailsContainer>
  );
}

export default CharacterDetail;
