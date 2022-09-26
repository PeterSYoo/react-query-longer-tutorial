import { useQuery, useMutation, useQueryClient } from 'react-query';
import { request } from '../utils/axios-utils';

const fetchSuperHeroes = () => {
  // return axios.get('http://localhost:4000/superheroes');
  return request({ url: '/superheroes' });
};

const addSuperHero = (hero: any) => {
  // return axios.post('http://localhost:4000/superheroes', hero);
  return request({ url: '/superheroes', method: 'post', data: hero });
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
  const queryClient = useQueryClient();
  return useMutation(addSuperHero, {
    // onSuccess: (data: any) => {
    //   // queryClient.invalidateQueries('super-heroes');
    //   queryClient.setQueryData('super-heroes', (oldQueryData) => {
    //     return {
    //       // @ts-ignore
    //       ...oldQueryData,
    //       // @ts-ignore
    //       data: [...oldQueryData.data, data.data],
    //     };
    //   });
    // },
    onMutate: async (newHero: any) => {
      await queryClient.cancelQueries('super-heroes');
      const previousHeroData = queryClient.getQueryData('super-heroes');
      queryClient.setQueryData('super-heroes', (oldQueryData) => {
        return {
          // @ts-ignore
          ...oldQueryData,
          data: [
            // @ts-ignore
            ...oldQueryData.data,
            // @ts-ignore
            { id: oldQueryData?.data?.length + 1, ...newHero },
          ],
        };
      });
      return {
        previousHeroData,
      };
    },
    onError: (_error, _hero, context: any) => {
      queryClient.setQueryData('super-heroes', context.previousHeroData);
    },
    onSettled: () => {
      queryClient.invalidateQueries('super-heroes');
    },
  });
};
