import type { User } from '@/stores/user';
import axios from 'axios';
import type { AxiosResponse } from 'axios';

export const getAllUsers = async (): Promise<User[]> => {
  const response: AxiosResponse<User[]> = await axios({
    method: 'get',
    url: 'http://jsonplaceholder.typicode.com/users',
  });

  return response.data;
};

export const getUserById = async (id: number): Promise<User> => {
  const response: AxiosResponse<User> = await axios({
    method: 'get',
    url: `http://jsonplaceholder.typicode.com/users?id=${id}`,
  });

  return response.data;
};
