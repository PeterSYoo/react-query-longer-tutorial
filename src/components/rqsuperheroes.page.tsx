import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

interface Hero {
  name: string;
}

const fetchSuperHeroes = () => {
  return axios.get('http://localhost:4000/superheroes');
};

const RQSuperHeroesPage = () => {
  // useQuery(1st arg, 2nd arg)
  // 1st argument - unique query key
  // 2nd argument - accepts a function that returns a promise, ex. get request to json server.
  const { isLoading, data, isError } = useQuery(
    'super-heroes',
    fetchSuperHeroes
  );

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>Error...</h2>;
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
