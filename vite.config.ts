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
      imports: ["vue", "vue-router", "pinia", { axios: [["default", "axios"]] }],
      dts: true,
      eslintrc: { enabled: true },
    }),
    Components({
      resolvers: [
        IconsResolver({
          enabledCollections: ["icon-park-outline"],
          alias: { park: "icon-park-outline" },
          prefix: "icon",
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
