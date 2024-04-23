<script setup lang="ts">
import { reactive, computed } from "vue";
import {
  NGrid,
  NSelect,
  NForm,
  NFormItem,
  NInput,
  NFormItemGi,
  NGridItem,
  NDatePicker,
  NDynamicInput,
} from "naive-ui";

const contractors = [
  {
    firstName: "Олена",
    fathersName: "Вікторівна",
    lastName: "Омельченко",
    id: 0,
  },
  {
    firstName: "Ілля",
    fathersName: "Олексійович",
    lastName: "Сербін",
    id: 1,
  },
  {
    firstName: "Олексій",
    fathersName: "Віталійович",
    lastName: "Цебро",
    id: 2,
  },
];

const makeFullName = ({
  firstName,
  fathersName,
  lastName,
}: {
  firstName: string;
  fathersName: string;
  lastName: string;
}) => {
  return `${lastName} ${firstName[0]}. ${fathersName[0]}.`;
};

const options = computed(() =>
  contractors.map((el) => ({ label: makeFullName(el), value: el.id })),
);

const kvedsString = `62.01  Комп'ютерне програмування
58.21  Видання комп'ютерних iгор
63.11  Оброблення даних, розмiщення iнформацiї на веб-вузлах i пов'язана з ними дiяльнiсть
62.03  Дiяльнiсть iз керування комп'ютерним устаткованням
63.12  Веб-портали
58.29  Видання iншого програмного забезпечення
63.99  Надання iнших iнформацiйних послуг, н.в.i.у.
62.02  Консультування з питань iнформатизацiї
62.09  Iнша дiяльнiсть у сферi iнформацiйних технологiй i комп'ютерних систем`;

const kvedsList = computed(
  // () => {
  //   return [];
  // },
  () =>
    kvedsString
      .split("\n")
      .map((el) => ({ label: el, value: el.split("  ")[0] })),
);

const form = reactive({
  executorId: null,
  customerId: null,
  date: null,
});
</script>
<template>
  <n-form label-placement="left" label-width="auto">
    <n-grid cols="1 900:2" :x-gap="16" :y-gap="16">
      <n-form-item-gi label="Виконавець">
        <n-select
          filterable
          :options="options"
          v-model:value="form.executorId"
        ></n-select>
      </n-form-item-gi>

      <n-form-item-gi label="Замовник">
        <n-select
          filterable
          :options="options"
          v-model:value="form.customerId"
        ></n-select>
      </n-form-item-gi>

      <n-form-item-gi label="Дата складання акту" span="1 900:2">
        <n-date-picker v-model:value="form.date" type="date"></n-date-picker>
      </n-form-item-gi>
      <n-form-item-gi span="1 900:2" label="Список грошових переказів">
        <n-dynamic-input>
          <template #create-button-default> Додати грошовий переказ </template>
          <template #default="{ index, value }">
            <div
              style="
                display: flex;
                align-items: center;
                max-width: 640px;
                gap: 16px;
              "
            >
              <n-form-item style="min-width: 340px">
                <n-select
                  filterable
                  :consistent-menu-width="false"
                  :options="kvedsList"
                  placeholder="Обрати КВЕД"
                />
              </n-form-item>
              <n-form-item>
                <n-input placeholder="Сума переказу">
                  <template #prefix>₴</template>
                </n-input>
              </n-form-item>
            </div>
          </template>
        </n-dynamic-input>
      </n-form-item-gi>
    </n-grid>
  </n-form>
</template>
