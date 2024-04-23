<script setup lang="ts">
import Page from "../../core/ui/page/index.vue";
import { NButton, NIcon } from "naive-ui";
import { PersonAdd28Filled } from "@vicons/fluent";
</script>
<template>
  <Page title="Контрагенти">
    <template #header-extra><router-link to="/add" #="{ href, navigate }" custom><n-button :href="href" @click="navigate"
          secondary type="primary">
          <template #icon>
            <n-icon>
              <PersonAdd28Filled />
            </n-icon>
          </template>
          Створити нового</n-button></router-link></template>
  </Page>
</template>
