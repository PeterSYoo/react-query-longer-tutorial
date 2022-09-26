import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

interface Email {}

const fetchUserByEmail = (email: any) => {
  return axios.get(`http://localhost:4000/users/${email}`);
};

const fetchCoursesByChannelId = (channelId: any) => {
  return axios.get(`http://localhost:4000/channels/${channelId}`);
};

const DependentQueriesPage = ({ email }: any) => {
  const { data: user } = useQuery(['user', email], () =>
    fetchUserByEmail(email)
  );
  const channelId = user?.data.channelId;

  useQuery(['courses', channelId], () => fetchCoursesByChannelId(channelId), {
    enabled: !!channelId,
  });

  return <div>DependentQueriesPage</div>;
};

export default DependentQueriesPage;
