import { defineConfig } from 'vite';
import vituum from 'vituum';
import nunjucks from '@vituum/vite-plugin-nunjucks';
import VitePluginSvgSpritemap from '@spiriit/vite-plugin-svg-spritemap';
import { viteStaticCopy } from 'vite-plugin-static-copy'; // 1. Import the plugin

export default defineConfig(({ command, mode }) => {
  const isProduction = mode === 'production';
  const isDevBuild = mode === 'development-build';

  // Визначаємо шлях до спрайту залежно від режиму
  const spritemapPath =
    isProduction || isDevBuild ? '/assets/spritemap.svg' : '/__spritemap';

  return {
    plugins: [
      VitePluginSvgSpritemap('./src/assets/icons/*.svg', {
        prefix: 'icon-',
        injectSVGOnDev: true, // Залишаємо цю опцію
        output: {
          filename: 'spritemap.svg',
        },
      }),
      vituum(),
      nunjucks({
        root: './src',
        globals: {
          spritemap: spritemapPath,
        },
      }),
      // 2. Add plugin for copying
      viteStaticCopy({
        targets: [
          {
            src: 'node_modules/@shoelace-style/shoelace/dist/assets',
            dest: 'shoelace',
          },
        ],
      }),
    ],
    build: {
      outDir: isDevBuild ? 'dist-dev' : 'dist',
      minify: isDevBuild ? false : 'esbuild',
      cssMinify: isDevBuild ? false : 'esbuild',
      rollupOptions: {
        output: {
          // Дозвольте Vite керувати іменем spritemap.svg для продакшену
          assetFileNames: (assetInfo) => {
            if (/\.(css)$/.test(assetInfo.name)) {
              return `assets/css/[name]-[hash][extname]`;
            }
            return `assets/[name]-[hash][extname]`;
          },
          chunkFileNames: 'assets/js/[name]-[hash].js',
          entryFileNames: 'assets/js/[name]-[hash].js',
        },
      },
    },
  };
});
