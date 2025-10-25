---
title: YUI动漫社
---

<!-- 根容器：全屏背景 -->
<div class="yui-community" style="
  background-image: url('https://pic.nwafu.xyz/images/639785b2839929c519e8fbfd0ad1554ac4242cc107d8b4876f3006f73ee15ace/1761314728097-qoiiped0-img_mh4xb9vr_5ax1rm.png') !important;
  background-size: cover !important;
  background-position: center !important;
  background-attachment: fixed !important;
  background-repeat: no-repeat !important;
  min-height: 100vh !important;
  width: 100vw !important;
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  margin: 0 !important;
  padding: 0 !important;
  z-index: 1 !important;
">
  <!-- 主内容区域 -->
  <div style="position: relative; z-index: 2; padding: 2rem; max-width: 1200px; margin: 0 auto;">
    <!-- 角色图（无框+浮动效果） -->
    <div class="character-display" style="
      float: left;
      width: 40%;
      min-width: 300px;
      padding: 2rem;
      animation: float 6s ease-in-out infinite;
    ">
      <img src="https://pic.nwafu.xyz/images/639785b2839929c519e8fbfd0ad1554ac4242cc107d8b4876f3006f73ee15ace/1761301412621-jm7lkk17-img_mh4pdvqj_qbv741.png" 
           alt="社团形象角色" 
           style="
             width: 100%;
             height: auto;
             /* 移除边框：删除border属性 */
             border-radius: 8px; /* 保留圆角（可选要可删除） */
             box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2); /* 保留阴影（可选） */
             transition: box-shadow 0.5s ease;
           ">
    </div>
    <!-- 右侧留白 -->
    <div style="float: right; width: 60%;"></div>
    <div style="clear: both;"></div>
    <!-- 三张图片（无框） -->
    <div class="image-showcase" style="
      display: flex;
      gap: 2rem;
      justify-content: center;
      align-items: center;
      padding: 2rem;
      width: 100%;
      margin-top: 2rem;
    ">
      <div class="image-card" style="
        width: 30%;
        min-width: 200px;
        border-radius: 8px; /* 容器要可删除 */
        overflow: hidden;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3); /* 保留要可删除 */
        transition: transform 0.3s ease;
      ">
        <img src="https://pic.nwafu.xyz/images/639785b2839929c519e8fbfd0ad1554ac4242cc107d8b4876f3006f73ee15ace/1761301445019-a586l1o6-img_mh4pelfn_kj5fd5.jpg" 
             alt="社团qq群" style="width: 100%; height: 100%; object-fit: cover; border: none !important;"> <!-- 强制边框 -->
      </div>
      <div class="image-card" style="
        width: 30%;
        min-width: 200px;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        transition: transform 0.3s ease;
      ">
        <img src="https://pic.nwafu.xyz/images/639785b2839929c519e8fbfd0ad1554ac4242cc107d8b4876f3006f73ee15ace/1761408184417-f90n79eq-img_mh6gyd9s_wh3dco.jpg" 
             alt="社团b站号" style="width: 100%; height: 100%; object-fit: cover; border: none !important;">
      </div>
      <div class="image-card" style="
        width: 30%;
        min-width: 200px;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        transition: transform 0.3s ease;
      ">
        <img src="https://pic.nwafu.xyz/images/639785b2839929c519e8fbfd0ad1554ac4242cc107d8b4876f3006f73ee15ace/1761408344580-6smzvroq-img_mh6h1s4d_o4ogfr.png" 
             alt="社团社娘" style="width: 100%; height: 100%; object-fit: cover; border: none !important;">
      </div>
    </div>
  </div>
</div>