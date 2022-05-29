<script setup lang="ts">
import { onMounted } from 'vue';
import { RouterView } from 'vue-router';
import { usePhotoStore } from './stores/photo';
import Navbar from './components/Navbar.vue';

const photoStore = usePhotoStore();

onMounted(() => {
  photoStore.setFavoritePhotos();
});
</script>
<template>
  <div
    class="flex flex-col w-full min-h-screen font-roboto bg-white sm:bg-nikablue-200"
  >
    <div
      class="flex flex-col w-full min-h-screen sm:min-h-full max-w-[940px] mx-auto sm:my-6 sm:shadow-lg sm:rounded-b-lg"
    >
      <div class="">
        <Navbar />
      </div>
      <div class="bg-white h-full pt-4 sm:rounded-b-lg overflow-hidden">
        <RouterView />
      </div>
    </div>
  </div>
</template>
