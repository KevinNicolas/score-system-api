const esbuild = require("esbuild")

const { esbuildPluginNodeExternals } = require("esbuild-plugin-node-externals")

esbuild.build({
  entryPoints: ["./src/index.ts"],
  outdir: "./dist",
  tsconfig: "./tsconfig.json",
  bundle: true,
  minify: true,
  sourcemap: true,
  minifySyntax: true,
  minifyIdentifiers: true,
  minifyWhitespace: true,
  plugins: [esbuildPluginNodeExternals({ packagePaths: "./package.json" })],
  platform: "node",
})
