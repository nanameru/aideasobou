# ビジュアルアセット計画

## 必要なビジュアル素材

AIで遊ぼうコミュニティーのランディングページを視覚的に強化するために、以下のビジュアル素材が必要です。

### 1. ヒーローセクション用素材

#### 背景素材
- **AIネットワーク背景**: 抽象的なニューラルネットワークやAIの接続を表現するパターン
- **グラデーション背景**: 洗練された色のグラデーションで深みを表現
- **パーティクルアニメーション**: データポイントや接続を表現する動的な背景

#### メインビジュアル
- **AIコンセプトイラスト**: AIや機械学習を表現する高品質なイラスト
- **3Dレンダリング**: 未来的なAI技術を表現する3D要素
- **アニメーションロゴ**: コミュニティ名やコンセプトを表現するアニメーションロゴ

### 2. 特典セクション用素材

#### アイコンとイラスト
- **AI情報配信アイコン**: 日次情報配信を表現するアイコン
- **AIキャッチアップセッションアイコン**: 週次セッションを表現するアイコン
- **AI検索ツールアイコン**: 「ピタッとAI」を表現するアイコン

#### 背景要素
- **パターン背景**: 各カードの背景に使用する微妙なパターン
- **アクセント要素**: 視覚的な興味を引くアクセント図形やパターン

### 3. アプリケーションショーケース用素材

- **アプリモックアップ**: 「ピタッとAI」のインターフェースモックアップ
- **スクリーンショット**: 実際のアプリケーション画面のスクリーンショット
- **使用シーン**: アプリケーションの使用シーンを表現するイラスト

### 4. 全体的な装飾要素

- **装飾パターン**: ページ全体に使用できる微妙な装飾パターン
- **区切り要素**: セクション間の視覚的な区切りを表現する要素
- **アクセントシェイプ**: 視覚的な興味を引くための形状や要素

## 素材の入手方法

### 1. 既存のSVGアイコンの活用

現在、以下のSVGアイコンを入手済みです：
- `ai-network.svg`: AIネットワークを表現するアイコン
- `ai-brain.svg`: AI思考プロセスを表現するアイコン
- `ai-robot.svg`: AIロボットを表現するアイコン
- `ai-gradient.svg`: グラデーションパターンを表現するアイコン
- `ai-wave.svg`: データフローを表現するアイコン

これらのアイコンを拡張・カスタマイズして使用します。

### 2. カスタムSVGアニメーションの作成

以下のようなカスタムSVGアニメーションを作成します：

```jsx
// ニューラルネットワークアニメーション
const NetworkAnimation = () => {
  return (
    <svg width="500" height="300" viewBox="0 0 500 300">
      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      
      {/* ノード */}
      {nodes.map((node, i) => (
        <motion.circle
          key={i}
          cx={node.x}
          cy={node.y}
          r={5}
          fill="#ffffff"
          filter="url(#glow)"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0.5, 1] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.1,
          }}
        />
      ))}
      
      {/* 接続線 */}
      {connections.map((conn, i) => (
        <motion.line
          key={i}
          x1={conn.source.x}
          y1={conn.source.y}
          x2={conn.target.x}
          y2={conn.target.y}
          stroke="#ffffff"
          strokeWidth={1}
          strokeOpacity={0.5}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            delay: i * 0.05,
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 1,
          }}
        />
      ))}
    </svg>
  );
};
```

### 3. グラデーション背景の作成

CSSを使用して洗練されたグラデーション背景を作成します：

```css
.gradient-bg {
  background: linear-gradient(120deg, #2b5876 0%, #4e4376 100%);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
```

### 4. パーティクルアニメーションの実装

React-Tsparticlesを使用してインタラクティブなパーティクル背景を作成します：

```jsx
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticleBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
          },
          modes: {
            grab: {
              distance: 140,
              links: {
                opacity: 0.5,
              },
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: true,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};
```

## ビジュアル素材の最適化

### 1. 画像最適化

- SVGの最適化: SVGO等のツールを使用してSVGファイルを最適化
- 画像圧縮: WebP形式の使用や適切な圧縮レベルの設定
- 遅延読み込み: 画像の遅延読み込みによるパフォーマンス向上

### 2. アニメーション最適化

- GPU加速: `transform`や`opacity`プロパティを優先的に使用
- アニメーションのタイミング調整: 過度なアニメーションを避ける
- 条件付きレンダリング: 必要な場合のみアニメーションを表示

## 実装計画

### 1. ヒーローセクション

```jsx
<section className="hero-section relative overflow-hidden">
  {/* パーティクル背景 */}
  <div className="absolute inset-0 z-0">
    <ParticleBackground />
  </div>
  
  {/* グラデーション背景 */}
  <div className="absolute inset-0 z-0 opacity-50 gradient-bg"></div>
  
  {/* コンテンツ */}
  <div className="relative z-10 container mx-auto px-4 py-24">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center"
    >
      <div className="mb-10 inline-block">
        <NetworkAnimation />
      </div>
      <h1 className="text-5xl font-bold mb-6">AIで遊ぼうコミュニティー</h1>
      <p className="text-xl mb-10">
        最新のAI情報をキャッチアップし、AIの可能性を一緒に探求するコミュニティです。
      </p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="btn btn-primary"
      >
        今すぐ参加する
      </motion.button>
    </motion.div>
  </div>
</section>
```

### 2. 特典セクション

```jsx
<section className="features-section py-20">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-16">コミュニティの特典</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="feature-card"
        >
          <div className="icon-wrapper mb-6">
            {feature.icon}
          </div>
          <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
          <p>{feature.description}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>
```

## 注意点

- ビジュアル素材は、Notion風のミニマルな美学を維持しつつ、視覚的な豊かさを追加するものであること
- 過度に派手なビジュアルは避け、洗練された印象を与えるデザインを目指す
- モバイルデバイスでも適切に表示されるよう、レスポンシブデザインを考慮する
- パフォーマンスを考慮し、重いアニメーションや大きな画像ファイルは避ける
