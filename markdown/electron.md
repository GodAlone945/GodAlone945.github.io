# electron

## 安装错误

在 `package.json` 中的 `scripts` 中添加
```json
"install": "set ELECTRON_MIRROR=http://npm.taobao.org/mirrors/electron/ && node ./node_modules/electron/install.js",
```

在 `electron` 中的 `install.js` 中将 `/^v/` 替换成 `"v"`

`npx create-electron-app my-app`

在新建的项目文件里运行
`npm run make`
