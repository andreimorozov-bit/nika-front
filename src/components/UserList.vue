<script setup lang="ts">
import { useUserStore, type User } from '@/stores/user';
import { onMounted, reactive } from 'vue';
import UserItem from './UserItem.vue';
import BaseDividerX from './BaseDividerX.vue';

const userStore = useUserStore();

const state = reactive({
  users: [] as User[],
});

onMounted(async () => {
  await userStore.fetchUsers();
  state.users = userStore.getUsers();
});
</script>
<template>
  <div class="flex flex-col w-full bg-white">
    <div v-for="(user, index) in state.users" :key="user.id">
      <BaseDividerX v-if="index !== 0" />
      <UserItem :user="user" />
    </div>
  </div>
</template>
