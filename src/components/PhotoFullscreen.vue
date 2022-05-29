<script setup lang="ts">
import type { Photo } from '@/stores/photo';
import IconCloseLarge from './icons/IconCloseLarge.vue';

const props = defineProps({
  photo: {
    type: Object as () => Photo,
    required: true,
  },
});

const emit = defineEmits(['close']);

const handleCloseClick = () => {
  emit('close');
};
</script>

<template>
  <div class="">
    <div
      class="fixed top-0 left-0 w-full h-full flex flex-row justify-center items-center bg-zinc-900 text-white bg-opacity-50 z-[5000]"
    >
      <div
        class="fixed top-[8px] right-[8px] cursor-pointer"
        @click="handleCloseClick"
      >
        <IconCloseLarge />
      </div>

      <div class="w-[600px] h-[600px] rounded-[5px] overflow-hidden">
        <img :src="photo.url" />
      </div>
    </div>
  </div>
</template>
