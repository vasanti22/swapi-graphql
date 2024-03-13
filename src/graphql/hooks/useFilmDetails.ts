import { useQuery } from "@apollo/client"
import { useParams } from 'react-router-dom';
import { GET_FILM } from "../queries"

const useFilmDetails = () => {
    const { id } = useParams<{ id: string }>();
    const { data, loading, error } = useQuery(GET_FILM, { variables: { id } });
    return { data, loading, error }
}

export default useFilmDetails;