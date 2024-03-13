import { FC } from 'react'
import {  Link } from 'react-router-dom';
import { People_edges } from '../types';
import { CharactersContainer, CharactersList, Container, Button } from '../styles/global';
import Spinner from '../styles/Spinner';
import useAllCharacters from '../graphql/hooks/useAllCharacters';

const AllCharacters: FC = () => {
	const { data, loading, error, fetchMore } = useAllCharacters();
	
	if(loading) return <Spinner/>
	if(error) return <div>Error: {error.message}</div>
	
	// console.log(data);
	
	const { allPeople } = data;
	const people = allPeople?.edges;
	
	//console.log(people);
	
	return (
		<Container>
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