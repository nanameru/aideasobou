/** @type {import('next').NextConfig} */
const nextConfig = {
  // Vercelでのデプロイに必要な設定
  // 静的エクスポートを無効化
  output: 'standalone',
  
  // TypeScriptのコンパイルエラーを無視
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // 画像ドメインの設定（必要に応じて）
  images: {
    domains: ['localhost'],
  },
  
  // ヘッダーの設定（必要に応じて）
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=3600',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
