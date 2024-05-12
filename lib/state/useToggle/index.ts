import { toRef, MaybeRef } from 'vue'

function useToggle(initial:MaybeRef<boolean>) {
  const state = toRef(initial)
  const toggle = (value:boolean) => state.value = value

  return [ state, toggle ] as const
}

export default useToggle
