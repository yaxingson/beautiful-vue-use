<script setup lang="ts">
import { defineComponent, h } from 'vue/dist/vue.esm-bundler'
import { parse } from '@vue/compiler-sfc'
import { useData } from 'vitepress'
import { loadModule } from 'vue3-sfc-loader'

const { isDark } = useData()

console.log(isDark.value)

const baseURL = 'https://raw.githubusercontent.com/yaxingson/beautiful-vue-use/main/lib'
const path = location.pathname.split('.')[0]

const Demo = defineComponent({
  async setup() {
    const sfc = await fetch(`${baseURL}${path}/Demo.vue`).then(res=>res.text())
    const { scriptSetup, template, styles } = parse(sfc).descriptor

    const elem = class extends HTMLElement {
      private root: ShadowRoot
      constructor() {
        super()
        this.root = this.attachShadow({mode:'open'})
        this.root.innerHTML = template?.content || ''
      }
    }

    return ()=>h(elem)
  }
})


</script>

<template>
  <div class="demo-block" :style="{background: isDark ? '#161618' : '#f6f6f7'}">
    <Suspense>
      <Demo />
    </Suspense>
  </div>
</template>

<style scoped>
.demo-block {
  padding: 30px;
  border-radius: 5px;
  overflow: hidden;
}

</style>
