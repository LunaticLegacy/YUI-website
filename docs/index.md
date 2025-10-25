---
title: YUI动漫社
---

<!-- 全局样式：清除默认边距和背景 -->
<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: transparent !important;
  }
</style>

<!-- 根容器：全屏背景 + 内容布局 -->
<div class="yui-community" style="
  background-image: url('https://pic.nwafu.xyz/images/639785b2839929c519e8fbfd0ad1554ac4242cc107d8b4876f3006f73ee15ace/1761288116445-tf53erp2-img_mh4hgqd1_nl04rt.png');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  min-height: 100vh;
  position: relative;
  padding: 2rem;
">
  <!-- 半透明遮罩（增强文字可读性） -->
  <div style="
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(10, 10, 22, 0.4);
    z-index: 1;
  "></div>

  <!-- 主内容区域（在遮罩上方） -->
  <div style="position: relative; z-index: 2;">
    <!-- 角色展示图（居左） -->
    <div class="character-container" style="
      float: left;  /* 左对齐 */
      width: 40%;   /* 占40%宽度 */
      padding: 2rem;
      min-width: 300px;
    ">
      <img src="https://pic.nwafu.xyz/images/639785b2839929c519e8fbfd0ad1554ac4242cc107d8b4876f3006f73ee15ace/1761301412621-jm7lkk17-img_mh4pdvqj_qbv741.png" 
           alt="社团形象角色" 
           style="
             width: 100%;
             height: auto;
             border: 2px solid rgba(255, 255, 255, 0.8);
             border-radius: 8px;
             box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
           ">
    </div>
    <!-- 右侧留白（避免内容被角色图遮挡） -->
    <div style="float: right; width: 60%;"></div>
    <!-- 清除浮动，确保下方图片区域独立 -->
    <div style="clear: both;"></div>
    <!-- 三张图片横向排列（下方） -->
    <div class="image-showcase" style="
      display: flex;
      gap: 2rem;
      justify-content: center;
      align-items: center;
      padding: 2rem;
      width: 100%;
      margin-top: 2rem;  /* 与上方角色图保持距离 */
">
      <!-- 第一张图 -->
      <div class="image-card" style="
        width: 30%;
        min-width: 200px;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        transition: transform 0.3s ease;
">
        <img src="https://pic.nwafu.xyz/images/639785b2839929c519e8fbfd0ad1554ac4242cc107d8b4876f3006f73ee15ace/1761301445019-a586l1o6-img_mh4pelfn_kj5fd5.jpg" 
             alt="社团qq群" 
             style="width: 100%; height: 100%; object-fit: cover;">
      </div>
      <!-- 第二张图 -->
      <div class="image-card" style="
        width: 30%;
        min-width: 200px;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        transition: transform 0.3s ease;
  ">
        <img src="https://pic.nwafu.xyz/images/639785b2839929c519e8fbfd0ad1554ac4242cc107d8b4876f3006f73ee15ace/1761301462123-2m780dkg-img_mh4peyqh_s96r8t.jpg" 
             alt="社团b站号" 
             style="width: 100%; height: 100%; object-fit: cover;">
      </div>
      <!-- 第三张图 -->
      <div class="image-card" style="
        width: 30%;
        min-width: 200px;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        transition: transform 0.3s ease;
      ">
        <img src="https://pic.nwafu.xyz/images/639785b2839929c519e8fbfd0ad1554ac4242cc107d8b4876f3006f73ee15ace/1761301476772-ztijvwdf-img_mh4pfa1f_cblgb8.jpg" 
             alt="社团社娘" 
             style="width: 100%; height: 100%; object-fit: cover;">
      </div>
    </div>
  </div>
</div>