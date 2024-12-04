# useLifecycles

Call mount and unmount callbacks, when component is mounted and un-mounted, respectively.

## Demo

## Usage

```vue
<script setup lang="ts">
import { useLifecycles } from '@beautiful-vue-use/lifecycle'

useLifecycles(() => console.log('MOUNTED'), () => console.log('UNMOUNTED'))

</script>

```

## API

### Declaration

```ts
declare function useLifecycles(mount: Function, unmount:Function);

```
