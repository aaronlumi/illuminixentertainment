import netlifyBuild from '@hono/vite-build/netlify-functions'
import cloudflareBuild from '@hono/vite-build/cloudflare-pages'
import devServer from '@hono/vite-dev-server'
import { defineConfig } from 'vite'

const isNetlify = process.env.BUILD_TARGET !== 'cloudflare'

export default defineConfig({
  plugins: [
    isNetlify ? netlifyBuild() : cloudflareBuild(),
    devServer({
      entry: 'src/index.tsx'
    })
  ]
})
