<script setup lang="ts">
import { reactive } from 'vue';
import BaseButtonPlus from './BaseButtonPlus.vue';
import BaseButtonMinus from './BaseButtonMinus.vue';
import type { Album } from '@/stores/album';
import PhotoList from './PhotoList.vue';

const props = defineProps({
  album: {
    type: Object as () => Album,
    required: true,
  },
});

const state = reactive({
  isOpen: false,
});

const handleUserClick = () => {
  state.isOpen = !state.isOpen;
};
</script>
<template>
  <div class="flex flex-col">
    <div
      class="flex flex-row pl-12 sm:pl-[130px] sm:pr-[72px] py-5 sm:pt-[23px] sm:pb-[30px] items-start bg-white hover:bg-nikablue-100 cursor-pointer"
      @click="handleUserClick"
    >
      <div class="">
        <BaseButtonPlus v-if="!state.isOpen" /><BaseButtonMinus
          v-if="state.isOpen"
        />
      </div>
      <div class="px-2 text-base sm:text-lg">
        {{ album?.title }}
      </div>
    </div>
    <div v-if="state.isOpen" class=""><PhotoList :albumId="album.id" /></div>
  </div>
</template>
