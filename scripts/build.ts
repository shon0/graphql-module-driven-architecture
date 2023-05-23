import esbuild from 'esbuild'

await esbuild.build({
  bundle: true,
  entryPoints: ['./src/server.ts'],
  outdir: './dist',
  platform: 'node',
  format: 'esm',
})
