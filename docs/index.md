---
title: YUI动漫社
---

<!-- 根容器：使用在线全屏背景图 -->
<div class="yui-community" style="
  background-image: url('https://pic.nwafu.xyz/images/639785b2839929c519e8fbfd0ad1554ac4242cc107d8b4876f3006f73ee15ace/1761314728097-qoiiped0-img_mh4xb9vr_5ax1rm.png'); /* 动漫风格背景图 */
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  position: relative;
">
  <!-- 半透明遮罩（增强文字可读性，可选） -->
  <div style="
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(10, 10, 22, 0.4);
    z-index: 1;
  "></div>

  <!-- 主视觉区域（内容在遮罩之上） -->
  <section class="hero-section" style="
    position: relative;
    z-index: 2;
    min-height: calc(100vh - 60px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    gap: 3rem;
  ">
    <!-- 角色展示图（放大2倍，使用在线图片） -->
    <div class="character-display" style="
      transform: scale(2);
      margin: 50px 0;
      text-align: center;
    ">
      <img src="https://pic.nwafu.xyz/images/639785b2839929c519e8fbfd0ad1554ac4242cc107d8b4876f3006f73ee15ace/1761301412621-jm7lkk17-img_mh4pdvqj_qbv741.png" 
           alt="社团形象角色"
           style="
             width: auto;
             height: auto;
             border: 2px solid rgba(255, 255, 255, 0.8);
             border-radius: 8px;
           ">
    </div>
    <!-- 三个图片容器（使用在线图片） -->
    <div class="image-showcase" style="
      display: flex;
      gap: 2rem;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      width: 100%;
      max-width: 1800px;
">
      <!-- 第一个容器：自适应大小 -->
      <div class="image-card" style="
        width: auto;
        height: auto;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  ">
        <img src="https://pic.nwafu.xyz/images/639785b2839929c519e8fbfd0ad1554ac4242cc107d8b4876f3006f73ee15ace/1761301445019-a586l1o6-img_mh4pelfn_kj5fd5.jpg" 
             alt="社团qq群"
             style="
               width: auto;
               height: auto;
               object-fit: contain;
             ">
  </div>
      <!-- 第二个容器：固定570×597 -->
      <div class="image-card" style="
        width: 570px;
        height: 597px;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  ">
        <img src="https://pic.nwafu.xyz/images/639785b2839929c519e8fbfd0ad1554ac4242cc107d8b4876f3006f73ee15ace/1761301462123-2m780dkg-img_mh4peyqh_s96r8t.jpg" 
             alt="社团b站号"
             style="
               width: 100%;
               height: 100%;
               object-fit: contain;
             ">
      </div>
      <!-- 第三个容器：固定861×355 -->
      <div class="image-card" style="
        width: 861px;
        height: 355px;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  ">
        <img src="https://pic.nwafu.xyz/images/639785b2839929c519e8fbfd0ad1554ac4242cc107d8b4876f3006f73ee15ace/1761301476772-ztijvwdf-img_mh4pfa1f_cblgb8.jpg"
             alt="社团社娘"
             style="
               width: 100%;
               height: 100%;
               object-fit: contain;
             ">
      </div>
    </div>
  </section>
</div>