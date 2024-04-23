<script setup lang="ts">
import { NCard } from "naive-ui";

type Props = {
  title: string;
};

const props = defineProps<Props>();
</script>
<template>
  <n-card
    size="huge"
    embedded
    :title="props.title"
    :segmented="{
      content: true,
    }"
  >
    <template #header-extra>
      <slot name="header-extra" />
    </template>
    <slot />
    <template #action>
      <slot name="action" />
    </template>
  </n-card>
  <slot name="action" />
</template>
