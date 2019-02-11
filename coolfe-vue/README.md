# coolfe-vue

> A Vue.js project

## Build Setup

## 效果
- 用 `vue-cli` v2 版本做个 Vue 的 Demo

## note
- `mutation` 必须是一个同步函数，里面不能发网络请求，`action` 中通常用来执行网络请求等异步操作，所以通常组件中直接触发的不是 mutation ，而是 action 。


``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# 查看 json-server
cd api/
json-server --watch db.json -p 3008
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
