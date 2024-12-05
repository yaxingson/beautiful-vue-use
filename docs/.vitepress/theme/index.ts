import DefaultTheme from 'vitepress/theme'
import Demo from './components/Demo.vue'
import FunctionList from './components/FunctionList.vue'

export default {
	...DefaultTheme,
	enhanceApp({ app }) {
    app.component('Demo', Demo)
    app.component('FunctionList', FunctionList)
  }
}
