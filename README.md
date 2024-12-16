## 🚀 Features

## 📦 Install

### Package manager

```shell
# npm 
$ npm install beautiful-vue-use --save
$ npm install @beautiful-vue-use/animate --save

# pnpm
$ pnpm add beautiful-vue-use
$ pnpm add @beautiful-vue-use/animate --save

```

### CDN

```html
<script src="https://unpkg.com/beautiful-vue-use"></script>
<script src="https://unpkg.com/@beautiful-vue-use/animate"></script>

```

## 🔨 Usage

Manual import:

```js
import { useInterval, useCookie, useCounter } from 'beautiful-vue-use'
import { useInterval, useSpring } from '@beautiful-vue-use/animate'

```

Auto import:

```shell
$ npm i -D unplugin-auto-import

```

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  plugins:[
    AutoImport({
      include:[/\.vue$/],
      imports:[
        "beautiful-vue-use",
      {
        '@beautiful-vue-use/animate':[
          'useInterval',
          ['useTimeout', 'useDelay']
        ]
      },
      {
        from:'@beautiful-vue-use/effect',
        imports:[''],
        type:true
      }
      ]
      // ...
    })
  ]
})

```

## 🦄 Functions

<details>
	<summary>animate</summary>
	<ul>
		<li><a href="">useInterval</a></li>
		<li><a href="">useRaf</a></li>
		<li><a href="">useSpring</a></li>
		<li><a href="">useTimeout</a></li>
		<li><a href="">useTween</a></li>
	</ul>
</details>

<details>
	<summary>effect</summary>
	<ul>
		<li><a href="">useCookie</a></li>
		<li><a href="">useCopyToClipboard</a></li>
		<li><a href="">useError</a></li>
		<li><a href="">useFavicon</a></li>
		<li><a href="">useLocalStorage</a></li>
		<li><a href="">usePermission</a></li>
		<li><a href="">useSessionStorage</a></li>
		<li><a href="">useTitle</a></li>
	</ul>
</details>

<details>
	<summary>lifecycle</summary>
	<ul>
		<li><a href="">useEffectOnce</a></li>
		<li><a href="">useLogger</a></li>
		<li><a href="">usePromise</a></li>
	</ul>
</details>

<details>
	<summary>sensors</summary>
	<ul>
		<li><a href="">useBattery</a></li>
		<li><a href="">useGeolocation</a></li>
		<li><a href="">useHash</a></li>
		<li><a href="">useIdle</a></li>
		<li><a href="">useLocation</a></li>
		<li><a href="">useMeasure</a></li>
		<li><a href="">useMedia</a></li>
		<li><a href="">useWindowSize</a></li>
	</ul>
</details>

<details>
	<summary>state</summary>
	<ul>
		<li><a href="">useCounter</a></li>
		<li><a href="">useDefault</a></li>
		<li><a href="">useFirstMountState</a></li>
		<li><a href="">useList</a></li>
		<li><a href="">useMap</a></li>
		<li><a href="">useMethods</a></li>
		<li><a href="">useMultiStateValidator</a></li>
		<li><a href="">usePrevious</a></li>
		<li><a href="">useQueue</a></li>
		<li><a href="">useSet</a></li>
		<li><a href="">useToggle</a></li>
	</ul>
</details>

<details>
	<summary>ui</summary>
	<ul>
		<li><a href="">useAudio</a></li>
		<li><a href="">useCss</a></li>
		<li><a href="">useDrop</a></li>
		<li><a href="">useDropArea</a></li>
		<li><a href="">useFullscreen</a></li>
		<li><a href="">useSlider</a></li>
		<li><a href="">useVideo</a></li>
	</ul>
</details>

<details>
	<summary>miscellaneous</summary>
	<ul>
		<li><a href="">useDateFormat</a></li>
	</ul>
</details>

## 📄 License

MIT License © 2024-PRESENT Yaxing Son
