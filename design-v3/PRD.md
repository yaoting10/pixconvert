

**Image Converter 工具站 PRD**

  

**0. 结论先行**

  

| 问题 | 结论 |

|---|---|

| **要不要做** | **可以做，但必须切细分场景，不能正面硬刚全能型竞品** |

| **为什么做** | 100k 月搜索量，KD 41 中等，需求稳定 20+ 年。纯前端 WASM 方案可将首版成本压到极低，且隐私卖点在当前环境有差异化空间。 |

| **一句话定位** | 一个完全在浏览器本地完成转换的免费图片格式转换器——文件不上传服务器，3 秒出结果。 |

| **首版做什么** | 纯前端 WASM 图片转换核心（JPG↔PNG↔WebP↔AVIF↔BMP↔GIF↔TIFF）+ 批量转换 + SEO 页面矩阵 |

| **明确不做什么** | 视频/音频/文档转换、云端存储、用户账户系统、复杂 API、AI 增强功能 |

  

---

  

**1. 市场概述**

  

| 指标 | 数据 | 判断 |

|---|---|---|

| 目标关键词 | image converter / convert image to png / jpg to webp 等 | 核心词 + 大量长尾组合 |

| 主词月搜索量 | ~100k（英文全球） | **高**，但注意这是集群词总量 |

| KD | 41 | 中等偏难。独立站可以打进去，但需要时间（6-12 个月） |

| CPC | 未知 | 假设中等（$0.5-$2），工具站商业化路径清晰 |

| 趋势 | 长期稳定 | **非热点**，是持续 20 年的刚需，无衰减迹象 |

| 新格式驱动力 | WebP/AVIF 普及 | Google PageSpeed 推动站长批量转 WebP/AVIF，带来新增量 |

  

**机会判断**：成熟红海，但有结构性切口。现有竞品（FreeConvert/CloudConvert/Online-Convert）都是**上传-服务器处理-下载**模式，存在隐私顾虑和等待时间。纯前端本地处理是明确的差异化锚点。

  

---

  

**2. SERP 与竞品分析**

  

**2.1 SERP 格局（image converter）**

  

| 类型 | 占比 | 代表 |

|---|---|---|

| **在线工具页** | ~70% | iloveimg.com, convertio.co, freeconvert.com, online-convert.com |

| **大平台工具** | ~15% | Adobe Express, Canva, Google Images |

| **列表/对比文章** | ~10% | "Best image converters 202X" 类评测 |

| **信息型（教程）** | ~5% | "How to convert JPG to PNG" |

  

**搜索意图判断**：**工具型（Transactional）**。用户打开 Google 就是想立刻转换一张图片，不想读文章。首屏必须能直接用工具。

  

**关键观察**：

- 前 10 里有 5+ 个独立小站，说明**小站有机会**

- 但前 3 被 iloveimg、convertio、freeconvert 占据，这些站有极强的域名权重和用户留存

- 长尾词（"jpg to png", "png to webp", "heic to jpg"）竞争度更低，是切入口

  

**2.2 竞品深度拆解**

  

| 维度 | FreeConvert | CloudConvert | Online-Convert |

|---|---|---|---|

| **定位** | 免费全能转换器 | 企业级文件转换 API + 工具 | 老牌免费在线转换 |

| **覆盖格式** | 200+（跨文档/图片/视频/音频） | 212 格式，11 个类别，图片 42 种 | 多类别，图片是子集 |

| **技术模式** | 服务器端处理 | 服务器端 + 容器隔离 | 服务器端处理 |

| **核心卖点** | 免费、简单、多语言（12+） | 安全（ISO 27001）、API、高质量 | 免费、分类清晰 |

| **定价** | $12.99/月起（去广告+大文件） | Credits 按需付费 | 免费+付费去限制 |

| **SEO 结构** | 强。每个格式组合有独立页面 | 极强。/jpg-converter, /png-converter 等 | 中等 |

| **弱点** | 文件上传服务器、广告多、加载慢 | 贵、对普通用户过重 | UI 老旧、广告密集 |

  

**2.3 三层竞品分级**

  

| 层级 | 竞品 | 威胁度 | 策略 |

|---|---|---|---|

| **Tier 1 直接** | iloveimg.com, convertio.co, freeconvert.com | 高 | 不正面拼功能数量，拼**速度和隐私** |

| **Tier 2 相邻** | Canva, Adobe Express, Photopea | 中 | 它们做编辑我们做转换，场景不同但用户重叠 |

| **Tier 3 现状** | 右键另存为、画图工具、不转换 | **低（我们的机会）** | 把"懒得下载软件/怕上传隐私文件"的人拉过来 |

  

---

  

**3. 目标用户**

  

**用户 1：网站开发者 / SEO 站长（主力用户 ⭐）**

  

| 维度 | 描述 |

|---|---|

| **Who** | 运营网站的人，需要批量压缩/转换图片以提升 Pagespeed 分数 |

| **Pain** | WebP/AVIF 格式能大幅提升加载速度，但本地工具不支持批量，上传又怕泄露 |

| **Current** | Photoshop 手动转、Squoosh（Google 工具，但每次只能一张）、命令行 cwebp |

| **Trigger** | Google Search Console 提示图片优化；Lighthouse 跑分低；要上新页面 |

| **Hangout** | Reddit r/webdev, r/SEO, Indie Hackers, Twitter/X |

| **Willingness** | 愿意为"批量+自动化"付 $5-15/月，但首版先免费建立信任 |

  

**为什么选为主力**：这个群体对**隐私敏感**（不上传服务器是强卖点）、对**新格式（WebP/AVIF）有强需求**、且愿意在技术社区传播。

  

**用户 2：普通办公用户**

  

| 维度 | 描述 |

|---|---|

| **Who** | 需要把 HEIC（iPhone 照片）转成 JPG 发给同事/客户，或把 PNG 转 JPG 减小邮件附件 |

| **Pain** | 手机照片格式别人打不开；附件太大发不出去 |

| **Current** | 微信/邮件自带压缩、系统预览导出、搜"image converter"随便用一个 |

| **Trigger** | 收到"打不开这个文件"的反馈；邮件附件超限提示 |

| **Hangout** | Google 搜索（长尾词）、Quora、"how to" 搜索 |

| **Willingness** | 低。期望免费，广告容忍度高。是流量基础盘。 |

  

**用户 3：设计师 / 内容创作者**

| 维度              | 描述                                             |
| --------------- | ---------------------------------------------- |
| **Who**         | 需要特定格式导出（透明 PNG、打印 TIFF、社交媒体 WebP）             |
| **Pain**        | 设计软件导出选项有限，需要快速转格式而不开大型软件                      |
| **Current**     | Photoshop/Illustrator 导出、Figma 插件、CloudConvert |
| **Trigger**     | 客户要求特定格式；平台上传限制（如 Twitter 对 GIF 大小限制）          |
| **Hangout**     | Dribbble, Behance, r/graphic_design            |
| **Willingness** | 中。会为质量和效率付费，但对免费版要求高。                          |

---

**4. 产品定位**

**4.1 定位语句**

```markdown
FOR 网站开发者和注重隐私的办公用户
WHO 需要快速转换图片格式但不想把文件上传到陌生服务器

[产品名] IS A 在线图片格式转换器

THAT 完全在浏览器本地完成转换，3 秒出结果，支持批量

UNLIKE FreeConvert 和 CloudConvert 需要上传文件到服务器处理

[产品名] 让你的文件从不出设备，且无需注册即可使用
```


**4.2 消息层级**

| 层级           | 内容                                                                                                                                                                                                                     |       |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----- |
| **Headline** | Convert Images Instantly. No Upload Needed.                                                                                                                                                                            | (1/5) |
|              |                                                                                                                                                                                                                        |       |
| **Subhead**  | Your files never leave your browser. Free, fast, and private image conversion for JPG, PNG, WebP, AVIF, and more.                                                                                                      |       |
| **Benefits** | 1. **100% Private** — Processed locally, zero server upload<br>2. **Batch Convert** — Drop 50 images at once<br>3. **Modern Formats** — WebP, AVIF, HEIC support built-in<br>4. **Zero Sign-up** — No account, no spam |       |
| **Features** | WASM-powered conversion, drag & drop, adjustable quality/compression, format-specific options                                                                                                                          |       |
| **Proof**    | "Faster than CloudConvert" — 对比时间戳；Processed 1M+ files locally                                                                                                                                                         |       |

**4.3 差异化优先级**

  

| 优先级 | 差异点            | 为什么                               |
| --- | -------------- | --------------------------------- |
| 1   | **纯前端本地处理**    | 隐私是 2024-2025 年最强购买动机之一，竞品全是服务器处理 |
| 2   | **批量免费**       | 竞品免费版通常限 1-5 个文件，我们首版就支持批量        |
| 3   | **现代格式优先**     | WebP/AVIF/HEIC 是增量需求，老站支持不完整      |
| 4   | **零 friction** | 无注册、无广告弹窗、首屏即工具                   |
| 5   | **SEO 页面深度**   | 每个格式对组合一个独立页面，精准截流长尾词             |

**4.4 禁词清单**

- 不要说 "AI-powered"（没有 AI，说了是减分项）
- 不要说 "Unlimited"（除非真的能证明，否则法律风险）
- 不要说 "Best"（广告法 + 可信度低）
- 不要说 "Cloud"（我们不上传云端，这是反定位）

---

**5. 功能规划**

**5.1 核心功能**

| 功能           | 说明                                          | 优先级 |
| ------------ | ------------------------------------------- | --- |
|              |                                             |     |
| 拖放上传 / 点击选择  | 支持多文件批量选择                                   | P0  |
| 格式转换引擎       | WASM 实现：JPG↔PNG↔WebP↔AVIF↔BMP↔GIF↔TIFF↔HEIC | P0  |
| 输出格式选择       | 每个文件可独立选输出格式，或统一设置                          | P0  |
| 质量/压缩调节      | JPG/WebP/AVIF 支持质量滑块（1-100）                 | P0  |
| 尺寸调整（Resize） | 可选：按宽度/高度/百分比缩放                             | P1  |
| 批量下载         | ZIP 打包 或 逐个下载                               | P0  |
| 单文件转换        | 不需要批量时的简化流程                                 | P0  |

**5.2 Landing Page & SEO**

| 页面                                    | 说明                          | 优先级 |
| ------------------------------------- | --------------------------- | --- |
| 首页（/）                                 | 主工具 + 信任元素 + FAQ            | P0  |
| 格式转换页面（/jpg-to-png, /png-to-webp ...） | 每个热门组合独立页面                  | P0  |
| 批量转换页面（/batch-image-converter）        | 强调批量能力的场景页                  | P1  |
| 格式说明页（/what-is-webp, /jpg-vs-png ...） | 信息型内容，引流 + 建立权威             | P1  |
| 博客（/blog/...）                         | Best converters, how-to 类文章 | P2  |

**5.3 付费与转化（V2 再考虑，V1 全免费建立流量）**

| 功能           | 说明                             | 优先级 |
| ------------ | ------------------------------ | --- |
| 文件大小限制提示     | 免费版单文件 ≤ 50MB（WASM 内存限制也是自然边界） | P1  |
| Pro 升级入口（预留） | 更大文件、更多格式、API 访问               | P2  |
| 去广告（预留）      | 如果有广告的话                        | P2  |


**5.4 合规与基础设施**

| 功能                             | 说明           | 优先级 |
| ------------------------------ | ------------ | --- |
| Privacy Policy                 | 必须强调"无服务器上传" | P0  |
| Terms of Service               | 标准条款         | P0  |
| Cookie 同意横幅                    | GDPR/CCPA 合规 | P0  |
| 埋点（Plausible/Google Analytics） | 无 Cookie 优先  | P0  |
| 错误监控（Sentry）                   | WASM 崩溃捕获    | P0  |

**5.5 NOT-DO（明确不做）**

| 不做                | 原因                              |
| ----------------- | ------------------------------- |
| ❌ 视频/音频/文档转换      |   scope 爆炸，且需要服务器端处理，破坏"本地隐私"定位 |
| ❌ 图片编辑（裁剪、滤镜、加水印） | 偏离核心定位，竞品已很成熟（iloveimg 做了全套）    |
| ❌ 用户账户/登录系统       | 增加 friction，且首版不需要              |
| ❌ 云端存储/历史记录       | 服务器成本 + 隐私风险，与定位矛盾              |
| ❌ API 服务（首版）      | 技术复杂度高，等流量稳定后再评估                |
| ❌ 移动端 Native App  | 工具站场景以桌面为主，PWA 足够               |
| ❌ AI 增强（超分辨率、去背景） | 需要模型 + GPU，成本失控                 |
| ❌ 实时协作/分享链接       | 不是用户痛点，过度设计                     |


---

...**6. 页面信息架构**

**6.1 首页（/）结构**
 (2/5)
 
```test
┌─────────────────────────────────────────┐
│  导航栏: Logo | Tools ▼ | Pricing | ...  │
├─────────────────────────────────────────┤
│  HERO                                   │
│  "Convert Images Instantly.             │
│   No Upload Needed."                    │
│                                         │
│  [Drag & drop area]  ← 核心交互        │
│  或点击选择文件                          │
│                                         │
│  Output: [JPG ▼] [PNG ▼] [WebP ▼] ... │
│                                         │
│  [Convert Now] — 主 CTA                 │
├─────────────────────────────────────────┤
│  TRUST BAR                              │
│  "Your files never leave your browser"  │
│  🔒 100% Private | ⚡ 3s Speed | 🆓 Free │
├─────────────────────────────────────────┤
│  SUPPORTED FORMATS                      │
│  JPG → PNG → WebP → AVIF → HEIC ...    │
│  图标矩阵，点击跳转对应转换页             │
├─────────────────────────────────────────┤
│  HOW IT WORKS (3 steps)                 │
│  1. Drop files  2. Pick format  3. Download │
├─────────────────────────────────────────┤
│  WHY LOCAL? (差异化区块)                 │
│  对比图：Upload vs Local Processing      │
│  ✓ 零隐私风险 ✓ 瞬间开始 ✓ 离线可用     │
├─────────────────────────────────────────┤
│  USE CASES (3 个场景卡片)                 │
│  • Web Developer: Optimize for WebP/AVIF │
│  • iPhone User: HEIC to JPG             │
│  • Designer: PNG with transparency       │
├─────────────────────────────────────────┤
│  FAQ (8 个问题)                          │
│  Is it free? Is it safe? Max file size?  │
│  Why no upload? What formats? Batch? ... │
├─────────────────────────────────────────┤
│  FOOTER CTA                             │
│  "Convert your first image now — free"   │
└─────────────────────────────────────────┘
```

**6.2 转化检查清单**

- [ ] Hero 3 秒内说明价值（Convert Images Instantly. No Upload Needed.）

- [ ] 首屏可直接使用工具（拖放区在首屏）

- [ ] CTA 是动词 + 结果（Convert Now → Download）

- [ ] How It Works 3 步流程

- [ ] FAQ 覆盖：价格、安全、格式、限制、隐私、批量

- [ ] 有明确的差异化证明（Why Local? 区块）


**6.3 SEO 页面矩阵**

  

| 页面      | URL 模式                     | 目标关键词                          | 搜索量预估 | 目的        | 优先级 |
| ------- | -------------------------- | ------------------------------ | ----- | --------- | --- |
| 首页      | /                          | image converter, convert image | 100k  | 主转化页      | P0  |
| 格式对页面 A | /jpg-to-png                | jpg to png                     | ~15k  | 精准工具页     | P0  |
| 格式对页面 B | /png-to-webp               | png to webp                    | ~8k   | 精准工具页     | P0  |
| 格式对页面 C | /heic-to-jpg               | heic to jpg                    | ~12k  | 精准工具页     | P0  |
| 格式对页面 D | /jpg-to-webp               | jpg to webp                    | ~6k   | 精准工具页     | P0  |
| 格式对页面 E | /webp-to-png               | webp to png                    | ~5k   | 精准工具页     | P0  |
| 格式对页面 F | /png-to-jpg                | png to jpg                     | ~4k   | 精准工具页     | P1  |
| 格式说明页   | /what-is-webp              | what is webp                   | ~3k   | 信息引流      | P1  |
| 对比页     | /webp-vs-png               | webp vs png                    | ~2k   | 信息引流 + 转化 | P1  |
| 批量页     | /batch-image-converter     | batch image converter          | ~2k   | 场景页       | P1  |
| 博客      | /blog/best-image-converter | best image converter           | ~5k   | 列表引流      | P2  |
| 替代页     | /alternative/cloudconvert  | cloudconvert alternative       | ~500  | 截流竞品      | P2  |
  

**页面总数建议**：首版上线 15-20 个页面（6 个核心格式对 + 首页 + 几个信息页），3 个月内扩展到 50+。

---

**7. 定价设计**

**7.1 竞品价格锚点**

| 竞品           | 免费版限制                   | 付费起步               |
| ------------ | ----------------------- | ------------------ |
| FreeConvert  | 广告、单文件大小限、批量限           | $12.99/月           |
| CloudConvert | 25 conversions/day      | Credits 制，约 $8/月等值 |
| Convertio    | 2 concurrent, 100MB max | $9.99/月            |
| iloveimg     | 广告、单文件限                 | $9/月               |

**7.2 我们的定价策略（V2 阶段再上线）**

**V1（前 3 个月）**：全免费，无限制（用 WASM 本地处理，边际成本 ≈ 0）

**V2 Pro 版**：

- **Free**: 无限文件数，单文件 ≤ 50MB，基础格式，有 subtle 品牌水印（可选）

- **Pro $7/月**: 单文件 ≤ 200MB，全部格式，批量 ZIP 下载优先级，无水印

- **Lifetime $49**: 一次性，终身 Pro

  

**为什么 $7 不是 $12.99**：比所有竞品便宜一档，降低决策门槛。本地处理成本低，有降价空间。

  

---


...**8. 域名与技术栈**

**8.1 域名候选**

| 域名                    | 状态  | 后缀评价                             | 综合   |       |
| --------------------- | --- | -------------------------------- | ---- | ----- |
| **pixconvert.com**    | 待验证 | .com 最佳，"pix"=pictures 行业通用缩写，顺口 | ⭐ 首推 |       |
| **imgshift.com**      | 待验证 | .com，"shift"暗示格式转换，品牌感强          | ⭐ 备选 |       |
| **localconvert.app**  | 待验证 | .app 适合工具站，"local"直接点出核心差异       | 备选   |       |
| **picflip.io**        | 待验证 | .io 开发者友好，"flip"轻快，但偏离转换语义       | 备选   | (3/5) |
| **getimgconvert.com** | 待验证 | .com，get 前缀经典，但偏长                | 备选   |       |

**推荐 Top 3**：

1. **pixconvert.com** — 短、顺口、和图片直接相关、.com 信任度高
2. **imgshift.com** — 有品牌感，容易记忆，适合长期建设
3. **localconvert.app** — 如果 .com 都被注册，.app 是工具站最优后缀，且 "local" 是核心差异点...

**8.2 技术栈建议**

| 层级     | 选型                                           | 理由                      |
| ------ | -------------------------------------------- | ----------------------- |
| 前端框架   | Next.js 14 (App Router)                      | SSR 对 SEO 必需，React 生态成熟 |
| 样式     | Tailwind CSS                                 | 快，工具站不需要复杂设计系统          |
| 转换引擎   | WASM (libvips / mozjpeg / libwebp / libavif) | 纯前端处理核心，零服务器成本          |
| 构建     | Vercel / Cloudflare Pages                    | 边缘部署，全球 CDN，免费 tier 够用  |
| 批量 ZIP | JSZip (前端)                                   | 浏览器内打包下载                |
| 埋点     | Plausible (自托管或付费)                           | 无 Cookie，GDPR 友好        |
| 监控     | Sentry                                       | 免费 tier 够用              |


**成本估算（月）**：
- 域名：$10/年 ≈ $1/月
- 托管（Vercel Pro）：$20/月（流量大之前免费 tier 够）
- Plausible：$9/月
- **总计：~$30/月启动**

---

**9. GTM 策略**

**9.1 首发渠道**

| 渠道               | 动作                                | 预期             |
| ---------------- | --------------------------------- | -------------- |
| **Product Hunt** | 首发 + "Privacy-first" 故事           | 首日 200-500 UV  |
| **Reddit**       | r/webdev, r/selfhosted, r/privacy | 找痛点帖回复，不硬广     |
| **Hacker News**  | Show HN 帖子                        | 如果踩中隐私痛点，可能上首页 |
| **Twitter/X**    | 开发者 KOL 转发（可 @ 几个大 V）             | 冷启动            |
| **SEO**          | 长尾页面收录（需要 2-6 个月见效）               | 长期主渠道          |

**9.2 首周动作**
- Day 1: Product Hunt 上线
- Day 2-3: Reddit 相关帖子回复（"I built a tool that converts images without uploading"）
- Day 4: 发 Twitter thread 讲技术实现（WASM 本地处理）
- Day 5-7: 观察数据，修复崩溃，收集首批用户反馈
  
**9.3 内容计划（Month 2-3）**

- 每周 1 篇博客：格式对比（JPG vs PNG vs WebP）、使用场景、批量转换技巧
- 每月 2-3 个新 SEO 页面（格式对页面）
- 在 Quora / StackOverflow 回答相关问题，自然带入链接
---

**10. 转化漏斗与埋点**

| 事件                 | 触发点            | 目的       |
| ------------------ | -------------- | -------- |
| page_view          | 所有页面加载         | 流量来源分析   |
| tool_start         | 用户拖放/选择文件      | 衡量工具使用率  |
| format_selected    | 选择输出格式         | 最受欢迎格式分析 |
| conversion_start   | 点击 Convert     | 核心动作漏斗   |
| conversion_success | 转换完成，文件可下载     | 核心成功指标   |
| conversion_error   | WASM 崩溃/格式不支持  | 错误监控     |
| batch_size         | 记录每次批量文件数      | 产品决策数据   |
| download_click     | 点击下载           | 完成转化     |
| cta_click          | 点击任何升级/Pro CTA | 付费意愿信号   |

**核心指标**：

- 月度访问量（SEO 为主）
- 转换完成数（conversion_success）
- 转换成功率（success / start）
- 平均批量大小
- 首页 → 转换启动率

---

**11. 风险评估**

| 风险                      | 等级  | 缓解措施                                                      |
| ----------------------- | --- | --------------------------------------------------------- |
| **SEO 竞争高，6 个月无排名**     | 高   | 先攻长尾词（格式对页面），KD 通常 <30；同时靠 Product Hunt/Reddit 获取初始流量和外链  |
| **WASM 格式支持不全（如 HEIC）** | 中   | HEIC 可用 libheif WASM 但体积大，首版可标注"Limited support"，或降级为服务器端 |
| **浏览器内存限制（大文件/批量）**     | 中   | 单文件 50MB 限制，批量 ≤ 20 张，超出提示"Try Pro"或分批                    |
| **GDPR/CCPA 合规**        | 低   | 纯前端无上传，天然合规。仍需 Cookie 横幅 + Privacy Policy                 |
| **竞品降价反击**              | 中   | 我们的成本结构（纯前端）天然低于服务器处理型竞品，有价格防御空间                          |
| **商业化路径不清晰**            | 中   | V1 全免费验证需求，V2 再测试 Pro。不要过早收费扼杀增长                          |

---

**12. 交接摘要**

**给文案**

```
产品名：[pixconvert.com / imgshift.com / 待定]
定位：完全在浏览器本地完成的免费图片格式转换器
Headline: Convert Images Instantly. No Upload Needed.
Subhead: Your files never leave your browser. Free, fast, and private image conversion for JPG, PNG, WebP, AVIF, and more.
核心 Benefits：
1. 100% Private — Processed locally, zero server upload
2. Batch Convert — Drop 50 images at once
3. Modern Formats — WebP, AVIF, HEIC support built-in
4. Zero Sign-up — No account, no spam

FAQ 必须覆盖：
• Is it really free? → Yes, 100% free. No hidden fees.
• Is it safe? → Yes, files never leave your browser.
• What formats? → JPG, PNG, WebP, AVIF, BMP, GIF, TIFF, HEIC
• Max file size? → Free: up to 50MB per file
• Can I convert multiple files? → Yes, batch conversion is supported
• Do I need to install anything? → No, works in any modern browser
• Why don't you need upload? → We use WebAssembly to process files locally in your browser

不能把产品说成：
• AI-powered（没有 AI）
• Unlimited（除非有法律确认）
• Best / #1（避免绝对化）
• Cloud-based（反定位）

CTA 格式：动词 + 结果
• "Convert Now" ✓
• "Download Your File" ✓
• "Get Started" ✗（太模糊）
```


**给设计**

 (4/5)

```
首页结构：
1. 导航栏（简洁，无多余元素）
2. Hero：大标题 + 拖放区（首屏核心，占 50%+ 高度）
3. Trust Bar：3 个图标 + 短文案
4. Supported Formats：格式图标矩阵，可点击
5. How It Works：3 步横向流程图
6. Why Local?：左右对比图（Upload vs Local）
7. Use Cases：3 张场景卡片
8. FAQ：手风琴展开
9. Footer CTA

首屏重点：
• 拖放区必须在首屏可见（桌面端 above the fold）
• 背景用浅色（#f8f9fa），拖放区用白色卡片突出
• 格式选择器用 pill/tag 样式，直观

核心交互：
• 拖放 → 文件列表出现 → 选输出格式 → Convert → 下载
• 批量时：列表可逐行改格式，或顶部统一设置
• 转换中：进度条（每文件单独）
• 完成后：ZIP 下载 + 逐个下载

视觉参考：
• CloudConvert 的简洁感
• Squoosh.app 的工具感（Google 的图片压缩工具）
• 避免 FreeConvert 的广告密集感

移动端要求：
• 拖放区改为大按钮"Select Files"
• 文件列表纵向堆叠
• 格式选择用底部 sheet 弹出

不需要设计：
• Pricing 页（V1 无付费）
• 用户 Dashboard/账户页
• 复杂的插画（保持工具感）
```

**给开发**

```
技术栈：Next.js 14 (App Router) + Tailwind CSS + WASM
部署：Vercel / Cloudflare Pages

P0 功能（上线必须）：
1. 文件选择/拖放（多文件，<input multiple> + dragover）
2. WASM 转换引擎集成：
   • JPG ↔ PNG：via canvas 或 wasm
   • → WebP：libwebp WASM
   • → AVIF：libavif WASM（如果 WASM 包太大可先不做）
   • → BMP/GIF/TIFF：canvas 导出
   • HEIC → JPG：libheif WASM（标注 limited）
3. 输出格式选择器（每文件/统一）
4. 质量滑块（JPG/WebP/AVIF）
5. 转换进度 + 下载（单文件直接下载，多文件 ZIP）
6. SSR 首页（SEO meta 完整）
7. 格式对页面（/jpg-to-png 等）15-20 个
8. Privacy Policy / Terms 页面
9. Plausible 埋点
10. Sentry 错误监控

P1 功能（上线后 2-4 周）：
1. 批量统一设置（一键改所有文件输出格式）
2. Resize 选项（宽/高/百分比）
3. 更多格式对页面（扩展到 50+）
4. PWA 支持（离线可用）
5. 深色模式

API 链路（纯前端，无后端 API）：
[用户拖放文件] → [WASM 处理] → [Blob URL 生成] → [下载触发]
├── libvips WASM（如果选这个方案）
├── 或分散库：mozjpeg + libwebp + libavif + jszip
└── 内存管理：大文件分块，批量限制 20 张

数据结构：
FileItem {
  id: string (uuid)
  originalFile: File
  outputFormat: 'jpg' | 'png' | 'webp' | ...
  quality: number (1-100)
  status: 'pending' | 'converting' | 'done' | 'error'
  progress: number
  resultBlob?: Blob
  errorMessage?: string
}

NOT-DO：
• 不要建用户系统（no auth）
• 不要上传文件到服务器（定位核心）
• 不要做后端转换 API
• 不要集成视频/音频/文档
• 首版不做 AVIF 如果 WASM 包 > 2MB（影响首屏加载）

验收标准：
• Lighthouse Performance ≥ 90
• 首页首屏加载 < 1.5s（WASM 懒加载）
• 单个 JPG→PNG 转换 < 3s（桌面端）
• 批量 10 张同时转换不崩溃
• 所有格式对页面有独立 title/meta/description
• 移动端可正常操作
```


---

**质量检查清单**

- [ ] 有明确关键词（image converter + 长尾格式对）
- [ ] 有搜索量/KD，CPC 标注未知
- [ ] SERP 经过分析（基于实扫 + 行业知识）
- [ ] 搜索意图判断清楚（工具型）
- [ ] Top 3 竞品写清楚
- [ ] 竞品做了三层分级
- [ ] 拆了 3 个用户场景 + 主力用户
- [ ] 有结构化定位语句
- [ ] 消息层级清楚
- [ ] 功能范围分 P0 / P1 / NOT-DO
- [ ] 首页 IA 可直接给设计
- [ ] SEO 页面矩阵明确
- [ ] 定价有竞品锚点
- [ ] 域名有 Top 3 推荐
- [ ] GTM 有首周动作
- [ ] 埋点事件明确
- [ ] 风险有缓解措施
- [ ] 交接摘要覆盖文案/设计/开发

---

**最终判断**：这个站**值得做**，但胜负手不在"有没有转换功能"（所有人都有），而在：
1. **纯前端本地处理**的隐私叙事能否击穿用户信任壁垒
2. **格式对页面的 SEO 深度**能否在 6 个月内截到足够长尾流量
3. **批量免费**能否从竞品手里抢到价格敏感用户

如果这 3 点执行到位，这是一个**低运营成本、高毛利潜力**的站点。如果执行不到位，就是又一个没人用的转换器废墟。