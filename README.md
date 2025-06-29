# 🚀 FE Test AgileTech
## ⚛️ ⚡ 🛠️ 🧱 React + Vite + TypeScript + Redux Toolkit

A lightweight starter project built with React, Vite, and TypeScript, featuring Redux Toolkit for global state management, React Router for navigation, ESLint/Prettier for code quality, and deployment support to GitHub Pages.
- React + Vite: môi trường phát triển nhanh chóng với hot‑reload và bundling tối ưu

- TypeScript: đảm bảo an toàn kiểu và giúp code rõ ràng, dễ bảo trì

- Redux Toolkit: tiện ích mạnh mẽ cho việc quản lý state toàn cục

- React Router: điều hướng SPA linh hoạt

- ESLint/Prettier: duy trì code style nhất quán

- GH Pages deploy: sẵn sàng chạy demo hoặc triển khai nhanh

## Authors

- [@HieuPham](https://www.github.com/titbe)


## 📦 Installation

Install my-project with npm

```bash
  npm install
  npm run dev
```
Install my-project with yarn

```bash
  yarn install
  yarn dev
```

package.json:
```
"scripts": {
  "dev": "vite",
  "build": "tsc -b && vite build",
  "lint": "eslint .",
  "preview": "vite preview",
  "deploy": "gh-pages -d dist"
}
```
# 📁 Code Structure

```
fe-test/
├── public/                 # Static assets (favicon, etc.)
├── src/                    # Source code
│   ├── api/                # Cấu hình API 
│   ├── assets/             # Hình ảnh, font, v.v.
│   ├── components/         # Các React components dùng chung
│   ├── dto/                # Định nghĩa interface 
│   ├── hooks/              # Custom React hooks
│   ├── layout/             # Thành phần bố cục chung (Layout, Header, Footer)
│   ├── pages/              # Các trang chính (Home, About, etc.)
│   │   └── home/           # (Ví dụ) Trang Home
│   │   ├── Home.module.css # (Ví dụ) Css của  Home
│   │   ├── Home.tsx        # (Ví dụ) Trang Home
│   ├── routes/             # Cấu hình định tuyến (React Router)
│   ├── store/              # Cấu hình Redux store, các slice của Redux Toolkit theo từng chức năng
│   ├── main.tsx            # Entry point ứng dụng
│   └── vite-env.d.ts       # Môi trường Vite + TypeScript
├── .eslintrc.cjs           # Cấu hình ESLint
├── index.html              # Template HTML chính
├── package.json            # Thông tin dự án & scripts
├── tsconfig.json           # Cấu hình TypeScript
├── tsconfig.node.json      # TS cho môi trường Node
└── vite.config.ts          # Cấu hình Vite

```

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

bExpanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
## 🌐 Deployment

To deploy this project run

```bash
  npm run deploy
  or
  yarn deploy
```

