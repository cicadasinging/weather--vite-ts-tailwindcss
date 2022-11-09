# weather--vite-ts-tailwindcss

学习 Vite、Vue3.2、TypeScript、Tailwind CSS 的 weather 示例

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## 开发环境搭建

### Vite([vuejs](https://github.com/vuejs)/**[create-vue](https://github.com/vuejs/create-vue)**)

`Bash`:

```bash
npm create vue@3
```

`package.json`:

```json
{
  "dependencies": {
    "pinia": "^2.0.21",
    "vue": "^3.2.38",
    "vue-router": "^4.1.5"
  },
  "devDependencies": {
    "@rushstack/eslint-patch": "^1.1.4",
    "@types/jsdom": "^20.0.0",
    "@types/node": "^16.11.56",
    "@vitejs/plugin-vue": "^3.0.3",
    "@vue/eslint-config-prettier": "^7.0.0",
    "@vue/eslint-config-typescript": "^11.0.0",
    "@vue/test-utils": "^2.0.2",
    "@vue/tsconfig": "^0.1.3",
    "eslint": "^8.22.0",
    "eslint-plugin-vue": "^9.3.0",
    "jsdom": "^20.0.0",
    "npm-run-all": "^4.1.5",
    "prettier": "^2.7.1",
    "typescript": "~4.7.4",
    "vite": "^3.0.9",
    "vitest": "^0.23.0",
    "vue-tsc": "^0.40.7"
  }
}
```

### [Tailwind CSS](https://tailwindcss.com/docs/guides/vite#vue)

`Bash`:

```bash
npm i -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

> 问题：ESLint error of `no-undef`(`'module' is not defined`)
>
> 解决：
>
> `.eslintrc.cjs`:
>
> ```javascript
> require("@rushstack/eslint-patch/modern-module-resolution");
> 
> module.exports = {
>    env: {    
>      node: true,
>    },
> };
> ```
>
> 问题：WebStorm 插件 Tailwind CSS 失效
>
> 解决：
>
> `Bash`:
>
> ```bash
> npm i -D tailwindcss@3.1.8
> ```

`tailwind.config.js`:

```javascript
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
};
```

`tailwind.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

`main.js`:

```javascript
import "./assets/tailwind.css";
```

#### [tailwindlabs](https://github.com/tailwindlabs)/**[prettier-plugin-tailwindcss](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)**

`Bash`:

```bash
npm i -D prettier prettier-plugin-tailwindcss
```

`.prettierrc.json`:

```json
{
  "printWidth": 120,
  "plugins": [
    "prettier-plugin-tailwindcss"
  ]
}
```

### 按需导入

#### [antfu](https://github.com/antfu)/**[unplugin-auto-import](https://github.com/antfu/unplugin-auto-import)**&**[unplugin-vue-components](https://github.com/antfu/unplugin-vue-components)**&[unplugin-icons](https://github.com/antfu/unplugin-icons)

`Bash`:

```bash
npm i -D unplugin-auto-import unplugin-vue-components unplugin-icons
```

#### [Icones](https://icones.js.org/)

`Bash`:

```bash
npm i -D @iconify/json
```

#### [Axios](https://www.axios-http.cn/docs/intro)

`Bash`:

```bash
npm i axios
```

`vite.config.js`:

> see `node_modules\@iconify\json\collections.md`

```javascript
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "node:url";
import AutoImport from "unplugin-auto-import/vite";
import IconsResolver from "unplugin-icons/resolver";
import Icons from "unplugin-icons/vite";
import Components from "unplugin-vue-components/vite";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      dirs: ["src/composables"],
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
```

> 问题：ESLint error of `no-undef`(`'ref' is not defined`)
>
> 解决：
>
> `.eslintrc.cjs`:
>
> ```javascript
> require("@rushstack/eslint-patch/modern-module-resolution");
> 
> module.exports = {
>    extends: [
>      ".eslintrc-auto-import.json"
>    ],
> };
> ```
>
> 问题：`Unknown html tag HelloWorld`、`TS2304: Cannot find name 'ref'.`
>
> 解决：
>
> `tsconfig.app.json`:
>
> ```json
> {
>    "include": [
>      "auto-imports.d.ts",
>      "components.d.ts"
>    ]
> }
> ```
>

### Git

`Bash`:

```bash
git init
git add -A
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:cicadasinging/weather--vite-ts-tailwindcss.git
git push -f origin main
```

### 其他工具

`Bash`:

```bash
npm i lodash-es
```
