<script setup lang="ts">
import type { User } from '@/stores/user';
import { reactive } from 'vue';
import BaseButtonPlus from './BaseButtonPlus.vue';
import BaseButtonMinus from './BaseButtonMinus.vue';
import AlbumList from './AlbumList.vue';

const props = defineProps({
  user: {
    type: Object as () => User,
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
      class="flex flex-row px-2 sm:px-[72px] py-5 sm:pt-[23px] sm:pb-[30px] items-center bg-white hover:bg-nikablue-100 cursor-pointer"
      @click="handleUserClick"
    >
      <div class="">
        <BaseButtonPlus v-if="!state.isOpen" /><BaseButtonMinus
          v-if="state.isOpen"
        />
      </div>
      <div class="px-2 sm:px-[24px] font-medium text-lg sm:text-[1.35rem]">
        {{ user?.name }}
      </div>
    </div>
    <div v-if="state.isOpen" class="">
      <AlbumList :userId="user?.id" />
    </div>
  </div>
</template>
