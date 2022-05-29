<script setup lang="ts">
import { reactive, watchEffect } from 'vue';
import { useRouter, RouterLink } from 'vue-router';
import IconStarFill from './icons/IconStarFill.vue';
import IconStarOutline from './icons/IconStarOutline.vue';

const state = reactive({
  activeTab: '',
});

const router = useRouter();

const handleTabClick = (tab: string) => {
  state.activeTab = tab;
};

const getTabClass = (tab: string) => {
  return tab === state.activeTab ? 'bg-white' : 'bg-nikablue-50';
};

watchEffect(() => {
  state.activeTab = router.currentRoute.value.name?.toString() || 'catalog';
});
</script>

<template>
  <nav class="flex flex-row w-full">
    <RouterLink
      to="/"
      class="w-1/2 p-[13px] text-center sm:rounded-t-lg sm:text-lg"
      @click="handleTabClick('catalog')"
      :class="getTabClass('catalog')"
      >Каталог</RouterLink
    >

    <RouterLink
      class="flex flex-row justify-center items-center w-1/2 p-[13px] sm:rounded-t-lg sm:text-lg"
      to="/favorite"
      @click="handleTabClick('favorite')"
      :class="getTabClass('favorite')"
    >
      <IconStarOutline
        v-if="state.activeTab !== 'favorite'"
        class="w-[18px] h-[18px] text-zinc-800"
      />
      <IconStarFill
        v-if="state.activeTab === 'favorite'"
        class="w-[18px] h-[18px] text-nikablue-700"
      />
      <div class="px-2">Избранное</div>
    </RouterLink>
  </nav>
</template>
