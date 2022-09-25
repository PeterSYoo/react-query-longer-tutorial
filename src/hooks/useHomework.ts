import { useQuery } from 'react-query';
import axios from 'axios';

const fetchHomework = () => {
  return axios.get('http://localhost:4000/superheroes');
};

const useHomework = (onSuccess: any, onError: any) => {
  return useQuery('homework', fetchHomework, {
    // staleTime: 0,
    // refetchOnMount: false, //refetches on page load
    // refetchOnWindowFocus: true, //refetches on window focus
    // refetchInterval: 2000, //refetches every 2 seconds
    // refetchIntervalInBackground: true, //refetches even when browser isn't in focus
    // enabled: true, //disables automatic fetching of data
    onSuccess,
    onError,
  });
};

export default useHomework;
