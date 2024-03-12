import { useQuery } from '@apollo/client';
import { FC } from 'react'
import { GET_ALL_CHARACTERS } from '../graphql/queries';
import { useParams, Link } from 'react-router-dom';
import { People_edges } from '../types';
import { CharactersContainer, CharactersList, H1, Container, Button } from '../styles/global';
import Spinner from '../styles/Spinner';

const AllCharacters: FC = () => {
	const { id, after } = useParams<{id: string, after: string}>();  
	const { data, loading, error, fetchMore } = useQuery(GET_ALL_CHARACTERS, { variables: { id , after:null}});
	
	if(loading) return <Spinner/>
	if(error) return <div>Erroe: {error.message}</div>
	
	// console.log(data);
	
	const { allPeople } = data;
	const people = allPeople?.edges;
	
	//console.log(people);
	
	return (
		<Container>
		
			<H1>All Characters</H1>

			<CharactersContainer>
				
				{
				
					people?.map((people:People_edges) => (
						<CharactersList key={people?.node?.id}>
							<Link to={`/character/${people?.node?.id}`}>{people?.node?.name}</Link>
						</CharactersList>
						))
				
				}	
				
			</CharactersContainer>
			
			<div>
				{
					allPeople.pageInfo.hasNextPage && (
						
						<Button onClick= {() => {
							const { endCursor }	= allPeople.pageInfo;
							console.log(endCursor);
							fetchMore({
								variables: {
									after: endCursor
								},
								updateQuery: (prev, { fetchMoreResult }) => {
									if(!fetchMoreResult) return prev;
									return {
										allPeople : {
											...prev.allPeople,
											...fetchMoreResult.allPeople,  
											edges: [
												...prev.allPeople.edges,
												...fetchMoreResult.allPeople.edges
												
											],
										}
									}
								}  
							})
						}}> Load More</Button>
						)
					}
			</div>
				
		</Container>
	)
}
			
export default AllCharacters;