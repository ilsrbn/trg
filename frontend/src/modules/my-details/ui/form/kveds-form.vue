<script setup lang="ts">
import { NSelect, NH4, NForm, NFormItem } from "naive-ui";
import { ref } from "vue";
import { kveds } from "../../../core/utils/kved";

console.log(kveds);

const value = ref(null);
</script>
<template>
  <n-form label-placement="left" label-width="auto">
    <n-h4>Інше</n-h4>
    <n-form-item label="Список КВЕД-ів">
      <n-select filterable :options="kveds" multiple v-model:value="value" />
    </n-form-item>
  </n-form>
</template>
