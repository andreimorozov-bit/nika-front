<script setup lang="ts">
import { computed, type CSSProperties } from 'vue';

const props = defineProps({
  color: {
    type: String,
    default: '#f5f5f5',
  },
  size: {
    type: [String, Number],
    default: 1,
  },
});

const getDividerStyle = computed(() => {
  return {
    '--divider-color': props.color,
    '--divider-height': `${props.size}px`,
  } as Partial<CSSProperties>;
});
</script>

<template>
  <div class="divider" :style="getDividerStyle"></div>
</template>

<style scoped>
.divider {
  width: 100%;
  height: var(--divider-height);
  background-color: var(--divider-color);
}
</style>
