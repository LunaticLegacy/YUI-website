---
title: 光影志 | 摄影贡献榜
---

<style>
  /* 全局样式重置 */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #0f1118; /* 深色背景增强发光效果 */
    font-family: "Noto Sans SC", "Microsoft YaHei", sans-serif;
    color: #fff;
    line-height: 1.6;
    padding: 3rem 0;
  }

  /* 页面容器 */
  .photo-hall {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 3%;
  }

  /* 页面标题区域 */
  .hall-header {
    text-align: center;
    margin-bottom: 8rem;
    position: relative;
  }

  .hall-title {
    font-size: 4rem;
    background: linear-gradient(90deg, #4facfe, #00f2fe);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    margin-bottom: 1rem;
    letter-spacing: 0.1em;
    text-shadow: 0 0 15px rgba(79, 172, 254, 0.5);
  }

  .hall-subtitle {
    font-size: 1.2rem;
    color: #bbb;
    font-weight: normal;
    max-width: 800px;
    margin: 0 auto;
  }

  /* 摄影贡献榜网格 */
  .photo-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 5rem;
  }

  /* 人物卡片容器 */
  .photo-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }

  /* 图片容器（带发光特效） */
  .photo-frame {
    position: relative;
    width: 100%;
    height: 400px;
    margin-bottom: 2rem;
    border-radius: 12px;
    overflow: hidden;
    /* 基础发光效果 */
    box-shadow: 0 0 15px rgba(79, 172, 254, 0.5),
                0 0 30px rgba(79, 172, 254, 0.3);
    transition: all 0.5s ease;
  }

  /* 现有贡献者特殊发光 */
  .existing .photo-frame {
    box-shadow: 0 0 20px rgba(79, 172, 254, 0.7),
                0 0 40px rgba(79, 172, 254, 0.4),
                0 0 60px rgba(79, 172, 254, 0.2);
  }

  /* 虚席以待发光效果（弱一些） */
  .vacant .photo-frame {
    box-shadow: 0 0 10px rgba(150, 150, 150, 0.3),
                0 0 20px rgba(150, 150, 150, 0.1);
  }

  /* 图片样式 */
  .photo-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    transition: transform 0.8s ease;
  }

  /* 浮动动画 */
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-15px); }
    100% { transform: translateY(0px); }
  }

  .photo-frame {
    animation: float 6s ease-in-out infinite;
  }

  /* 卡片hover时增强效果 */
  .photo-card:hover .photo-frame {
    transform: scale(1.02);
    box-shadow: 0 0 25px rgba(79, 172, 254, 0.8),
                0 0 50px rgba(79, 172, 254, 0.5);
  }

  .existing:hover .photo-img {
    transform: scale(1.05);
  }

  /* 文字区域（与图片分离） */
  .photo-info {
    text-align: center;
    padding: 0 1rem;
    width: 100%;
  }

  .photo-name {
    font-size: 1.5rem;
    margin-bottom: 0.8rem;
    color: #fff;
  }

  .existing .photo-name {
    background: linear-gradient(90deg, #4facfe, #00f2fe);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  .photo-slogan {
    font-size: 1.1rem;
    color: #bbb;
    line-height: 1.5;
    font-style: italic;
  }

  /* 贡献标识 */
  .photo-badge {
    position: absolute;
    top: -15px;
    right: 20px;
    background: linear-gradient(90deg, #4facfe, #00f2fe);
    color: white;
    font-size: 0.9rem;
    padding: 0.4rem 1rem;
    border-radius: 20px;
    font-weight: bold;
    box-shadow: 0 0 10px rgba(79, 172, 254, 0.5);
  }

  /* 虚席以待样式 */
  .vacant .photo-frame {
    background-color: #1a1d29;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .vacant .placeholder {
    text-align: center;
  }

  .vacant .placeholder i {
    font-size: 5rem;
    color: #333;
    text-shadow: 0 0 15px rgba(255, 255, 255, 0.1);
  }

  .vacant .photo-name {
    color: #888;
  }

  /* 响应式调整 */
  @media (max-width: 1024px) {
    .hall-title {
      font-size: 3.2rem;
    }
    .photo-frame {
      height: 350px;
    }
  }

  @media (max-width: 768px) {
    .photo-grid {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 4rem;
    }
    .photo-frame {
      height: 320px;
    }
  }

  @media (max-width: 480px) {
    .hall-title {
      font-size: 2.5rem;
    }
    .photo-grid {
      grid-template-columns: 1fr;
      gap: 3rem;
    }
    .photo-frame {
      height: 300px;
    }
  }
</style>

<div class="photo-hall">
  <!-- 页面标题 -->
  <div class="hall-header">
    <h1 class="hall-title">光影志</h1>
    <p class="hall-subtitle">镜头捕捉热爱，光影铭刻传奇——致敬用影像记录二次元的摄影者</p>
  </div>

  <!-- 摄影贡献榜 -->
  <div class="photo-grid">
    <!-- 人物1：现有贡献者 -->
    <div class="photo-card existing">
      <div class="photo-badge">首席摄影</div>
      <div class="photo-frame">
        <img src="https://pic.nwafu.xyz/images/639785b2839929c519e8fbfd0ad1554ac4242cc107d8b4876f3006f73ee15ace/1761739445490-6cs6s6dk-img_mhby6ees_6ihhc2.jpg" alt="摄影组 HB" class="photo-img">
      </div>
      <div class="photo-info">
        <h3 class="photo-name">摄影组 HB</h3>
        <p class="photo-slogan">「四代官摄，无冕之王」</p>
      </div>
    </div>
    <!-- 人物2：虚席以待 -->
    <div class="photo-card vacant">
      <div class="photo-frame">
        <div class="placeholder">
          <i>📷</i>
        </div>
      </div>
      <div class="photo-info">
        <h3 class="photo-name">虚席以待</h3>
        <p class="photo-slogan">「期待你的镜头，续写光影故事」</p>
      </div>
    </div>
    <!-- 人物3：虚席以待 -->
    <div class="photo-card vacant">
      <div class="photo-frame">
        <div class="placeholder">
          <i>📷</i>
        </div>
      </div>
      <div class="photo-info">
        <h3 class="photo-name">虚席以待</h3>
        <p class="photo-slogan">「期待你的镜头，续写光影故事」</p>
      </div>
    </div>
    <!-- 人物4：虚席以待 -->
    <div class="photo-card vacant">
      <div class="photo-frame">
        <div class="placeholder">
          <i>📷</i>
        </div>
      </div>
      <div class="photo-info">
        <h3 class="photo-name">虚席以待</h3>
        <p class="photo-slogan">「期待你的镜头，续写光影故事」</p>
      </div>
    </div>
  </div>
</div>