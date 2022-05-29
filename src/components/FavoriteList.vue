<script setup lang="ts">
import { usePhotoStore, type Photo } from '@/stores/photo';
import { onMounted, reactive } from 'vue';
import FavoriteItem from './FavoriteItem.vue';
import FavoriteItemEmpty from './FavoriteItemEmpty.vue';

const state = reactive({
  photos: [] as Photo[],
});

const photoStore = usePhotoStore();

onMounted(() => {
  state.photos = photoStore.getFavoritePhotos();
});
</script>

<template>
  <div
    class="flex flex-col flex-auto w-full justify-start items-center py-4 sm:py-[64px] px-2"
  >
    <div
      v-if="state.photos.length <= 0"
      class="flex flex-col flex-grow min-h-full h-full justify-center"
    >
      <FavoriteItemEmpty />
    </div>
    <div v-if="state.photos.length > 0" class="grid grid-cols-2 sm:grid-cols-3">
      <div v-for="photo in state.photos" :key="photo.id">
        <div class="flex flex-row px-2 py-4 sm:p-[21px]">
          <FavoriteItem :photo="photo" />
        </div>
      </div>
    </div>
  </div>
</template>
