import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

interface Hero {
  name: string;
}

interface Results {
  isLoading: {};
  data: any;
  isError: {};
  error: any;
  isFetching: {};
}

const fetchSuperHeroes = () => {
  return axios.get('http://localhost:4000/superheroes');
};

const RQSuperHeroesPage = () => {
  // useQuery(1st arg, 2nd arg)
  // 1st argument - unique query key
  // 2nd argument - accepts a function that returns a promise, ex. get request to json server.
  const { isLoading, data, isError, error, isFetching }: Results = useQuery(
    'super-heroes',
    fetchSuperHeroes,
    {
      staleTime: 0,
    }
  );

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <div>
      <h2>React-Query Super Heroes</h2>
      {data?.data.map((hero: Hero) => (
        <div key={hero.name}>{hero.name}</div>
      ))}
    </div>
  );
};

export default RQSuperHeroesPage;
