import axios from 'axios';
import type { AxiosResponse } from 'axios';
import type { Album } from '@/stores/album';

export const getAlbumsByUserId = async (id: number): Promise<Album[]> => {
  const response: AxiosResponse<Album[]> = await axios({
    method: 'get',
    url: `http://jsonplaceholder.typicode.com/albums?userId=${id}`,
  });

  return response.data;
};

export const getAlbumById = async (id: number): Promise<Album> => {
  const response: AxiosResponse<Album> = await axios({
    method: 'get',
    url: `http://jsonplaceholder.typicode.com/albums?id=${id}`,
  });

  return response.data;
};
