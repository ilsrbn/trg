<script setup lang="ts">
import {
  NForm,
  NFormItem,
  NInput,
  NButton,
  NRow,
  NCol,
  FormInst,
  FormItemRule,
  FormValidationError,
  FormRules,
  NH4,
} from "naive-ui";
import { ref, defineProps, defineEmits } from "vue";
import type { ModelType } from "../../utils/types";

interface Emits {
  (e: "update", value: ModelType): void;
}

const props = defineProps<ModelType>();
const emits = defineEmits<Emits>();

const formRef = ref<FormInst | null>(null);
const model = ref<ModelType>({
  firstName: props.firstName,
  fathersName: props.fathersName,
  lastName: props.lastName,
  ptn: props.ptn,
  city: props.city,
  street: props.street,
  house: props.house,
  room: props.room,
  accountNumber: props.accountNumber,
  phone: props.phone,
});

const rules: FormRules = {
  firstName: [
    {
      required: true,
      message: "Ім'я обов'язкеове",
      trigger: ["input", "blur"],
    },
  ],

  fathersName: [
    {
      required: true,
      message: "По-батькові обов'язкове",
      trigger: ["input", "blur"],
    },
  ],
  lastName: [
    {
      required: true,
      message: "Прізвище обов'язкове",
      trigger: ["input", "blur"],
    },
  ],

  city: [
    {
      required: true,
      message: "Місто обов'язкове",
      trigger: ["input", "blur"],
    },
  ],

  street: [
    {
      required: true,
      message: "Назва вулиці обов'язкова",
      trigger: ["input", "blur"],
    },
  ],
  house: [
    {
      required: true,
      validator(rule: FormItemRule, value: string) {
        if (!value) {
          return new Error("Номер будинку обов'язковий");
        } else if (!/^\d*$/.test(value)) {
          return new Error("Номер будинку має бути числом");
        } else if (Number(value) < 1) {
          return new Error("Номер будинку має бути більшим за 0");
        }
        return true;
      },
      trigger: ["input", "blur"],
    },
  ],

  room: [
    {
      required: true,
      validator(rule: FormItemRule, value: string) {
        if (!value) {
          return new Error("Номер квартири обов'язковий");
        } else if (!/^\d*$/.test(value)) {
          return new Error("Номер квартири має бути числом");
        } else if (Number(value) < 1) {
          return new Error("Номер квартири має бути більшим за 0");
        }
        return true;
      },
      trigger: ["input", "blur"],
    },
  ],
  ptn: [
    {
      required: true,
      validator(rule: FormItemRule, value: string) {
        if (!value) {
          return new Error(
            "Індивідуальний номер платника податків обов'язковий",
          );
        } else if (!/^\d*$/.test(value)) {
          return new Error(
            "Індивідуальний номер платника податків має бути числом",
          );
        } else if (Number(value) < 1) {
          return new Error(
            "Індивідуальний номер платника податків має бути більшим за 0",
          );
        } else if (value.toString().length !== 10) {
          return new Error(
            "Індивідуальний номер платника податків має бути 10 символів завдовшки",
          );
        }
        return true;
      },
      trigger: ["input", "blur"],
    },
  ],

  accountNumber: [
    {
      required: true,
      validator(rule: FormItemRule, value: string) {
        if (!value) {
          return new Error("Розрахунковий Рахунок обов'язковий");
        } else if (!/^\d*$/.test(value)) {
          return new Error("Розрахунковий рахунок має бути числом");
        } else if (Number(value) < 1) {
          return new Error("Розрахунковий рахунок має бути більшим за 0");
        } else if (value.toString().length !== 27) {
          return new Error(
            "Розрахунковий рахунок має бути 27 символів завдовшки",
          );
        }
        return true;
      },
      trigger: ["input", "blur"],
    },
  ],

  phone: [
    {
      required: true,
      message: "Телефон обов'язковий",
      trigger: ["input", "blur"],
    },
  ],
};

function handleValidateButtonClick(e: MouseEvent) {
  e.preventDefault();
  formRef.value?.validate((errors: Array<FormValidationError> | undefined) => {
    if (!errors) {
      emits("update", model.value);
    }
  });
}
</script>
<template>
  <n-form
    ref="formRef"
    :model="model"
    :rules="rules"
    label-placement="left"
    label-width="auto"
  >
    <n-h4>Персональні дані</n-h4>
    <n-form-item path="firstName" label="Ім'я">
      <n-input
        placeholder=""
        v-model:value="model.firstName"
        @keydown.enter.prevent
      />
    </n-form-item>

    <n-form-item path="fathersName" label="По-батькові">
      <n-input
        placeholder=""
        v-model:value="model.fathersName"
        @keydown.enter.prevent
      />
    </n-form-item>

    <n-form-item path="lastName" label="Прізвище">
      <n-input
        placeholder=""
        v-model:value="model.lastName"
        @keydown.enter.prevent
      />
    </n-form-item>

    <n-form-item path="phone" label="Номер телефона">
      <n-input
        placeholder=""
        v-model:value="model.phone"
        @keydown.enter.prevent
      >
        <template #prefix>+38</template>
      </n-input>
    </n-form-item>

    <n-h4>Адреса</n-h4>

    <n-form-item path="city" label="Місто">
      <n-input
        placeholder=""
        v-model:value="model.city"
        @keydown.enter.prevent
      />
    </n-form-item>

    <n-form-item path="street" label="Назва Вулиці">
      <n-input
        placeholder=""
        v-model:value="model.street"
        @keydown.enter.prevent
      />
    </n-form-item>

    <n-form-item path="house" label="Номер будинку">
      <n-input
        placeholder=""
        v-model:value="model.house"
        @keydown.enter.prevent
      />
    </n-form-item>

    <n-form-item path="room" label="Номер квартири">
      <n-input
        placeholder=""
        v-model:value="model.room"
        @keydown.enter.prevent
      />
    </n-form-item>
    <n-h4>Рахунки</n-h4>
    <n-form-item path="ptn" label="Індивідуальний номер платника податків">
      <n-input
        placeholder=""
        v-model:value="model.ptn"
        @keydown.enter.prevent
      />
    </n-form-item>

    <n-form-item path="accountNumber" label="Розрахунковий рахунок">
      <n-input
        placeholder=""
        v-model:value="model.accountNumber"
        @keydown.enter.prevent
      >
        <template #prefix>UA</template>
      </n-input>
    </n-form-item>

    <n-row :gutter="[0, 24]">
      <n-col :span="24">
        <slot name="submit" :click="handleValidateButtonClick">
          <div style="display: flex; justify-content: flex-end">
            <n-button round type="primary" @click="handleValidateButtonClick">
              Validate
            </n-button>
          </div>
        </slot>
      </n-col>
    </n-row>
  </n-form>
</template>
