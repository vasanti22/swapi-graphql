import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_ALL_CHARACTERS } from "../queries";

const useAllCharacters = () => {
    const { id } = useParams<{id: string}>();
    const { data, loading, error, fetchMore } = useQuery(GET_ALL_CHARACTERS, { 
        variables: { id },
        pollInterval: 500,
        fetchPolicy: 'cache-and-network',
    });
    return { data, loading, error, fetchMore}
}

export default useAllCharacters;