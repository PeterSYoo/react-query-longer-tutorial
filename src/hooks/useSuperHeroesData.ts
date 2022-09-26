import { useQuery, useMutation } from 'react-query';
import axios from 'axios';

const fetchSuperHeroes = () => {
  return axios.get('http://localhost:4000/superheroes');
};

const addSuperHero = (hero: any) => {
  return axios.post('http://localhost:4000/superheroes', hero);
};

export const useSuperHeroesData = (onSuccess: any, onError: any) => {
  return useQuery('super-heroes', fetchSuperHeroes, {
    // staleTime: 0,
    // refetchOnMount: true, //refetches on page load
    // refetchOnWindowFocus: true, //refetches on window focus
    // refetchInterval: 2000, //refetches every 2 seconds
    // refetchIntervalInBackground: true, //refetches even when browser isn't in focus
    // enabled: false,
    onSuccess,
    onError,
    // select: (data) => {
    //   //transform or select part of the data from the useQuery function
    //   const superHeroNames = data.data.map((hero: any) => hero.name);
    //   return superHeroNames;
    // },
  });
};

export const useAddSuperHeroData = () => {
  return useMutation(addSuperHero);
};
