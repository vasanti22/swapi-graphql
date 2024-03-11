import { useQuery } from '@apollo/client';
import { FC, useState } from 'react'
import { GET_ALL_CHARACTERS } from '../graphql/queries';
import { useParams, Link } from 'react-router-dom';
import { People_edges } from '../types';
import { Section } from '../styles/global';
//import { FilmsType } from '../types';

const AllCharacters: FC = () => {
	const { id, after } = useParams<{id: string, after: string}>();  
	const { data, loading, error, fetchMore } = useQuery(GET_ALL_CHARACTERS, { variables: { id , after:null}});
	
	if(loading) return <div>Loading...</div>
	if(error) return <div>Erroe: {error.message}</div>
	
	// console.log(data);
	
	const { allPeople } = data;
	const people = allPeople?.edges;
	
	//console.log(people);
	
	return (
		<Section>
		ALL CHARACTERS
		
		<ul>{
			
			people?.map((people:People_edges) => (
				<li key={people?.node?.id}>
				<Link to={`/character/${people?.node?.id}`}>{people?.node?.name}</Link>
				</li>
				))
				
			}</ul>
			
			<div>
			{
				allPeople.pageInfo.hasNextPage && (
					
					<button onClick= {() => {
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
					}}> Load More</button>
					)
				}
			</div>
				
		</Section>
	)
}
			
export default AllCharacters;