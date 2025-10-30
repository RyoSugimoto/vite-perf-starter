import { defineConfig } from 'vite';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    visualizer({
      filename: './dist/bundle-stats.html',
      gzipSize: true,
      brotliSize: true,
      template: 'treemap'
    })
  ],
  build: {
    target: 'esnext',
    sourcemap: true
  }
});
