import { fileURLToPath, URL } from "node:url";
import AutoImport from "unplugin-auto-import/vite";
import IconsResolver from "unplugin-icons/resolver";
import Icons from "unplugin-icons/vite";
import Components from "unplugin-vue-components/vite";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      dirs: ["src/composables", "src/apis", "src/stores", "src/utils"],
      imports: ["vue", "vue-router", "pinia", { axios: [["default", "axios"]] }, { "lodash-es": ["debounce"] }],
      dts: true,
      eslintrc: { enabled: true },
    }),
    Components({
      resolvers: [
        IconsResolver({
          enabledCollections: ["material-symbols", "line-md", "icon-park-outline"],
          prefix: "",
        }),
      ],
      dts: true,
    }),
    Icons({ autoInstall: true }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
