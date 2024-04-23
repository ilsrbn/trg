<script setup lang="ts">
import Page from "../../core/ui/page/index.vue";
import Fab from "../../core/ui/fab/index.vue";

import ReportDetails from "../ui/form/report-details.vue";
import KvedsForm from "../ui/form/kveds-form.vue";
import type { ModelType } from "../utils/types";
import { MEDIA_GRID_COLS } from "../../core/utils/constants";

import { Checkmark28Filled } from "@vicons/fluent";
import { NGrid, NGridItem, useMessage, NButton, NIcon } from "naive-ui";
import { ref } from "vue";

const message = useMessage();
const model = ref<ModelType>({
  firstName: "",
  fathersName: "",
  lastName: "",
  ptn: "",
  city: "",
  street: "",
  house: "",
  room: "",
  accountNumber: "",
  phone: "",
});

const onUpdate = (value: ModelType) => {
  model.value = value;
  message.success("Дані оновлено");
};
</script>
<template>
  <Page title="Мої деталі">
    <NGrid :cols="MEDIA_GRID_COLS" :y-gap="16" :x-gap="16">
      <NGridItem span="1">
        <ReportDetails :first-name="model.firstName" :fathers-name="model.fathersName" :last-name="model.lastName"
          :phone="model.phone" :ptn="model.ptn" :account-number="model.accountNumber" :city="model.city"
          :street="model.street" :house="model.house" :room="model.room" @update="onUpdate">
          <template #submit="{ click }">
            <Fab @click="click" round type="primary">
              <template #icon>
                <NIcon>
                  <Checkmark28Filled />
                </NIcon>
              </template>
              Зберегти
            </Fab>
          </template>
        </ReportDetails>
      </NGridItem>
      <NGridItem span="1">
        <KvedsForm />
      </NGridItem>
    </NGrid>
  </Page>
</template>
