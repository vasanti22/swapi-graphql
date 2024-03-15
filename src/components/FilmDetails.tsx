import { FC } from 'react';
import { Link } from 'react-router-dom';
import { FilmsType } from '../types';
import { Lists, DetailsContainer, H1, H3, Text } from '../styles/global';
import Spinner from '../styles/Spinner';
import useFilmDetails from '../graphql/hooks/useFilmDetails';
import { RiMovie2Fill } from "react-icons/ri";
import { IoIosPeople } from "react-icons/io";

const FilmDetail: FC = () => {
  const { data, loading, error } = useFilmDetails();

	if(loading) return <Spinner/>
	if (error) return <p>Error: {error.message}</p>;

  	//console.log(data);

  	const { film } = data;
  	const characters = film?.characterConnection?.characters;

	return (
		
		<DetailsContainer>
			<H1 $detailsPage><RiMovie2Fill size={60}/>{film.title}</H1>
			<Text $detailsPage>{film.openingCrawl}</Text>
			<H3 $detailsPage>Director <span>{film.director}</span></H3>
			<H3 $detailsPage>Producer <span>{film.producers.join(", ")}</span></H3>
			<H3 $detailsPage>Release Date <span>{film.releaseDate}</span> </H3>
			<H3 $detailsPage>Top Cast</H3>
				<Lists>
					{characters.map((character:FilmsType) => (
						<li key={character.id}>
						<IoIosPeople size={25} /><Link to={`/character/${character.id}`}>{character.name} </Link>
						</li>
					))}
				</Lists>
				
		</DetailsContainer>
	)
}

export default FilmDetail;