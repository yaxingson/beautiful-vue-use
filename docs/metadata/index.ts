import { renderToString } from 'vue/server-renderer'

export const categoryNames = [
  'animate',
  'effect',
  'lifecycle',
  'sensors',
  'state',
  'ui',
  'miscellaneous'
]

const markdowns = import.meta.glob('../**/*.md', { eager:true, as:'raw' })

export const functions = Object.entries(markdowns)
  .filter(item=>{
    const [_, category, filename] = item[0].split('/')
    return categoryNames.includes(category) && filename !== 'index.md'
  })
  .map(item=>{
    const [_, category, filename ] = item[0].split('/')
    const name = filename.split('.')[0]

    const pattern = new RegExp(`#\\s+${name}\\s*(.+?\\.).*##`, 'ms')
    const result = pattern.exec(item[1])
    const description = result ? result[1] : ''

    return {
      name,
      category,
      description
    }
  })
