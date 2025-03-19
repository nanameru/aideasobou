'use client';

import React from 'react';

// クライアントコンポーネントとしてCacheBusterを定義
export default function CacheBuster() {
  // クライアントサイドでのみ実行される処理
  // コンポーネントがマウントされた後に実行される処理
  if (typeof window !== 'undefined') {
    // クライアントサイドでのみ実行
    setTimeout(() => {
      // タイムスタンプを生成
      const timestamp = Date.now();
      
      // メタタグを追加してキャッシュ無効化を強制
      const meta = document.createElement('meta');
      meta.name = 'cache-control-timestamp';
      meta.content = timestamp.toString();
      document.head.appendChild(meta);
      
      // 非表示の要素を動的に追加
      const div = document.createElement('div');
      div.setAttribute('data-timestamp', timestamp.toString());
      div.style.display = 'none';
      document.body.appendChild(div);
    }, 0);
  }
  
  // 空のdivを返す（サーバーサイドレンダリングでも問題ないように）
  return <div style={{ display: 'none' }} />;
}
