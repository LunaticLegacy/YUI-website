---
title: 技术组 | YUI动漫社
---

<style>
  /* 页面基础样式 */
  body {
    background-color: white;
    color: #333;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    line-height: 1.8;
    margin: 0;
    padding: 0;
  }

  /* 容器样式 */
  .tech-group-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 4rem 5%;
  }

  /* 标题区域 */
  .group-header {
    text-align: center;
    margin-bottom: 6rem;
    padding-bottom: 2rem;
    border-bottom: 2px solid #66ccff;
  }

  .group-name {
    font-size: 3.5rem;
    color: #3399ff;
    margin: 0 0 1.5rem 0;
    position: relative;
    display: inline-block;
  }

  .group-name::after {
    content: '';
    position: absolute;
    width: 80%;
    height: 4px;
    background: #66ccff;
    bottom: -8px;
    left: 10%;
    border-radius: 2px;
  }

  .group-motto {
    font-size: 1.3rem;
    color: #666;
    font-style: italic;
    margin: 2rem 0 0 0;
  }

  /* 内容区域通用样式 */
  .section {
    margin-bottom: 8rem;
  }

  .section-title {
    font-size: 2rem;
    color: #3399ff;
    margin: 0 0 3rem 0;
    padding-left: 1rem;
    border-left: 5px solid #66ccff;
  }

  /* 活动内容样式 */
  .activities-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2.5rem;
    margin-top: 2rem;
  }

  .activity-item {
    background: #f0f7ff;
    border-radius: 10px;
    padding: 2rem;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .activity-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(51, 153, 255, 0.1);
  }

  .activity-title {
    font-size: 1.5rem;
    color: #3399ff;
    margin: 0 0 1rem 0;
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }

  .activity-title i {
    font-size: 1.8rem;
  }

  .activity-desc {
    color: #555;
    line-height: 1.7;
    margin: 0;
  }

  /* 作品展示样式 */
  .showcase {
    margin-top: 3rem;
  }

  .showcase-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 2rem;
  }

  .showcase-item {
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s ease;
  }

  .showcase-item:hover {
    transform: scale(1.02);
  }

  .showcase-img {
    width: 100%;
    height: 220px;
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
    font-size: 1.2rem;
    margin: 0 0 0.5rem 0;
    color: #333;
  }

  .showcase-desc {
    font-size: 0.95rem;
    color: #666;
    margin: 0;
  }

  /* 响应式调整 */
  @media (max-width: 768px) {
    .group-name {
      font-size: 2.5rem;
    }
    .section {
      margin-bottom: 5rem;
    }
  }
</style>

<div class="tech-group-container">
  <!-- 组别名称与宗旨 -->
  <div class="group-header">
    <h1 class="group-name">技术组</h1>
    <p class="group-motto">宗旨：烙饼王，我当定了</p>
  </div>

  <!-- 组别介绍 -->
  <div class="section">
    <h2 class="section-title">关于技术组</h2>
    <p>技术组是社团的"幕后工程师团队"，负责用数字技术实现创意构想。无论是活动视频剪辑、3D动漫及特效制作，还是社团官网维护，都能看到我们的身影。我们欢迎对技术有热情的同学加入，无论是否有基础，只要愿意学习就能共同进步。</p>
    <p>我们的核心目标是：降低技术门槛，让更多人能通过技术表达对二次元的热爱，同时为社团活动提供稳定的技术支持。</p>
  </div>

  <!-- 活动内容 -->
  <div class="section">
    <h2 class="section-title">日常活动</h2>
    <div class="activities-list">
      <div class="activity-item">
        <h3 class="activity-title">
          <i>🎬</i> 视频制作工坊
        </h3>
        <p class="activity-desc">教授Pr、AE、PS等软件使用，涵盖动漫混剪、活动记录片制作、MMD动画制作渲染等内容。</p>
      </div>
      <div class="activity-item">
        <h3 class="activity-title">
          <i>💻</i> 技术分享会
        </h3>
        <p class="activity-desc">每月让组内大佬，分享图片后期（PS）、直播推流、网站搭建等技能与经验。</p>
      </div>
      <div class="activity-item">
        <h3 class="activity-title">
          <i>📱</i> 项目协作
        </h3>
        <p class="activity-desc">承接社团各类技术需求，如社娘模型制作、音频修饰剪辑、照片特效制作等，在实战中提升技能。</p>
      </div>
      <div class="activity-item">
        <h3 class="activity-title">
          <i>🎮</i> 创意技术探索
        </h3>
        <p class="activity-desc">尝试二次元与新兴技术结合，如AI辅助视图、虚拟主播模型搭建等创新项目。</p>
      </div>
    </div>
  </div>

  <!-- 作品展示 -->
  <div class="section">
    <h2 class="section-title">展示</h2>
    <div class="showcase">
      <div class="showcase-grid">
        <div class="showcase-item">
          <div class="showcase-img">
            <img src="https://picsum.photos/id/0/600/400" alt="特效制作">
          </div>
          <div class="showcase-info">
            <h3 class="showcase-title">特效制作</h3>
            <p class="showcase-desc">融合ps，AE制作特效，达成炫狂的效果。</p>
          </div>
        </div>
        <div class="showcase-item">
          <div class="showcase-img">
            <img src="https://picsum.photos/id/160/600/400" alt="社团官网改版设计">
          </div>
          <div class="showcase-info">
            <h3 class="showcase-title">社团官网改版设计</h3>
            <p class="showcase-desc">基于Vue开发的响应式网站，包含活动日历、成员作品库等功能模块。</p>
          </div>
        </div>
        <div class="showcase-item">
          <div class="showcase-img">
            <img src="https://picsum.photos/id/96/600/400" alt="动漫角色3D建模练习">
          </div>
          <div class="showcase-info">
            <h3 class="showcase-title">动漫角色3D建模练习</h3>
            <p class="showcase-desc">制作的社团吉祥物3D模型，可用于3D打印周边或VR场景展示。</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>