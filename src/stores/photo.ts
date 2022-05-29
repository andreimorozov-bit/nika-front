import { getPhotoById, getPhotosByAlbumId } from '@/api/photo';
import { defineStore } from 'pinia';

export interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export const usePhotoStore = defineStore({
  id: 'photo',
  state: () => ({
    photos: [] as Photo[],
    favoritePhotos: [] as Photo[],
    favoriteIds: [] as number[],
  }),

  actions: {
    async fetchPhotos(id: number): Promise<Photo[]> {
      this.photos = await getPhotosByAlbumId(id);
      return this.photos;
    },

    async fetchPhotoById(id: number): Promise<Photo> {
      return await getPhotoById(id);
    },

    getPhotos(): Photo[] {
      return this.photos;
    },

    getPhotoById(id: number): Photo | undefined {
      return this.photos.find((item) => item.id === id);
    },

    checkFavorite(photo: Photo) {
      const index = this.favoritePhotos.findIndex(
        (item) => item.id === photo.id
      );
      return index >= 0 ? true : false;
    },

    toggleFavorite(photo: Photo) {
      const index = this.favoritePhotos.findIndex(
        (item) => item.id === photo.id
      );
      if (index >= 0) {
        this.removeFavoritePhoto(photo.id);
      } else {
        this.addFavoritePhoto(photo);
      }
    },

    setFavoritePhotos() {
      const foundPhotos = localStorage.getItem('favoritePhotos');
      if (foundPhotos) {
        this.favoritePhotos = JSON.parse(foundPhotos);
      }
    },

    addFavoritePhoto(photo: Photo) {
      this.favoritePhotos.push(photo);
      localStorage.setItem(
        'favoritePhotos',
        JSON.stringify(this.favoritePhotos)
      );
    },

    removeFavoritePhoto(id: number) {
      const removeIndex = this.favoritePhotos.findIndex(
        (item) => item.id === id
      );
      if (removeIndex >= 0) {
        this.favoritePhotos.splice(removeIndex, 1);
        localStorage.setItem(
          'favoritePhotos',
          JSON.stringify(this.favoritePhotos)
        );
      }
    },

    getFavoritePhotos(): Photo[] {
      return this.favoritePhotos;
    },
  },
});
