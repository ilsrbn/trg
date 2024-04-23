<script setup lang="ts">
import Page from "../../core/ui/page/index.vue";
import { NButton, NIcon } from "naive-ui";
import { ChannelAdd24Filled } from "@vicons/fluent";
</script>
<template>
  <Page title="Акти виконаних робіт">
    <template #header-extra><router-link :to="{ name: 'Add-Report' }" #="{ href, navigate }" custom><n-button :href="href"
          @click="navigate" secondary type="primary">
          <template #icon>
            <n-icon>
              <ChannelAdd24Filled />
            </n-icon>
          </template>
          Створити новий</n-button></router-link></template>
  </Page>
</template>
