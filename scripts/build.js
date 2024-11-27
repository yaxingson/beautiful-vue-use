#!/usr/bin/env node
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { readdirSync } from 'node:fs'
import { rollup } from 'rollup'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'

const __dirname = dirname(fileURLToPath(import.meta.url))

const pkgs = readdirSync(resolve(__dirname, '../lib'))

async function build(inputOptions, outputOptions) {
  try {
    const bundle = await rollup(inputOptions)
    await bundle.write(outputOptions)
  } catch(e) {
    throw e
  }
}

async function startBuild() {
  for(const pkg of pkgs) {
    const inputOptions = {
      input:resolve(__dirname, `../lib/${pkg}/index.ts`),
      plugins:[typescript()]
    }

    const outputOptions = {
      file:resolve(__dirname, `../lib/${pkg}/dist/index.js`),
      format:'esm'
    }

    await build(inputOptions, outputOptions)
  }

  for(const pkg of pkgs) {
    const inputOptions = {
      input:resolve(__dirname, `../lib/${pkg}/index.ts`),
      plugins:[dts()]
    }

    const outputOptions = {
      file:resolve(__dirname, `../lib/${pkg}/dist/index.d.ts`),
      format:'esm'
    }

    await build(inputOptions, outputOptions)
  }



  const inputOptions = {
    input:resolve(__dirname, `../index.ts`),
    plugins:[
      typescript(),
      nodeResolve({
        resolveOnly:[/^@beautiful-vue-use/]
      })
    ]
  }

  const outputOptions = [
    {
      file:resolve(__dirname, `../dist/index.js`),
      format:'esm'
    },
    {
      file:resolve(__dirname, '../dist/index.umd.js'),
      format:'umd',
      name:'BeautifulVueUse',
      globals:{
        vue:'Vue'
      }
    },
    {
      file:resolve(__dirname, '../dist/index.umd.min.js'),
      format:'umd',
      name:'BeautifulVueUse',
      globals:{
        vue:'Vue'
      },
      plugins:[terser()]
    },
  ]

  for(const outputOption of outputOptions) {
    await build(inputOptions, outputOption)
  }

  await build({
    input:resolve(__dirname, `../index.ts`),
    external:['vue', '@vue/reactivity'],
    plugins:[
      dts({
        respectExternal:true
      })
    ]
  }, {
    file:resolve(__dirname, `../dist/index.d.ts`),
    format:'esm'
  })

}

startBuild()
