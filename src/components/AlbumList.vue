<script setup lang="ts">
import { onMounted, reactive } from 'vue';
import BaseDividerX from './BaseDividerX.vue';
import { useAlbumStore, type Album } from '@/stores/album';
import AlbumItem from './AlbumItem.vue';

const props = defineProps({
  userId: {
    type: Number,
    required: true,
  },
});

const albumStore = useAlbumStore();

const state = reactive({
  albums: [] as Album[],
});

onMounted(async () => {
  state.albums = await albumStore.fetchAlbums(props.userId);
});
</script>
<template>
  <div class="flex flex-col w-full bg-white">
    <div v-for="(album, index) in state.albums" :key="album.id">
      <BaseDividerX />
      <AlbumItem :album="album" />
    </div>
  </div>
</template>
