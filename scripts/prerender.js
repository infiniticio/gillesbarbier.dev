import fs from 'node:fs/promises'
import { render } from '../dist/server/entry-server.js'

async function prerender() {
  const template = await fs.readFile('./dist/client/index.html', 'utf-8')
  const { html } = render()

  const finalHtml = template.replace(`<!--app-html-->`, html ?? '')

  await fs.writeFile('./dist/client/index.html', finalHtml)
  console.log('Static HTML pre-rendered successfully!')
}

prerender()
