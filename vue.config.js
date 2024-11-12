// Original text
// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })

module.exports = {
	devServer: {
		proxy: "http://localhost:8080/api/links"
	}
	// devServer: {
	// 	port: 3000, 
	// 	proxy: {
	// 		'/api': {
	// 			target: 'http://localhost:8080',
	// 			ws: true,
	// 			changeOrigin: true
	// 		}
	// 	}
	// }
}