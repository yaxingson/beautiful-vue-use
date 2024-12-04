import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  test:{
    globals:true,
    environment:'jsdom',
    include:['lib/**/*.spec.ts'],
    alias:{

    },
    coverage:{
      provider:'v8',
      include:['lib/**/*'],
      exclude:['lib/**/*.spec.ts', 'lib/**/dist/*'],
      reportOnFailure:true
    }
  },
  resolve:{
    alias:{

    }
  },
  define:{},
  ssr:{},
  plugins:[vue()]
})
