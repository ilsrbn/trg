<script setup lang="ts">
import { NCollapse, NCollapseItem } from "naive-ui";
import { ref } from "vue";
import Page from "../../core/ui/page/index.vue";
import Fab from "../../core/ui/fab/index.vue";
import { ModelType } from "../../my-details/utils/types";
import AddReportForm from "../ui/add-report/form.vue";
import Preview from "../ui/preview/index.vue";
import { Add24Filled } from "@vicons/fluent";

const executor = ref<ModelType>({
  firstName: "Ілля",
  fathersName: "Олексійович",
  lastName: "Сербін",
  ptn: "1234567890",
  city: "Одеса",
  street: "Ніжинська",
  house: "1",
  room: "15",
  accountNumber: "123456789123456789123456789",
  phone: "066-736-37-44",
});

const customer = ref<ModelType>({
  firstName: "Ілля",
  fathersName: "Олексійович",
  lastName: "Сербін",
  ptn: "1234567890",
  city: "Одеса",
  street: "Ніжинська",
  house: "1",
  room: "15",
  accountNumber: "123456789123456789123456789",
  phone: "066-736-37-44",
});

const date = ref(Date.now());

const transactions = ref([
  {
    name: "Комп'ютерне програмування",
    amount: 1,
    sum: 50000,
  },

  {
    name: "Додаткове комп’ютерне програмування",
    amount: 1,
    sum: 20000,
  },
]);
</script>
<template>
  <Page title="Новий Акт Виконаних Робіт">
    <AddReportForm />
    <n-collapse>
      <n-collapse-item title="Попередній перегляд">
        <Preview
          :executor="executor"
          :customer="customer"
          :date="date"
          :transactions="transactions"
        />
      </n-collapse-item>
    </n-collapse>
  </Page>
  <Fab size="large" type="primary" round
    >Створити Акт<template #icon>
      <Add24Filled /> </template
  ></Fab>
</template>
