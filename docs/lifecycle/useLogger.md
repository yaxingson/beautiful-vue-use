# useLogger

Console logs parameters as component transitions through lifecycles.

## Demo

## Usage

```vue
<script setup lang="ts">
import { useLogger } from '@beautiful-vue-use/lifecycle'

const props = defineProps()

useLogger('Demo', props)

</script>

```

## API

### Declaration

```ts
declare function useLogger(componentName: string, ...rest: unknown[]);

```
