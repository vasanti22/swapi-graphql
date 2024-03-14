import { useQuery } from '@apollo/client';
import { GET_ALL_FILMS } from '../queries';

const useAllFilms = () => {
  const {data, loading, error} = useQuery(GET_ALL_FILMS, {
    pollInterval: 500,
    fetchPolicy: 'cache-and-network',
  });
  return {data, loading, error};
}

export default useAllFilms;