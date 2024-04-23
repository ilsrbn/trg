<script setup lang="ts">
import { computed } from "vue";
import { NLayoutSider, NMenu } from "naive-ui";
import type { MenuOption } from "naive-ui";
import { renderMenuOption } from "../menu-item/render";
import {
  Wallet28Filled,
  PersonAccounts24Filled,
  ChartPerson28Filled,
  PersonBoard24Filled,
} from "@vicons/fluent";

import { useRouter } from "vue-router";
import { Key } from "naive-ui/es/menu/src/interface";
const router = useRouter();

const active = computed(() => router.currentRoute.value.name as Key);
const menu: MenuOption[] = [
  renderMenuOption("Dashboard", "Дашборд", ChartPerson28Filled),
  renderMenuOption("Contractors", "Контрагенти", PersonBoard24Filled),
  renderMenuOption("Reports", "Акти виконаних робіт", Wallet28Filled),
  {
    key: "divider-1",
    type: "divider",
  },
  renderMenuOption("Details", "Мої деталі", PersonAccounts24Filled),
];
</script>
<template>
  <n-layout-sider bordered>
    <n-menu :value="active" :options="menu" />
  </n-layout-sider>
</template>
