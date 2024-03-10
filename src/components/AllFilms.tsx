import React, { FC } from 'react';
import { FilmsType } from '../types';
import { Link } from 'react-router-dom';

interface AllFilmsProps {
    film: FilmsType;
}

const AllFilms:FC<AllFilmsProps> = ({ film }) => {
  return (
    <div>
        <Link to={`/films/${film.id}`} >
            <h1>{film?.title}</h1>
            <p>Release Date: {film?.releaseDate}</p>
            <p>Director: {film.director}</p>
            <p>Producer: {film.producers[0]}</p>
       </Link>
    </div>
  )
}

export default AllFilms;