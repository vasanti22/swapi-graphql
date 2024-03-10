import React, { FC } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_CHARACTER } from '../graphql/queries';
import { FilmsType } from '../types';

const CharacterDetail: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { loading, error, data } = useQuery(GET_CHARACTER, { variables: { id } });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  //console.log(data);

  const { person } = data;
  const character = person?.filmConnection?.films;

  return (
    <div>
      <h2>Name: {person.name}</h2>
      <p>Height: {person.height}</p>
      <p>DOB: {person.birthYear}</p>
      <p>Gender: {person.gender}</p>
      <h3>Films</h3>
      <ul>
        {character.map((film:FilmsType) => (
            <li key={film.id}> 
              <Link to={`/films/${film.id}`}>{film.title}</Link>
            </li>
          
        ))}
      </ul>
    </div>
  );
}

export default CharacterDetail;
