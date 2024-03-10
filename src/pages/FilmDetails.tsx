import React, { FC } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_FILM } from '../graphql/queries';
import { FilmsType } from '../types';

const FilmDetail: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { loading, error, data } = useQuery(GET_FILM, { variables: { id } });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  //console.log(data);

  const { film } = data || {};
  const characters = film?.characterConnection?.characters;

  return (
    <div>
      <h2>{film.title}</h2>
      <p>Director: {film.director}</p>
      <p>Release Date: {film.releaseDate}</p>
      <h3>Characters</h3>
      <ul>
        {characters.map((character:FilmsType) => (
          <li key={character.id}>
            <Link to={`/character/${character.id}`}>{character.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FilmDetail;