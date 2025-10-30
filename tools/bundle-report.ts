// どの依存が重いかを可視化してレビュー可能に。

import { visualizer } from 'rollup-plugin-visualizer';
import { build } from 'vite';

await build({
  plugins: [
    visualizer({
      filename: './dist/bundle-stats.html',
      gzipSize: true,
      brotliSize: true,
      template: 'treemap'
    })
  ]
});

console.log('✅ バンドルレポート生成完了: dist/bundle-stats.html');
