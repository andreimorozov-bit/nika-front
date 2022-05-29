import axios from 'axios';
import type { AxiosResponse } from 'axios';
import type { Photo } from '@/stores/photo';

export const getPhotosByAlbumId = async (id: number): Promise<Photo[]> => {
  const response: AxiosResponse<Photo[]> = await axios({
    method: 'get',
    url: `http://jsonplaceholder.typicode.com/photos?albumId=${id}`,
  });

  return response.data;
};

export const getPhotoById = async (id: number): Promise<Photo> => {
  const response: AxiosResponse<Photo> = await axios({
    method: 'get',
    url: `http://jsonplaceholder.typicode.com/photos?id=${id}`,
  });

  return response.data;
};
