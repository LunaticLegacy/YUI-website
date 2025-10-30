---
title: 宅舞组 | YUI动漫社
---

<style>
  /* 全局盒模型初始化 */
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* 页面基础样式 */
  body {
    background-color: white;
    color: #333;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    line-height: 1.8;
  }

  /* 主容器 */
  .dance-group-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 4rem 5%;
  }

  /* 标题区域 */
  .group-header {
    text-align: center;
    margin-bottom: 6rem;
    padding: 0 1rem 3rem;
    border-bottom: 2px solid #ff9966;
  }

  .group-name {
    font-size: 10rem;
    color: #ff6633;
    margin: 0 0 1.5rem 0;
    position: relative;
    display: inline-block;
    line-height: 1.2;
  }

  .group-name::after {
    content: '';
    position: absolute;
    width: 80%;
    height: 4px;
    background: #ff9966;
    bottom: -14px;
    left: 10%;
    border-radius: 2px;
  }

  .group-motto {
    font-size: 2rem;
    color: #ff6633;
    font-style: italic;
    margin: 2rem 0 0 0;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }

  /* 内容区域通用样式 */
  .section {
    margin-bottom: 8rem;
    padding: 0 1rem;
  }

  .section-title {
    font-size: 5rem;
    color: #ff6633;
    margin: 0 0 3rem 0;
    padding-left: 1rem;
    border-left: 5px solid #ff9966;
    line-height: 1.4;
    display: inline-block;
  }

  /* 组别介绍文字 */
  .section p {
    max-width: 900px;
    margin-bottom: 1.5rem;
    font-size: 2rem;
    line-height: 2;
    padding: 0 0.5rem;
  }

  /* 活动内容样式 */
  .activities-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2.5rem;
    margin-top: 2rem;
  }

  .activity-item {
    background: #fff5f0;
    border-radius: 10px;
    padding: 2rem;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    min-height: 100%;
  }

  .activity-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(255, 153, 102, 0.15);
  }

  .activity-title {
    font-size: 5rem;
    color: #ff6633;
    margin: 0 0 1rem 0;
    display: flex;
    align-items: center;
    gap: 0.8rem;
    line-height: 1.4;
  }

  .activity-title i {
    font-size: 3rem;
  }

  .activity-desc {
    color: #555;
    line-height: 2;
    margin: 0;
    font-size: 2rem;
    word-break: break-word;
  }

  /* 作品展示样式 */
  .showcase {
    margin-top: 3rem;
  }

  .showcase-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 2fr));
    gap: 2rem;
  }

  .showcase-item {
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s ease;
  }

  .showcase-item:hover {
    transform: translateY(-5px);
  }

  .showcase-img {
    width: 100%;
    height: 300px;
    overflow: hidden;
  }

  .showcase-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  .showcase-item:hover .showcase-img img {
    transform: scale(1.05);
  }

  .showcase-info {
    padding: 1.5rem;
    background: white;
  }

  .showcase-title {
    font-size: 3rem;
    margin: 0 0 0.5rem 0;
    color: #333;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .showcase-desc {
    font-size: 2rem;
    color: #666;
    margin: 0;
    line-height: 2;
    word-break: break-word;
  }

  /* 响应式调整 */
  @media (max-width: 768px) {
    .group-name {
      font-size: 2.5rem;
    }
    .section {
      margin-bottom: 5rem;
    }
    .showcase-grid {
      grid-template-columns: 1fr;
    }
    .showcase-img {
      height: 250px;
    }
  }
</style>

<div class="dance-group-container">
  <!-- 组别名称与宗旨 -->
  <div class="group-header">
    <h1 class="group-name">宅舞组</h1>
    <p class="group-motto">宅舞组三要素：饼，炮，鸽</p>
  </div>

  <!-- 组别介绍 -->
  <div class="section">
    <h2 class="section-title">关于宅舞组</h2>
    <p>宅舞组是社团的“舞台活力担当”，专注于二次元宅舞的学习、编排与表演。无论是经典动漫OP/ED、热门同人舞蹈，还是原创编舞，我们都以元气满满的姿态，将二次元的快乐与热血通过肢体语言传递给每一位观众。无论你是否有舞蹈基础，只要喜欢二次元音乐与舞蹈，都能在这里从零开始，收获技能与伙伴。</p>
    <p>我们的核心目标是：打破“跳舞难”的壁垒，让更多人享受宅舞的乐趣。组内定期开展基础训练、成品舞教学、舞台编排等活动，同时积极参与校内晚会、漫展演出，为成员提供展示自我的舞台，让每一个热爱舞蹈的人都能在这里发光发热。</p>
  </div>

  <!-- 活动内容 -->
  <div class="section">
    <h2 class="section-title">日常活动</h2>
    <div class="activities-list">
      <div class="activity-item">
        <h3 class="activity-title">
          <i>🧘</i> 基础体能训练
        </h3>
        <p class="activity-desc">开展柔韧性、协调性、节奏感训练，教授基础舞蹈动作与发力方式，为后续学舞打下扎实基础，新手也能轻松跟上。</p>
      </div>
      <div class="activity-item">
        <h3 class="activity-title">
          <i>🎵</i> 成品舞教学
        </h3>
        <p class="activity-desc">按难度分级教学热门宅舞作品，从单人舞到多人齐舞，拆解动作细节、纠正姿态，确保成员能完整掌握并呈现舞蹈。</p>
      </div>
      <div class="activity-item">
        <h3 class="activity-title">
          <i>💃</i> 原创编舞创作
        </h3>
        <p class="activity-desc">结合热门二次元音乐，集体讨论编舞思路，设计符合歌曲风格的动作与队形，打造专属宅舞组的原创作品。</p>
      </div>
      <div class="activity-item">
        <h3 class="activity-title">
          <i>�舞台彩排</i>
        </h3>
        <p class="activity-desc">针对演出需求进行舞台走位、表情管理、服装搭配训练，模拟现场灯光与音效，确保演出时呈现最佳状态。</p>
      </div>
    </div>
  </div>

  <!-- 作品展示 -->
  <div class="section">
    <h2 class="section-title">舞蹈作品</h2>
    <div class="showcase">
      <div class="showcase-grid">
        <div class="showcase-item">
          <div class="showcase-img">
            <img src="https://picsum.photos/id/64/600/800" alt="1">
          </div>
          <div class="showcase-info">
            <h3 class="showcase-title"></h3>
            <p class="showcase-desc"></p>
          </div>
        </div>
        <div class="showcase-item">
          <div class="showcase-img">
            <img src="https://picsum.photos/id/26/600/800" alt="2">
          </div>
          <div class="showcase-info">
            <h3 class="showcase-title"></h3>
            <p class="showcase-desc"></p>
          </div>
        </div>
        <div class="showcase-item">
          <div class="showcase-img">
            <img src="https://picsum.photos/id/342/600/800" alt="3">
          </div>
          <div class="showcase-info">
            <h3 class="showcase-title"></h3>
            <p class="showcase-desc"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>