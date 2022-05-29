<script setup lang="ts">
import { usePhotoStore, type Photo } from '@/stores/photo';
import { computed, onBeforeMount, reactive } from 'vue';
import PhotoFullscreen from './PhotoFullscreen.vue';
import IconStarFill from './icons/IconStarFill.vue';

const props = defineProps({
  photo: {
    type: Object as () => Photo,
    required: true,
  },
});

const state = reactive({
  isFavorite: false,
  showFull: false,
});

const photoStore = usePhotoStore();

const checkFavorite = () => {
  state.isFavorite = photoStore.checkFavorite(props.photo);
};

const handleIconClick = () => {
  state.isFavorite = !state.isFavorite;
  photoStore.toggleFavorite(props.photo);
};

const handlePhotoClick = () => {
  state.showFull = true;
};

const handleClose = () => {
  state.showFull = false;
};

const getIconClass = computed(() => {
  return state.isFavorite ? 'text-nikayellow-500' : 'text-zinc-300';
});

onBeforeMount(() => {
  checkFavorite();
});
</script>

<template>
  <div class="relative">
    <div
      @click="handlePhotoClick"
      class="w-[150px] h-[150px] rounded-[5px] cursor-pointer overflow-hidden hover:scale-105 duration-200"
    >
      <img :title="photo.title" :src="photo.thumbnailUrl" />
    </div>
    <div
      class="absolute flex flex-row justify-center items-center top-[8px] right-[8px] w-[32px] h-[32px] bg-white shadow-md rounded-full cursor-pointer hover:scale-125 transition-transform duration-300 z-10"
      :class="getIconClass"
      @click="handleIconClick"
    >
      <IconStarFill class="w-[18px] h-[18px]" />
    </div>
    <div v-if="state.showFull">
      <PhotoFullscreen @close="handleClose" :photo="photo" />
    </div>
  </div>
</template>
