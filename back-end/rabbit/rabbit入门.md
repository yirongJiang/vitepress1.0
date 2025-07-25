# rabbit 入门
1. 创建项目
npm init vite@latest
2. 启动项目
npm run dev
3. 创建路由
src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
    history: createWebHistory(),
    routes: []
})
