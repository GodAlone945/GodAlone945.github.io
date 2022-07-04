# vue.config.js 配置默认路径

Created: April 15, 2021 11:21 PM
标签: vue, 代码

```jsx
module.exports = {
	configureWebpack: {
		resolve: {
			alias: {
				'assets': '@/assets',
				'common': '@common',
				'components': '@/components',
				'network': '@/network',
				'views': '@/views'
			}
		}
	}
}
```