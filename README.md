# Vite Performance Starter

Vite + TypeScript + Lighthouse CI + バンドル可視化テンプレート

`npm install` → `npm run build` → `npm run perf:check` で起動最適化チェックを自動で行なう。

## デプロイ方法

```bash
# Cloudflare Pages
npm run build && npm run deploy:cf

# Netlify
npm run build && npm run deploy:netlify
```

## 運用のポイント

| フェーズ    | チームでやるべきこと                              |
| ------- | --------------------------------------- |
| **開発中** | `pnpm run report` で依存サイズを確認。不要ライブラリ削除。  |
| **PR時** | GitHub Actions で Lighthouse CI が自動チェック。 |
| **週次**  | Lighthouse 結果を蓄積して、トレンドをグラフ化。           |
| **月次**  | Performance Budget を見直し、閾値を調整。          |

## 拡張アイデア

- Lighthouse CI の結果はコメントとして GitHub 上に出力可能（ `@lhci/github-actions` を追加するとさらに便利）。
- `bundle-analyzer` を Vite の `analyze` コマンドとして組み込み
- `esbuild analyze` で軽量ビルド時の依存確認
- `performance.mark` / `performance.measure` をコード中に埋め込み、リアルな初期化コストを測定
- Cloudflare Pages / Netlify デプロイ前後で Lighthouse 自動比較

## 設定について

### `tools/performance-budget.json`

- `maxTotalBytes`: 圧縮後 JS 合計サイズ（200KB以内）
- `maxMainThreadTime`: JS解析＋実行時間（2秒以内）
- `maxLongTasks`: 50ms超のタスク数（10未満）

