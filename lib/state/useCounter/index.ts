import { ref } from 'vue'

function useCounter(initial:number, max?:number, min?:number) {
  const current = ref(initial)
  const actions = {
    get() {},
    inc(delta:number) {},
    dec(delta:number) {},
    set(value:number) {},
    reset() {}
  }

  return [ current, actions ] as const
}

export default useCounter
