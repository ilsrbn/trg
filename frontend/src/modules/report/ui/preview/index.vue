<script setup lang="ts">
import { computed } from "vue";
import { ModelType } from "../../../my-details/utils/types";

type Transaction = {
  name: string;
  amount: number;
  sum: number;
};
type Props = {
  executor: ModelType;
  customer: ModelType;
  date: number;
  transactions: Transaction[];
};

const props = defineProps<Props>();

const maketFullName = (contractor: ModelType) =>
  `${contractor.lastName} ${contractor.firstName} ${contractor.fathersName}`;
const makeShortFullName = (contractor: ModelType) =>
  `${contractor.lastName} ${contractor.firstName && contractor.firstName[0]}. ${contractor.fathersName && contractor.fathersName[0]
  }.`;

const names = computed(() => ({
  executor: {
    full: maketFullName(props.executor),
    short: makeShortFullName(props.executor),
  },
  customer: {
    full: maketFullName(props.customer),
    short: makeShortFullName(props.customer),
  },
}));

const makeAddressLine = (contractor: ModelType) =>
  `м. ${contractor.city}, вул. ${contractor.street}, ${contractor.house}, кв. ${contractor.room}`;
const addresses = computed(() => ({
  executor: makeAddressLine(props.executor),
  customer: makeAddressLine(props.customer),
}));

const ptns = computed(() => ({
  executor: props.executor.ptn,
  customer: props.customer.ptn,
}));

const accountNumbers = computed(() => ({
  executor: props.executor.accountNumber,
  customer: props.customer.accountNumber,
}));

const phones = computed(() => ({
  executor: props.executor.phone,
  customer: props.customer.phone,
}));

const dates = computed(() => {
  const date = new Date(props.date);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");

  const short = `${day}/${month}`;
  const long = `${day}.${month}.${year} р.`;

  return { short, long };
});

const transactions = computed(() => {
  const amount = props.transactions.reduce(
    (accum, transaction) => accum + transaction.amount,
    0,
  );
  const sum = props.transactions.reduce(
    (accum, transaction) => accum + transaction.sum,
    0,
  );

  return { amount, sum };
});
</script>
<template>
  <div style="padding-top: 16px">
    <div style="text-align: center">
      <table cellspacing="0" cellpadding="0" style="
          padding-top: 16px;
          width: 489.5pt;
          margin-right: auto;
          margin-left: auto;
          border-collapse: collapse;
        ">
        <tr>
          <td colspan="7" style="
              width: 251.2pt;
              border-top-style: solid;
              border-top-width: 0.75pt;
              border-left-style: solid;
              border-left-width: 0.75pt;
              padding-right: 5.4pt;
              padding-left: 5.03pt;
              vertical-align: top;
            ">
            <p style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-align: center;
                font-size: 10pt;
              ">
              <strong>&#xa0;</strong>
            </p>
          </td>
          <td style="
              width: 1pt;
              border-top-style: solid;
              border-top-width: 0.75pt;
              padding-right: 5.4pt;
              padding-left: 5.4pt;
              vertical-align: top;
            ">
            <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
              <strong>&#xa0;</strong>
            </p>
          </td>
          <td colspan="5" style="
              width: 204.15pt;
              border-top-style: solid;
              border-top-width: 0.75pt;
              border-right-style: solid;
              border-right-width: 0.75pt;
              padding-right: 5.03pt;
              padding-left: 5.4pt;
              vertical-align: top;
            ">
            <p style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-align: center;
                font-size: 10pt;
              ">
              <strong>&#xa0;</strong>
            </p>
          </td>
        </tr>
        <tr>
          <td colspan="7" style="
              width: 251.2pt;
              border-left-style: solid;
              border-left-width: 0.75pt;
              padding-right: 5.4pt;
              padding-left: 5.03pt;
              vertical-align: top;
            ">
            <p style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-align: center;
                font-size: 10pt;
              ">
              <strong>ВИКОНАВЕЦЬ:</strong>
            </p>
          </td>
          <td style="
              width: 1pt;
              padding-right: 5.4pt;
              padding-left: 5.4pt;
              vertical-align: top;
            ">
            <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
              <strong>&#xa0;</strong>
            </p>
          </td>
          <td colspan="5" style="
              width: 204.15pt;
              border-right-style: solid;
              border-right-width: 0.75pt;
              padding-right: 5.03pt;
              padding-left: 5.4pt;
              vertical-align: top;
            ">
            <p style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-align: center;
                font-size: 10pt;
              ">
              <strong>ЗАМОВНИК:</strong>
            </p>
          </td>
        </tr>
        <tr>
          <td colspan="7" style="
              width: 251.2pt;
              border-left-style: solid;
              border-left-width: 0.75pt;
              padding-right: 5.4pt;
              padding-left: 5.03pt;
              vertical-align: top;
            ">
            <p style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-align: center;
                font-size: 10pt;
              ">
              ФОП “{{ names.executor.full }}”
            </p>
          </td>
          <td style="
              width: 1pt;
              padding-right: 5.4pt;
              padding-left: 5.4pt;
              vertical-align: top;
            ">
            <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
              &#xa0;
            </p>
          </td>
          <td colspan="5" style="
              width: 204.15pt;
              border-right-style: solid;
              border-right-width: 0.75pt;
              padding-right: 5.03pt;
              padding-left: 5.4pt;
              vertical-align: top;
            ">
            <p style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-align: center;
                font-size: 10pt;
              ">
              ФОП “{{ names.customer.full }}”
            </p>
          </td>
        </tr>
        <tr>
          <td colspan="7" style="
              width: 251.2pt;
              border-left-style: solid;
              border-left-width: 0.75pt;
              padding-right: 5.4pt;
              padding-left: 5.03pt;
              vertical-align: top;
            ">
            <p style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-align: center;
                font-size: 10pt;
              ">
              ІПН {{ ptns.executor }}
            </p>
          </td>
          <td style="
              width: 1pt;
              padding-right: 5.4pt;
              padding-left: 5.4pt;
              vertical-align: top;
            ">
            <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
              &#xa0;
            </p>
          </td>
          <td colspan="5" style="
              width: 204.15pt;
              border-right-style: solid;
              border-right-width: 0.75pt;
              padding-right: 5.03pt;
              padding-left: 5.4pt;
              vertical-align: top;
            ">
            <p style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-align: center;
                font-size: 10pt;
              ">
              ІПН {{ ptns.customer }}
            </p>
          </td>
        </tr>
        <tr>
          <td colspan="7" style="
              width: 251.2pt;
              border-left-style: solid;
              border-left-width: 0.75pt;
              padding-right: 5.4pt;
              padding-left: 5.03pt;
              vertical-align: top;
            ">
            <p style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-align: center;
                font-size: 10pt;
              ">
              Адреса: {{ addresses.executor }}
            </p>
          </td>
          <td style="
              width: 1pt;
              padding-right: 5.4pt;
              padding-left: 5.4pt;
              vertical-align: top;
            ">
            <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
              &#xa0;
            </p>
          </td>
          <td colspan="5" style="
              width: 204.15pt;
              border-right-style: solid;
              border-right-width: 0.75pt;
              padding-right: 5.03pt;
              padding-left: 5.4pt;
              vertical-align: top;
            ">
            <p style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-align: center;
                font-size: 10pt;
              ">
              Адреса: {{ addresses.customer }}
            </p>
          </td>
        </tr>
        <tr>
          <td colspan="7" style="
              width: 251.2pt;
              border-left-style: solid;
              border-left-width: 0.75pt;
              padding-right: 5.4pt;
              padding-left: 5.03pt;
              vertical-align: top;
            ">
            <p style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-align: center;
                font-size: 10pt;
              ">
              р/р UA{{ accountNumbers.executor }}
            </p>
            <p style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-align: center;
                font-size: 10pt;
              ">
              тел. {{ phones.executor }}
            </p>
          </td>
          <td style="
              width: 1pt;
              padding-right: 5.4pt;
              padding-left: 5.4pt;
              vertical-align: top;
            ">
            <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
              &#xa0;
            </p>
          </td>
          <td colspan="5" style="
              width: 204.15pt;
              border-right-style: solid;
              border-right-width: 0.75pt;
              padding-right: 5.03pt;
              padding-left: 5.4pt;
              vertical-align: top;
            ">
            <p style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-align: center;
                font-size: 10pt;
              ">
              р/р UA{{ accountNumbers.customer }}
            </p>
            <p style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-align: center;
                font-size: 10pt;
              ">
              тел. {{ phones.customer }}
            </p>
          </td>
        </tr>
        <tr>
          <td colspan="7" style="
              width: 251.2pt;
              border-left-style: solid;
              border-left-width: 0.75pt;
              padding-right: 5.4pt;
              padding-left: 5.03pt;
              vertical-align: top;
            ">
            <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
              &#xa0;
            </p>
          </td>
          <td style="
              width: 1pt;
              padding-right: 5.4pt;
              padding-left: 5.4pt;
              vertical-align: top;
            ">
            <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
              &#xa0;
            </p>
          </td>
          <td colspan="5" style="
              width: 204.15pt;
              border-right-style: solid;
              border-right-width: 0.75pt;
              padding-right: 5.03pt;
              padding-left: 5.4pt;
              vertical-align: top;
            ">
            <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
              &#xa0;
            </p>
          </td>
        </tr>
        <tr>
          <td rowspan="2" style="
              width: 3.15pt;
              border-left-style: solid;
              border-left-width: 0.75pt;
              padding-right: 5.4pt;
              padding-left: 5.03pt;
              vertical-align: top;
            ">
            <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
              &#xa0;
            </p>
          </td>
          <td colspan="11" style="
              width: 451.65pt;
              padding-right: 5.4pt;
              padding-left: 5.4pt;
              vertical-align: top;
            ">
            <p style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-align: center;
                font-size: 10pt;
              ">
              <strong>АКТ № {{ dates.short }}</strong>
            </p>
            <p style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-align: center;
                font-size: 10pt;
              ">
              <strong>прийому-передачі виконаних робіт (наданих послуг)</strong>
            </p>
          </td>
          <td rowspan="2" style="
              width: 1.55pt;
              border-right-style: solid;
              border-right-width: 0.75pt;
              padding-right: 5.03pt;
              padding-left: 5.4pt;
              vertical-align: top;
            ">
            <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
              &#xa0;
            </p>
          </td>
        </tr>
        <tr>
          <td colspan="11" style="
              width: 451.65pt;
              border-bottom-style: solid;
              border-bottom-width: 0.75pt;
              padding-right: 5.4pt;
              padding-left: 5.4pt;
              vertical-align: top;
            ">
            <p style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-indent: 15.85pt;
                text-align: justify;
                font-size: 10pt;
              ">
              Ми, що нижче підписалися, представник Виконавця і представник
              Замовника, уклали цей акт про те, що Виконавець виконав роботи з
              ком’ютерного програмування від {{ dates.long }}
            </p>
          </td>
        </tr>
        <tr style="height: 16.1pt">
          <td style="
              width: 3.15pt;
              border-right-style: solid;
              border-right-width: 0.75pt;
              border-left-style: solid;
              border-left-width: 0.75pt;
              padding-right: 5.03pt;
              padding-left: 5.03pt;
              vertical-align: top;
            ">
            <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
              &#xa0;
            </p>
          </td>
          <td style="
              width: 9.55pt;
              border-style: solid;
              border-width: 0.75pt;
              padding-right: 5.03pt;
              padding-left: 5.03pt;
              vertical-align: middle;
            ">
            <p style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-align: center;
                font-size: 10pt;
              ">
              №
            </p>
          </td>
          <td colspan="3" style="
              width: 131.85pt;
              border-style: solid;
              border-width: 0.75pt;
              padding-right: 5.03pt;
              padding-left: 5.03pt;
              vertical-align: middle;
            ">
            <p style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-align: center;
                font-size: 10pt;
              ">
              Назва роботи (послуги)
            </p>
          </td>
          <td style="
              width: 35.35pt;
              border-style: solid;
              border-width: 0.75pt;
              padding-right: 5.03pt;
              padding-left: 5.03pt;
              vertical-align: middle;
            ">
            <p style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-align: center;
                font-size: 10pt;
              ">
              Од. вим.
            </p>
          </td>
          <td colspan="4" style="
              width: 145.1pt;
              border-style: solid;
              border-width: 0.75pt;
              padding-right: 5.03pt;
              padding-left: 5.03pt;
              vertical-align: middle;
            ">
            <p style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-align: center;
                font-size: 10pt;
              ">
              Кіль-ть
            </p>
          </td>
          <td colspan="2" style="
              width: 86.6pt;
              border-style: solid;
              border-width: 0.75pt;
              padding-right: 5.03pt;
              padding-left: 5.03pt;
              vertical-align: middle;
            ">
            <p style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-align: center;
                font-size: 10pt;
              ">
              Сума
            </p>
          </td>
          <td style="
              width: 1.55pt;
              border-right-style: solid;
              border-right-width: 0.75pt;
              border-left-style: solid;
              border-left-width: 0.75pt;
              padding-right: 5.03pt;
              padding-left: 5.03pt;
              vertical-align: top;
            ">
            <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
              &#xa0;
            </p>
          </td>
        </tr>
        <tr style="height: 16.1pt" v-for="(transaction, i) in props.transactions" :key="i">
          <td style="
              width: 3.15pt;
              border-right-style: solid;
              border-right-width: 0.75pt;
              border-left-style: solid;
              border-left-width: 0.75pt;
              padding-right: 5.03pt;
              padding-left: 5.03pt;
              vertical-align: top;
            ">
            <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
              &#xa0;
            </p>
          </td>
          <td style="
              width: 9.55pt;
              border-style: solid;
              border-width: 0.75pt;
              padding-right: 5.03pt;
              padding-left: 5.03pt;
              vertical-align: middle;
            ">
            <p style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-align: center;
                font-size: 10pt;
              ">
              {{ i + 1 }}
            </p>
          </td>
          <td colspan="3" style="
              width: 131.85pt;
              border-style: solid;
              border-width: 0.75pt;
              padding-right: 5.03pt;
              padding-left: 5.03pt;
              vertical-align: middle;
            ">
            <p style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-align: center;
                font-size: 10pt;
              ">
              {{ transaction.name }}
            </p>
          </td>
          <td style="
              width: 35.35pt;
              border-style: solid;
              border-width: 0.75pt;
              padding-right: 5.03pt;
              padding-left: 5.03pt;
              vertical-align: middle;
            ">
            <p style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-align: center;
                font-size: 10pt;
              ">
              послуг
            </p>
          </td>
          <td colspan="4" style="
              width: 145.1pt;
              border-style: solid;
              border-width: 0.75pt;
              padding-right: 5.03pt;
              padding-left: 5.03pt;
              vertical-align: middle;
            ">
            <p style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-align: center;
                font-size: 10pt;
              ">
              {{ transaction.amount }}
            </p>
          </td>
          <td colspan="2" style="
              width: 86.6pt;
              border-style: solid;
              border-width: 0.75pt;
              padding-right: 5.03pt;
              padding-left: 5.03pt;
              vertical-align: middle;
            ">
            <p style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-align: center;
                font-size: 10pt;
              ">
              {{ transaction.sum }}
            </p>
          </td>
          <td style="
              width: 1.55pt;
              border-right-style: solid;
              border-right-width: 0.75pt;
              border-left-style: solid;
              border-left-width: 0.75pt;
              padding-right: 5.03pt;
              padding-left: 5.03pt;
              vertical-align: top;
            ">
            <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
              &#xa0;
            </p>
          </td>
        </tr>
        <tr>
          <td style="
              width: 3.15pt;
              border-right-style: solid;
              border-right-width: 0.75pt;
              border-left-style: solid;
              border-left-width: 0.75pt;
              padding-right: 5.03pt;
              padding-left: 5.03pt;
              vertical-align: top;
            ">
            <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
              &#xa0;
            </p>
          </td>
          <td colspan="5" style="
              width: 198.35pt;
              border-style: solid;
              border-width: 0.75pt;
              padding-right: 5.03pt;
              padding-left: 5.03pt;
              vertical-align: middle;
            ">
            <p style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-align: center;
                font-size: 10pt;
              ">
              Разом:
            </p>
          </td>
          <td colspan="4" style="
              width: 145.1pt;
              border-style: solid;
              border-width: 0.75pt;
              padding-right: 5.03pt;
              padding-left: 5.03pt;
              vertical-align: middle;
            ">
            <p style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-align: center;
                font-size: 10pt;
              ">
              {{ transactions.amount }}
            </p>
          </td>
          <td colspan="2" style="
              width: 86.6pt;
              border-style: solid;
              border-width: 0.75pt;
              padding-right: 5.03pt;
              padding-left: 5.03pt;
              vertical-align: middle;
            ">
            <p style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-align: center;
                font-size: 10pt;
              ">
              {{ transactions.sum }}
            </p>
          </td>
          <td style="
              width: 1.55pt;
              border-right-style: solid;
              border-right-width: 0.75pt;
              border-left-style: solid;
              border-left-width: 0.75pt;
              padding-right: 5.03pt;
              padding-left: 5.03pt;
              vertical-align: top;
            ">
            <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
              &#xa0;
            </p>
          </td>
        </tr>
        <tr>
          <td style="
              width: 3.15pt;
              border-left-style: solid;
              border-left-width: 0.75pt;
              padding-right: 5.4pt;
              padding-left: 5.03pt;
              vertical-align: top;
            ">
            <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
              &#xa0;
            </p>
          </td>
          <td colspan="11" style="
              width: 451.65pt;
              border-top-style: solid;
              border-top-width: 0.75pt;
              padding-right: 5.4pt;
              padding-left: 5.4pt;
              vertical-align: middle;
            ">
            <p style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-align: center;
                font-size: 10pt;
              ">
              Всього робіт надано на суму (<em>прописом</em>):
              <em>Шістдесят тисяч п’ятсот гривень 00 коп.</em>
            </p>
          </td>
          <td style="
              width: 1.55pt;
              border-right-style: solid;
              border-right-width: 0.75pt;
              padding-right: 5.03pt;
              padding-left: 5.4pt;
              vertical-align: top;
            ">
            <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
              &#xa0;
            </p>
          </td>
        </tr>
        <tr>
          <td style="
              width: 3.15pt;
              border-left-style: solid;
              border-left-width: 0.75pt;
              padding-right: 5.4pt;
              padding-left: 5.03pt;
              vertical-align: top;
            ">
            <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
              &#xa0;
            </p>
          </td>
          <td colspan="11" style="
              width: 451.65pt;
              padding-right: 5.4pt;
              padding-left: 5.4pt;
              vertical-align: middle;
            ">
            <p style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-align: justify;
                font-size: 10pt;
              ">
              &#xa0;
            </p>
          </td>
          <td style="
              width: 1.55pt;
              border-right-style: solid;
              border-right-width: 0.75pt;
              padding-right: 5.03pt;
              padding-left: 5.4pt;
              vertical-align: top;
            ">
            <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
              &#xa0;
            </p>
          </td>
        </tr>
        <tr>
          <td style="
              width: 3.15pt;
              border-left-style: solid;
              border-left-width: 0.75pt;
              padding-right: 5.4pt;
              padding-left: 5.03pt;
              vertical-align: top;
            ">
            <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
              &#xa0;
            </p>
          </td>
          <td colspan="11" style="
              width: 451.65pt;
              padding-right: 5.4pt;
              padding-left: 5.4pt;
              vertical-align: middle;
            ">
            <p style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-align: justify;
                font-size: 10pt;
              ">
              Роботи виконані повністю, сторони претензій одна до одної не
              мають.
            </p>
            <p style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-align: justify;
                font-size: 10pt;
              ">
              Роботи сплачені повністю, сторони претензій одна до одної не
              мають.
            </p>
          </td>
          <td style="
              width: 1.55pt;
              border-right-style: solid;
              border-right-width: 0.75pt;
              padding-right: 5.03pt;
              padding-left: 5.4pt;
              vertical-align: top;
            ">
            <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
              &#xa0;
            </p>
          </td>
        </tr>
        <tr>
          <td colspan="7" style="
              width: 251.2pt;
              border-left-style: solid;
              border-left-width: 0.75pt;
              padding-right: 5.4pt;
              padding-left: 5.03pt;
              vertical-align: top;
            ">
            <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
              &#xa0;
            </p>
          </td>
          <td style="
              width: 1pt;
              padding-right: 5.4pt;
              padding-left: 5.4pt;
              vertical-align: top;
            ">
            <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
              &#xa0;
            </p>
          </td>
          <td colspan="5" style="
              width: 204.15pt;
              border-right-style: solid;
              border-right-width: 0.75pt;
              padding-right: 5.03pt;
              padding-left: 5.4pt;
              vertical-align: top;
            ">
            <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
              &#xa0;
            </p>
          </td>
        </tr>
        <tr>
          <td colspan="7" style="
              width: 251.2pt;
              border-left-style: solid;
              border-left-width: 0.75pt;
              padding-right: 5.4pt;
              padding-left: 5.03pt;
              vertical-align: top;
            ">
            <p style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-align: center;
                font-size: 10pt;
              ">
              Роботу здав
            </p>
          </td>
          <td style="
              width: 1pt;
              padding-right: 5.4pt;
              padding-left: 5.4pt;
              vertical-align: top;
            ">
            <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
              &#xa0;
            </p>
          </td>
          <td colspan="5" style="
              width: 204.15pt;
              border-right-style: solid;
              border-right-width: 0.75pt;
              padding-right: 5.03pt;
              padding-left: 5.4pt;
              vertical-align: top;
            ">
            <p style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-align: center;
                font-size: 10pt;
              ">
              Роботу прийняв
            </p>
          </td>
        </tr>
        <tr>
          <td colspan="7" style="
              width: 251.2pt;
              border-left-style: solid;
              border-left-width: 0.75pt;
              padding-right: 5.4pt;
              padding-left: 5.03pt;
              vertical-align: top;
            ">
            <p style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-align: center;
                font-size: 10pt;
              ">
              від ВИКОНАВЦЯ:
            </p>
          </td>
          <td style="
              width: 1pt;
              padding-right: 5.4pt;
              padding-left: 5.4pt;
              vertical-align: top;
            ">
            <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
              &#xa0;
            </p>
          </td>
          <td colspan="5" style="
              width: 204.15pt;
              border-right-style: solid;
              border-right-width: 0.75pt;
              padding-right: 5.03pt;
              padding-left: 5.4pt;
              vertical-align: top;
            ">
            <p style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-align: center;
                font-size: 10pt;
              ">
              від ЗАМОВНИКА:
            </p>
          </td>
        </tr>
        <tr>
          <td colspan="3" style="
              width: 58.8pt;
              border-left-style: solid;
              border-left-width: 0.75pt;
              padding-right: 5.4pt;
              padding-left: 5.03pt;
              vertical-align: top;
            ">
            <p style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-align: center;
                font-size: 10pt;
              ">
              &#xa0;
            </p>
          </td>
          <td style="
              width: 58.9pt;
              padding-right: 5.4pt;
              padding-left: 5.4pt;
              vertical-align: top;
            ">
            <p style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-align: center;
                font-size: 10pt;
              ">
              <em>&#xa0;</em>
            </p>
          </td>
          <td colspan="3" style="
              width: 111.9pt;
              padding-right: 5.4pt;
              padding-left: 5.4pt;
              vertical-align: top;
            ">
            <p style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-align: center;
                font-size: 10pt;
              ">
              &#xa0;
            </p>
          </td>
          <td style="
              width: 1pt;
              padding-right: 5.4pt;
              padding-left: 5.4pt;
              vertical-align: top;
            ">
            <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
              &#xa0;
            </p>
          </td>
          <td style="
              width: 62.4pt;
              padding-right: 5.4pt;
              padding-left: 5.4pt;
              vertical-align: top;
            ">
            <p style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-align: center;
                font-size: 10pt;
              ">
              &#xa0;
            </p>
          </td>
          <td colspan="2" style="
              width: 42.95pt;
              padding-right: 5.4pt;
              padding-left: 5.4pt;
              vertical-align: top;
            ">
            <p style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-align: center;
                font-size: 10pt;
              ">
              <em>&#xa0;</em>
            </p>
          </td>
          <td colspan="2" style="
              width: 77.2pt;
              border-right-style: solid;
              border-right-width: 0.75pt;
              padding-right: 5.03pt;
              padding-left: 5.4pt;
              vertical-align: top;
            ">
            <p style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-align: center;
                font-size: 10pt;
              ">
              &#xa0;
            </p>
          </td>
        </tr>
        <tr>
          <td colspan="3" style="
              width: 58.8pt;
              border-left-style: solid;
              border-left-width: 0.75pt;
              padding-right: 5.4pt;
              padding-left: 5.03pt;
              vertical-align: top;
            ">
            <p style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-align: right;
                font-size: 10pt;
              ">
              ФОП:
            </p>
          </td>
          <td style="
              width: 58.9pt;
              padding-right: 5.4pt;
              padding-left: 5.4pt;
              vertical-align: top;
            ">
            <p style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-align: center;
                font-size: 10pt;
              ">
              &#xa0;
            </p>
          </td>
          <td colspan="3" style="
              width: 111.9pt;
              padding-right: 5.4pt;
              padding-left: 5.4pt;
              vertical-align: top;
            ">
            <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
              /{{ names.executor.short }}
            </p>
          </td>
          <td style="
              width: 1pt;
              padding-right: 5.4pt;
              padding-left: 5.4pt;
              vertical-align: top;
            ">
            <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
              &#xa0;
            </p>
          </td>
          <td style="
              width: 62.4pt;
              padding-right: 5.4pt;
              padding-left: 5.4pt;
              vertical-align: top;
            ">
            <p style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-align: right;
                font-size: 10pt;
              ">
              ФОП:
            </p>
          </td>
          <td colspan="2" style="
              width: 42.95pt;
              padding-right: 5.4pt;
              padding-left: 5.4pt;
              vertical-align: top;
            ">
            <p style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-align: center;
                font-size: 10pt;
              ">
              &#xa0;
            </p>
          </td>
          <td colspan="2" style="
              width: 77.2pt;
              border-right-style: solid;
              border-right-width: 0.75pt;
              padding-right: 5.03pt;
              padding-left: 5.4pt;
              vertical-align: top;
            ">
            <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
              /{{ names.customer.short }}
            </p>
          </td>
        </tr>
        <tr>
          <td colspan="7" style="
              width: 251.2pt;
              border-left-style: solid;
              border-left-width: 0.75pt;
              border-bottom-style: solid;
              border-bottom-width: 0.75pt;
              padding-right: 5.4pt;
              padding-left: 5.03pt;
              vertical-align: top;
            ">
            <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
              &#xa0;
            </p>
          </td>
          <td style="
              width: 1pt;
              border-bottom-style: solid;
              border-bottom-width: 0.75pt;
              padding-right: 5.4pt;
              padding-left: 5.4pt;
              vertical-align: top;
            ">
            <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
              &#xa0;
            </p>
          </td>
          <td colspan="5" style="
              width: 204.15pt;
              border-right-style: solid;
              border-right-width: 0.75pt;
              border-bottom-style: solid;
              border-bottom-width: 0.75pt;
              padding-right: 5.03pt;
              padding-left: 5.4pt;
              vertical-align: top;
            ">
            <p style="
                margin-top: 0pt;
                margin-bottom: 0pt;
                text-align: justify;
                font-size: 10pt;
              ">
              &#xa0;
            </p>
          </td>
        </tr>
        <tr style="height: 0pt">
          <td style="width: 13.95pt"></td>
          <td style="width: 20.35pt"></td>
          <td style="width: 35.3pt"></td>
          <td style="width: 69.7pt"></td>
          <td style="width: 37.65pt"></td>
          <td style="width: 46.15pt"></td>
          <td style="width: 38.9pt"></td>
          <td style="width: 11.8pt"></td>
          <td style="width: 73.2pt"></td>
          <td style="width: 32pt"></td>
          <td style="width: 21.75pt"></td>
          <td style="width: 75.65pt"></td>
          <td style="width: 12.35pt"></td>
        </tr>
      </table>
    </div>
    <p style="margin-top: 0pt; margin-bottom: 0pt; text-indent: 35.45pt">
      &#xa0;
    </p>
  </div>
</template>
<style scoped>
* {
  color: black;
  font-family: "Times New Roman";
}

table * {
  background: white;
}

table {
  outline: 16px solid white;
}
</style>
