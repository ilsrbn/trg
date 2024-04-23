import { h } from "vue";
import { RouterLink } from "vue-router";
import { renderIcon } from "../icon/render";
export function renderMenuOption(to, text, icon) {
    return {
        label: () => h(RouterLink, { to: { name: to } }, { default: () => text }),
        key: to,
        icon: renderIcon(icon),
    };
}
//# sourceMappingURL=render.js.map