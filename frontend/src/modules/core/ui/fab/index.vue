<script setup lang="ts">
import { NButton, NIcon } from "naive-ui";
</script>
<template>
  <n-button data-fixed v-bind="$attrs">
    <slot />
    <template #icon>
      <n-icon>
        <slot name="icon" />
      </n-icon>
    </template>
  </n-button>
</template>
<style>
[data-fixed] {
  position: fixed;
  right: 16px;
  bottom: 16px;
}
</style>
