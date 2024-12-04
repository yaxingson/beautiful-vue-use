# useAudio

Creates `<audio>` element, tracks its state and exposes playback controls.

## Demo

## Usage

```vue
<script setup lang="ts">
import { useAudio } from '@beautiful-vue-use/ui'

const { audio, state, controls, ref } = useAudio({
  src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
  autoPlay: true,
})

</script>

<template>
  <div>
    {{ audio }}
    <pre>{{ JSON.stringify(state, null, 2) }}</pre>
    <button @click="controls.pause">Pause</button>
    <button @click="controls.play">Play</button>
    <br/>
    <button @click="controls.mute">Mute</button>
    <button @click="controls.unmute">Un-mute</button>
    <br/>
    <button @click="() => controls.volume(.1)">Volume: 10%</button>
    <button @click="() => controls.volume(.5)">Volume: 50%</button>
    <button @click="() => controls.volume(1)">Volume: 100%</button>
    <br/>
    <button @click="() => controls.seek(state.time - 5)">-5 sec</button>
    <button @click="() => controls.seek(state.time + 5)">+5 sec</button>
  </div>
</template>

```

## API

### Declaration

```ts
interface AudioOptions {
  src: string
  autoPlay: boolean
}

declare function useAudio(options:AudioOptions)

```

### Arguments

| name | description | type | required | default |
| ----- | -----  | -----  | -----  | -----  |


### Returns
