# アニメーション実装計画

## Framer Motionの活用

Framer Motionは、Reactアプリケーションに洗練されたアニメーションを簡単に実装できるライブラリです。以下の機能を活用します：

### 1. 基本的なアニメーション

```jsx
import { motion } from "framer-motion";

// 基本的なフェードイン
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  コンテンツ
</motion.div>

// 複数のプロパティのアニメーション
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  コンテンツ
</motion.div>
```

### 2. スクロールトリガーアニメーション

```jsx
import { motion, useScroll } from "framer-motion";

// 要素が画面に入ったときにアニメーション
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
>
  スクロールで表示されるコンテンツ
</motion.div>
```

### 3. ホバーとタップのアニメーション

```jsx
// ホバーとタップのアニメーション
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  transition={{ type: "spring", stiffness: 400, damping: 17 }}
>
  ボタン
</motion.button>
```

### 4. シーケンスアニメーション

```jsx
// 子要素の段階的表示
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

<motion.ul
  variants={container}
  initial="hidden"
  animate="show"
>
  {items.map((item, index) => (
    <motion.li key={index} variants={item}>
      {item}
    </motion.li>
  ))}
</motion.ul>
```

## ヒーローセクションの実装

### 1. 背景アニメーション

```jsx
// グラデーション背景アニメーション
<motion.div
  className="absolute inset-0 z-0"
  style={{
    background: "linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)"
  }}
  animate={{
    backgroundPosition: ["0% 0%", "100% 100%"],
  }}
  transition={{
    duration: 20,
    repeat: Infinity,
    repeatType: "reverse"
  }}
/>
```

### 2. タイトルアニメーション

```jsx
// 文字ごとのアニメーション
const title = "AIで遊ぼうコミュニティー";
const titleArray = title.split("");

<div className="flex justify-center">
  {titleArray.map((char, index) => (
    <motion.span
      key={index}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
    >
      {char}
    </motion.span>
  ))}
</div>
```

### 3. SVGアニメーション

```jsx
// パスアニメーション
<motion.path
  d="M0 100L50 50L100 100"
  initial={{ pathLength: 0 }}
  animate={{ pathLength: 1 }}
  transition={{ duration: 2, ease: "easeInOut" }}
/>
```

## カードとコンポーネントのアニメーション

### 1. カードホバーエフェクト

```jsx
// 高度なカードホバーエフェクト
<motion.div
  className="card"
  whileHover={{
    scale: 1.03,
    boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
  }}
  transition={{ type: "spring", stiffness: 300 }}
>
  カードコンテンツ
</motion.div>
```

### 2. スクロールトリガーカード

```jsx
// スクロールで表示されるカード
<motion.div
  className="card"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.7 }}
>
  カードコンテンツ
</motion.div>
```

### 3. 3Dカードエフェクト

```jsx
// マウス位置に応じた3D効果
function Card() {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    setRotateX(rotateX);
    setRotateY(rotateY);
  };

  return (
    <motion.div
      className="card"
      style={{
        transformStyle: "preserve-3d",
      }}
      animate={{
        rotateX,
        rotateY,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        setRotateX(0);
        setRotateY(0);
      }}
    >
      カードコンテンツ
    </motion.div>
  );
}
```

## ページロードアニメーション

```jsx
// ページロードシーケンス
const pageVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

<motion.div
  variants={pageVariants}
  initial="initial"
  animate="animate"
>
  <motion.header variants={itemVariants}>
    ヘッダーコンテンツ
  </motion.header>
  <motion.section variants={itemVariants}>
    ヒーローセクション
  </motion.section>
  <motion.section variants={itemVariants}>
    特典セクション
  </motion.section>
  {/* 他のセクション */}
</motion.div>
```

## パフォーマンス最適化

- `whileInView`の`once`プロパティを`true`に設定して、一度だけアニメーションを実行
- 複雑なアニメーションには`useReducedMotion`フックを使用して、ユーザーの設定に応じてアニメーションを削減
- 大きな画像やSVGは事前に最適化
- アニメーションの`duration`と`delay`を適切に設定して、ページの読み込み時間を最適化

```jsx
import { useReducedMotion } from "framer-motion";

function OptimizedAnimation() {
  const shouldReduceMotion = useReducedMotion();
  
  const transition = shouldReduceMotion
    ? { duration: 0 }
    : { duration: 0.5, type: "spring" };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={transition}
    >
      コンテンツ
    </motion.div>
  );
}
```

## モバイル対応

- タッチインタラクションの最適化
- 小さな画面サイズでのアニメーション調整
- パフォーマンスを考慮したモバイル向けの軽量アニメーション

```jsx
// レスポンシブアニメーション
function ResponsiveAnimation() {
  const isMobile = window.innerWidth < 768;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: isMobile ? 10 : 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: isMobile ? 0.3 : 0.7 }}
    >
      コンテンツ
    </motion.div>
  );
}
```
