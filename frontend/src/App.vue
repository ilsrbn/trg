<script lang="ts" setup>
import {
  NConfigProvider,
  NMessageProvider,
  darkTheme,
  NLayout,
  NLayoutFooter,
  NLayoutHeader,
  NButton,
  NA,
  ukUA,
  dateUkUA,
} from "naive-ui";
import { themeOverrides } from "./modules/core/ui/config";
import Sidebar from "./modules/core/ui/sidebar/index.vue";
</script>


<template>
  <n-config-provider :theme="darkTheme" :theme-overrides="themeOverrides" :locale="ukUA" :date-locale="dateUkUA">
    <n-message-provider>
      <div style="height: 100svh; position: relative">
        <n-layout position="absolute">
          <n-layout has-sider position="absolute" style="top: 0; bottom: 0">
            <Sidebar />
            <n-layout embedded content-style="padding: 24px;">
              <router-view />
            </n-layout>
          </n-layout>
        </n-layout>
      </div>
    </n-message-provider>
  </n-config-provider>
</template>

<style scoped>
.n-layout-header {
  padding: 24px;
}

.n-layout-footer {
  padding: 24px;
}
</style>
