import React from 'react';
import useHomework from '../hooks/useHomework';

interface Hero {
  name: string;
}

interface Data {
  data: any;
}

interface Error {
  error: object;
}

interface Results {
  isLoading: {};
  data: any;
  isError: {};
  error: any;
  isFetching: {};
  refetch: () => void;
}

const RQHomework = () => {
  const onSuccess = (data: Data) => {
    console.log('Perform side effect after data fetching', data);
  };

  const onError = (error: Error) => {
    console.log('Perform side effect after data fetching', error);
  };

  const { isLoading, isError, isFetching, error, data, refetch }: Results =
    useHomework(onSuccess, onError);

  if (isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <div>
      {/* refetch fetches data */}
      <button onClick={refetch}>Fetch Heroes</button>
      {/* {data?.data.map((hero: Hero) => (
        <div key={hero.name}>{hero.name}</div>
      ))} */}

      {data ? (
        <></>
      ) : (
        <>
          {data?.data.map((hero: any) => (
            <div key={hero.name}>{hero.name}</div>
          ))}
        </>
      )}
    </div>
  );
};

export default RQHomework;
