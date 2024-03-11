import React, { FC } from 'react';
import { FilmsType } from '../types';
import { Link } from 'react-router-dom';
import { CardContainer, H1, H4 } from '../styles/global';
interface AllFilmsProps {
	film: FilmsType;
}

const AllFilms:FC<AllFilmsProps> = ({ film }) => {
	return (
		<CardContainer>
			<Link to={`/films/${film.id}`} >
				<H1>{film?.title}</H1>
				<div><H4>Release Date: </H4> {film?.releaseDate}</div>	
				<div><H4>Director: </H4>{film.director}</div>
				{ /*<div><H4>Producer: </H4> {film.producers.join(", ")}</div> */}
			</Link>
		</CardContainer>
		)
	}
	
export default AllFilms;