import { FC } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_FILM } from '../graphql/queries';
import { FilmsType } from '../types';
import { CharacterList, DetailsContainer, H1, H2, H3, Text } from '../styles/global';

const FilmDetail: FC = () => {
  	const { id } = useParams<{ id: string }>();
  	const { loading, error, data } = useQuery(GET_FILM, { variables: { id } });
	
	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error.message}</p>;

  	console.log(data);

  	const { film } = data;
  	const characters = film?.characterConnection?.characters;

	return (
		
		<DetailsContainer>
			<H1 $detailsPage>{film.title}</H1>
			<Text $detailsPage>{film.openingCrawl}</Text>
			<H3 $detailsPage>Director: <span>{film.director}</span></H3>
			<H3 $detailsPage>Release Date:<span>{film.releaseDate}</span> </H3>
			<H3 $detailsPage>Characters</H3>
				<CharacterList>
					{characters.map((character:FilmsType) => (
						<li key={character.id}>
						<Link to={`/character/${character.id}`}>{character.name}</Link>
						</li>
					))}
				</CharacterList>
				
		</DetailsContainer>
		
	);
}

export default FilmDetail;