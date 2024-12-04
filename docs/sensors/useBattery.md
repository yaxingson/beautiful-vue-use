# useBattery

Tracks battery status.

## Demo

## Usage

```vue
<script setup lang="ts">
import { useBattery } from '@beautiful-vue-use/sensors'

const batteryState = useBattery()

</script>

<template>
  <div v-if="!batteryState.isSupported">
    <strong>Battery sensor</strong>: <span>not supported</span>
  </div>
  <div v-else-if="!batteryState.fetched">
    <strong>Battery sensor</strong>: <span>supported</span> <br />
    <strong>Battery state</strong>: <span>fetching</span>
  </div>
  <div v-else>
    <strong>Battery sensor</strong>:&nbsp;&nbsp; <span>supported</span> <br />
    <strong>Battery state</strong>: <span>fetched</span> <br />
    <strong>Charge level</strong>:&nbsp;&nbsp; 
    <span>{{ (batteryState.level * 100).toFixed(0) }}%</span> <br />
    <strong>Charging</strong>:&nbsp;&nbsp; 
    <span>{{ batteryState.charging ? 'yes' : 'no' }}</span> <br />
    <strong>Charging time</strong>:&nbsp;&nbsp;
    <span>{{ batteryState.chargingTime ? batteryState.chargingTime : 'finished' }}</span> <br />
    <strong>Discharging time</strong>:&nbsp;&nbsp; 
    <span>{{ batteryState.dischargingTime }}</span>
  </div>
</template>

```

## API
