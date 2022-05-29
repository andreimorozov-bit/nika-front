<script setup lang="ts">
import type { Photo } from '@/stores/photo';
import PhotoItem from './PhotoItem.vue';

const props = defineProps({
  photo: {
    type: Object as () => Photo,
    required: true,
  },
});
</script>

<template>
  <div class="flex flex-col max-w-[150px]">
    <div class="mb-4">
      <PhotoItem :photo="photo" />
    </div>
    <div class="flex flex-row w-full text-zinc-500 text-sm">
      {{ photo.title }}
    </div>
  </div>
</template>
