import { toRef } from 'vue'

function useList<T>(array:T[]|(()=>T[])) {
  const list = toRef(array)
  const actions = {
    set() {}, 
    push() {}, 
    updateAt() {}, 
    insertAt() {}, 
    update() {}, 
    updateFirst() {},
    upsert() {}, 
    sort() {}, 
    filter() {}, 
    removeAt() {}, 
    remove() {}, 
    clear() {}, 
    reset() {} 
  }

  return [ list, actions ] as const
}

export default useList
