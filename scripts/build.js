#!/usr/bin/env node
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { readdirSync } from 'node:fs'
import { rollup } from 'rollup'
import typescript from '@rollup/plugin-typescript'

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

  const inputOptions = {
    input:resolve(__dirname, `../index.ts`),
    plugins:[typescript()]
  }

  const outputOptions = {
    file:resolve(__dirname, `../dist/index.js`),
    format:'esm'
  }

  await build(inputOptions, outputOptions)
}

startBuild()
