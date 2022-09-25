import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

const fetchSuperHeroes = () => {
  return axios.get('http://localhost:4000/superheroes');
};

const fetchFriends = () => {
  return axios.get('http://localhost:4000/friends');
};

const ParallelQueriesPage = () => {
  // Invoke useQuery multiple times for parallel queries on 1 page
  const { data: superHeroes } = useQuery('super-heroes', fetchSuperHeroes);
  const { data: friends } = useQuery('friends', fetchFriends);

  return <div>ParallelQueries</div>;
};

export default ParallelQueriesPage;
