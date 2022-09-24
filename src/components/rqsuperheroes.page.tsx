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
  refetch: () => void;
}

const fetchSuperHeroes = () => {
  return axios.get('http://localhost:4000/superheroes');
};

const RQSuperHeroesPage = () => {
  // useQuery(1st arg, 2nd arg)
  // 1st argument - unique query key
  // 2nd argument - accepts a function that returns a promise, ex. get request to json server.
  const { isLoading, data, isError, error, isFetching, refetch }: Results =
    useQuery('super-heroes', fetchSuperHeroes, {
      staleTime: 0,
      refetchOnMount: true, //refetches on page load
      refetchOnWindowFocus: true, //refetches on window focus
      refetchInterval: 2000, //refetches every 2 seconds
      refetchIntervalInBackground: true, //refetches even when browser isn't in focus
      enabled: false, //disables automatic fetching of data
    });

  if (isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <div>
      <h2>React-Query Super Heroes</h2>
      {/* refetch fetches data */}
      <button onClick={refetch}>Fetch Heroes</button>
      {data?.data.map((hero: Hero) => (
        <div key={hero.name}>{hero.name}</div>
      ))}
    </div>
  );
};

export default RQSuperHeroesPage;
