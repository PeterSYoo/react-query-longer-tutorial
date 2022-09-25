import React from 'react';
import axios from 'axios';
import { useQueries } from 'react-query';

interface Hero {
  heroId: string;
}

interface HeroId {
  heroIds: number[];
}

const fetchSuperHero = (heroId: Hero) => {
  return axios.get(`http://localhost:4000/superheroes/${heroId}`);
};

const DynamicParallelPage = ({ heroIds }: HeroId) => {
  const queryResults = useQueries(
    heroIds.map((id: any) => {
      return {
        queryKey: ['super-hero', id],
        queryFn: () => fetchSuperHero(id),
      };
    })
  );

  console.log({ queryResults });

  return <div>DynamicParallel</div>;
};

export default DynamicParallelPage;
