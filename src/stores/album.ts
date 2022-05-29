import { getAlbumById, getAlbumsByUserId } from '@/api/album';
import { defineStore } from 'pinia';

export interface Album {
  userId: number;
  id: number;
  title: string;
}

export const useAlbumStore = defineStore({
  id: 'album',
  state: () => ({
    albums: [] as Album[],
  }),

  actions: {
    async fetchAlbums(id: number): Promise<Album[]> {
      this.albums = await getAlbumsByUserId(id);
      return this.albums;
    },

    async fetchAlbumById(id: number): Promise<Album> {
      return await getAlbumById(id);
    },

    getAlbums(): Album[] {
      return this.albums;
    },

    getAlbumById(id: number): Album | undefined {
      return this.albums.find((item) => item.id === id);
    },
  },
});
