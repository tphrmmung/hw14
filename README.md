# **React + Vite + NodeJS + Axios + Tailwind CSS + Font Awesome**
### ทั้งหมดนี้คือสิ่งที่ใช้งาน ของ Repo นี้
- **[Vite](https://github.com/DoNuTll40/snru-todolist-react?tab=readme-ov-file#vite-open-website)**
- **[Axios](https://github.com/DoNuTll40/snru-todolist-react?tab=readme-ov-file#axios-open-website)**
- **[Tailwind CSS](https://github.com/DoNuTll40/snru-todolist-react?tab=readme-ov-file#tailwind-css-open-website)**
- **[Font Awesome](https://github.com/DoNuTll40/snru-todolist-react?tab=readme-ov-file#font-awesome-open-website)**
- **[How to Deploy](https://github.com/DoNuTll40/snru-todolist-react?tab=readme-ov-file#how-to-deploy-full-repo)**
- **[Setting Repo.](https://github.com/DoNuTll40/snru-todolist-react?tab=readme-ov-file#%E0%B8%88%E0%B8%B2%E0%B8%81%E0%B8%99%E0%B8%B1%E0%B9%89%E0%B8%99%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B9%84%E0%B8%9B%E0%B9%83%E0%B8%99-repo-%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%A3%E0%B8%B2)**

### ขั้นตอนการเอาไฟล์ขึ้น git ผ่าน terminal

``` bash

git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/myUsers/NameRepo.git
git push -u origin main

```

# ขั้นตอนการติดตั้ง

## **Vite** [Open Website](https://vitejs.dev/)

- คำสั่งติดตั้ง

``` powershell
npm create vite@latest my-project -- --template react
```

- เข้าไปใน โฟล์เดอร์ที่สร้าง

``` powershell
cd my-project
```

- คำสั่งติดตั้ง **Node JS** *รันบนเครื่องตัวเอง

``` powershell
npm install
```

- คำสั่งรัน

``` powershell
npm run dev
```



## **AXIOS** [Open Website](https://axios-http.com/)

- คำสั่งติดตั้ง

``` powershell
npm i axios
```

### วิธีเรียกใช้งาน
- เรียกใช้งานในไฟล์หลัก

``` javascript
import axios from 'axios';
```

## **Tailwind CSS** [Open Website](https://tailwindcss.com/docs/installation)

คำสั่งติดตั้ง ณ ที่นี้ใช้ **Framework** ตัว **Vite**

``` powershell
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

- จากนั้นนำ ตัวนี้ ไปวาง ในไฟล์ของ - **tailwind.config.js**

``` javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} 
```

- นำส่วนนี้ไปวางไว้ใน ไฟล์ **CSS** เพื่อเรียกใช้งาน

``` css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## **Font Awesome** [Open Website](https://fontawesome.com/)

- คำสั่งติดตั้ง

``` powershell
npm i --save @fortawesome/fontawesome-svg-core
npm i --save @fortawesome/react-fontawesome@latest
```

- ชุด icon free

``` powershell
npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/free-regular-svg-icons
npm i --save @fortawesome/free-brands-svg-icons
```

- วิธีใช้งาน เอาไปไว้ใน ไฟล์หลัก เช่น **[App.jsx](./src/App.jsx)**

``` javascript
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
```

- การเรียกใช้ icon

``` javascript
import { ชื่อ icon } from '@fortawesome/free-solid-svg-icons' 
```

# How to Deploy full repo

- เข้าไปที่ไฟล์ ```./vite.config.js``` . 

``` javascript

export default defineConfig({
  plugins: [react()],
  base: "ชื่อ repo ชองเรา"
})

```

- สร้างโฟล์เดอร์
  - .github/
    - workflows/ แล้วสร้างไฟล์  ```deploy.yml``` ใน projects ของเราเลย.

- จากนั้น copy and paste ลงไปในไฟล์ deply.yml แล้ว save.

  ``` yaml
  name: Deploy

  on:
  push:
    branches:
      - main

  jobs:
  build:
    name: Build
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repo
        uses: actions/checkout@v2

      - name: Setup Node
        uses: actions/setup-node@v1
        with:
          node-version: 16

      - name: Install dependencies
        uses: bahmutov/npm-install@v1

      - name: Build project
        run: npm run build

      - name: Upload production-ready build files
        uses: actions/upload-artifact@v2
        with:
          name: production-files
          path: ./dist

  deploy:
    name: Deploy
    needs: build
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'

    steps:
      - name: Download artifact
        uses: actions/download-artifact@v2
        with:
          name: production-files
          path: ./dist

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
  ```

## จากนั้นเข้าไปใน repo ของเรา.

1. ไปที่ **Setting**
1. ไปที่ **Action** แล้วเลือก **General**
1. เลื่อนหา **Workflow permissions** แล้วคลิกที่ **Read and write permissions** จากนั้นกด **Save**
1. ไปที่หน้า **Avtion** ใน **Navbar** รอ การ **Deploy** สักครู่ 
1. ถ้า **Fail** ให้ทำการคลิกเข้าไปจากนั้น คลิก **Re-run failed**
1. เป็นอันจบ

## คำสั่งในการ repush repo git
```bash

git add .
git commit -m "แล้วแต่จะตั้ง"
git pull --rebase origin main
git push origin main

```
