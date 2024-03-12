import { FC } from 'react'
import useAllFilms from '../graphql/hooks/useAllFilms';
import AllFilms from '../components/AllFilms';
import { FilmsType } from '../types';
import { Container } from '../styles/global';
import Spinner from '../styles/Spinner';

const Home:FC = () => {
	const { data, loading, error } = useAllFilms();
	if(loading) return <Spinner/>
	if(error) return <div>Error: {error.message}</div>
	console.log(data);
	const { allFilms } = data;
	return (
		<Container>
			{
				allFilms?.films?.map( (film:FilmsType) => (
					<AllFilms key={film.id} film={film} />
				))
			}
		</Container>
	)
}

export default Home