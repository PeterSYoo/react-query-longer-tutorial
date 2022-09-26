import React from 'react';
import { useQuery, useQueryClient } from 'react-query';
import axios from 'axios';

const fetchSuperHero = ({ queryKey }: any) => {
  const heroId = queryKey[1];
  return axios.get(`http://localhost:4000/superheroes/${heroId}`);
};

const useSuperHeroData = (heroId: any) => {
  const queryClient = useQueryClient();
  return useQuery(['super-hero', heroId], fetchSuperHero, {
    initialData: () => {
      const hero = queryClient
        .getQueryData('super-heroes')
        // @ts-ignore
        ?.data?.find((hero: any) => hero.id === parseInt(heroId));

      if (hero) {
        return {
          data: hero,
        };
      } else {
        return undefined;
      }
    },
  });
};

export default useSuperHeroData;
