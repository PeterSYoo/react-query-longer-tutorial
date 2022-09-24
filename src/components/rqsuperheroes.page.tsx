import React from 'react';
// import { useQuery } from 'react-query';
// import axios from 'axios';
import useSuperHeroesData from '../hooks/useSuperHeroesData'; //custom query hook

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

interface Data {
  data: any;
}

interface Error {
  error: object;
}

// const fetchSuperHeroes = () => {
//   return axios.get('http://localhost:4000/superheroes');
// };

const RQSuperHeroesPage = () => {
  const onSuccess = (data: Data) => {
    console.log('Perform side effect after data fetching', data);
  };

  const onError = (error: Error) => {
    console.log('Perform side effect after data fetching', error);
  };

  const { isLoading, data, isError, error, isFetching, refetch }: Results =
    useSuperHeroesData(onSuccess, onError); //useQuery hook returns a number of destructured values which we use to render the components jsx
  // useQuery(1st arg, 2nd arg) - used to fetch our data
  // 1st argument - unique query key
  // 2nd argument - accepts a function that returns a promise, ex. get request to json server.
  // 3rd argument - object that we can specifiy options/configurations to tweak its behavior
  // useQuery('super-heroes', fetchSuperHeroes, {
  //   // staleTime: 0,
  //   // refetchOnMount: true, //refetches on page load
  //   // refetchOnWindowFocus: true, //refetches on window focus
  //   // refetchInterval: 2000, //refetches every 2 seconds
  //   // refetchIntervalInBackground: true, //refetches even when browser isn't in focus
  //   // enabled: false, //disables automatic fetching of data
  //   onSuccess,
  //   onError,
  //   select: (data) => {
  //     //transform or select part of the data from the useQuery function
  //     const superHeroNames = data.data.map((hero: any) => hero.name);
  //     return superHeroNames;
  //   },
  // });

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
      {/* {data?.data.map((hero: Hero) => (
        <div key={hero.name}>{hero.name}</div>
      ))} */}
      {data.map((heroName: any) => (
        <div key={heroName}>{heroName}</div>
      ))}
    </div>
  );
};

export default RQSuperHeroesPage;
