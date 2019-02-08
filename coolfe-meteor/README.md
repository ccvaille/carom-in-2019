## 效果
- 简单跑下 Meteor + React
- Meteor + React + React Router 4 跑不起来

## note
-  `Meteor` 构建系统对 imports/ 目录中(项目里所有的叫做 imports 的目录)的文件采用懒加载策略，只有用 import 语句导入的模块才加载，所以 `react` 文件写在项目的 imports/ 目录中
- `Meteor` 应用中安装的 `Atmosphere` 包，在导入的时候，为了避免与 `npm` 包命名空间产生冲突，需要在导入路径的前面添加 meteor/ 前缀
- main.js 里面需要手动 `import` main.html，解决 "Target container is not a DOM element" 的问题