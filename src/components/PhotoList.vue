<script setup lang="ts">
import { usePhotoStore, type Photo } from '@/stores/photo';
import { onMounted, reactive } from 'vue';
import PhotoItem from './PhotoItem.vue';
import BaseDividerX from './BaseDividerX.vue';

const props = defineProps({
  albumId: {
    type: Number,
    required: true,
  },
});

const state = reactive({
  photos: [] as Photo[],
});

const photoStore = usePhotoStore();

onMounted(async () => {
  state.photos = await photoStore.fetchPhotos(props.albumId);
});
</script>

<template>
  <div class="flex flex-col w-full">
    <BaseDividerX />
    <div
      class="flex flex-row flex-wrap justify-evenly md:justify-start px-2 py-2 sm:px-12 md:pl-[170px] md:pr-[72px]"
    >
      <div
        v-for="photo in state.photos"
        :key="photo.id"
        class="mx-2 my-4 md:mx-[21px] md:my-[24px]"
      >
        <PhotoItem :photo="photo" />
      </div>
    </div>
  </div>
</template>
