import { FC } from 'react'
import useAllFilms from '../graphql/hooks/useAllFilms';
import AllFilms from '../components/AllFilms';
import { FilmsType } from '../types';

const Home:FC = () => {
    const { data, loading, error } = useAllFilms();
    if(loading) return <div>Loading...</div>
    if(error) return <div>Error: {error.message}</div>
   // console.log(data);
    const { allFilms } = data;
  return (
    <div>
        {
          allFilms?.films?.map( (film:FilmsType) => (
              <AllFilms key={film.id} film={film} />
              
          ))
        }

    </div>
  )
}

export default Home