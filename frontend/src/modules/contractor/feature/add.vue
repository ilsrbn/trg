<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import Page from "../../core/ui/page/index.vue";
import ReportDetails from "../../my-details/ui/form/report-details.vue";
import type { ModelType } from "../../my-details/utils/types";
import { useMessage, NButton, NIcon } from "naive-ui";
import { Checkmark28Filled } from "@vicons/fluent";

const router = useRouter();
const message = useMessage();

const model = ref<ModelType>({
  firstName: "Ілля",
  fathersName: "Олексійович",
  lastName: "Сербін",
  ptn: "1234567890",
  city: "Одеса",
  street: "Ніжинська",
  house: "1",
  room: "15",
  accountNumber: "123456789123456789123456789",
  phone: "0667363744",
});

const onUpdate = (value: ModelType) => {
  console.log({ value });
  model.value = value;
  router.push({ name: "Contractors" });
  message.success("Дані оновлено");
};
</script>
<template>
  <Page title="Новий контрагент">
    <ReportDetails
      :first-name="model.firstName"
      :fathers-name="model.fathersName"
      :last-name="model.lastName"
      :phone="model.phone"
      :ptn="model.ptn"
      :account-number="model.accountNumber"
      :city="model.city"
      :street="model.street"
      :house="model.house"
      :room="model.room"
      @update="onUpdate"
    >
      <template #submit="{ click }">
        <NButton style="width: 100%" @click="click" ghost>
          <template #icon>
            <NIcon>
              <Checkmark28Filled />
            </NIcon>
          </template>
          Створити
        </NButton>
      </template>
    </ReportDetails>
  </Page>
</template>
