// 🚨 CIで自動的に Lighthouse を走らせ、「JSが重くなったら失敗」させる設定。
// ✅ Pull Request で自動チェックが可能。

module.exports = {
  ci: {
    collect: {
      staticDistDir: './dist',
      url: ['http://localhost:4173/'],
      numberOfRuns: 3
    },
    assert: {
      assertions: {
        'first-contentful-paint': ['error', { maxNumericValue: 2000 }],
        'interactive': ['error', { maxNumericValue: 5000 }],
        'bootup-time': ['warn', { maxNumericValue: 3000 }],
        'total-byte-weight': ['warn', { maxNumericValue: 200000 }]
      }
    },
    upload: {
      target: 'temporary-public-storage'
    }
  }
};
