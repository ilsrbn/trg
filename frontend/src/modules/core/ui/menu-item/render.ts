import { MenuOption } from "naive-ui";
import { Component, h } from "vue";
import { RouterLink } from "vue-router";
import { renderIcon } from "../icon/render";

export function renderMenuOption(
  to: string,
  text: string,
  icon: Component,
): MenuOption {
  return {
    label: () => h(RouterLink, { to: { name: to } }, { default: () => text }),
    key: to,
    icon: renderIcon(icon),
  };
}
