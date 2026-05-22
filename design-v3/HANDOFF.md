# PixConvert — 视觉设计交接文档

> 阶段：06-design → 07-frontend
> 日期：2026-05-22
> 设计方向：A — Privacy-First Minimal（推荐），含 B/C 备选
> 状态：[DONE] — 可交付前端开发

---

## 当前结论

- **结论**：基于方向 A（Privacy-First Minimal）产出完整设计包。深青绿色在竞品中完全空白，与"隐私/本地"内联自然强。暖白背景对所有用户群友好。
- **状态**：[DONE]
- **方向选择**：已确认 → **方向 A（Privacy-First Minimal）**
- **竞品重大发现**：LocalConvert.com 是定位完全重叠的直接竞争对手（本地处理/WASM/隐私/零上传），且设计也是极简 SaaS 风。关键差异化应对：
  - 更专注：仅图片（LocalConvert 散漫到视频/音频/PDF）
  - 更专业：站长/开发者（LocalConvert 普通用户导向）
  - 更安全：不点名竟品、不声称 Unlimited（LocalConvert 合规风险高）
  - 视觉区隔：深青绿色系 vs LocalConvert 的紫色系

---

## 关键输入

| 输入项 | 来源 | 状态 |
|---|---|---|
| PRD | `/01-prd/prd-pixconvert.org-2026_05_21.md` | ✅ 已确认 |
| 文案 | `/05-copy/landing-page-copy.md` | ✅ 已确认 |
| 合规 | `/04-compliance/compliance-report.md` | ✅ 已确认 |
| 竞品 | freeconvert.com, convertio.co, squoosh.app | ✅ 已分析 |
| 品牌名 | PixConvert | ✅ 已确认 |
| 域名 | pixconvert.org | ✅ 已确认 |
| 技术栈 | Next.js 14 + Tailwind + WASM | ✅ 已确认 |

---

## 本阶段交付物

| 文件 | 路径 | 说明 |
|---|---|---|
| 竞品视觉分析 | `01-competitor-visual-analysis.md` | FreeConvert / Convertio / Squoosh 扫描结果 |
| 反 AI 味约束表 | `02-anti-ai-constraints.md` | 28 条硬约束 + 检查清单 |
| 3 个设计方向 | `03-design-directions.md` | A/B/C 三方案对比 |
| 首页生成 Prompt | `04-homepage-generation-prompt.md` | v0/Stitch/Claude/Cursor 用的完整 Prompt |
| 品牌资产提示词 | `05-assets-prompts.md` | Logo / OG / Hero / Favicon 生成提示词 |
| 设计交接（本文件） | `HANDOFF.md` | 下游开发最小必要信息 |

---

## Design Tokens

### 颜色（方向 A — Privacy-First Minimal）

```css
:root {
  --bg-primary: #FAFAF8;
  --bg-card: #FFFFFF;
  --bg-hover: #F3F4F6;
  --text-primary: #1A1A1A;
  --text-secondary: #6B7280;
  --text-muted: #9CA3AF;
  --accent-primary: #065F46;
  --accent-hover: #047857;
  --accent-light: #D1FAE5;
  --accent-dark: #064E3B;
  --border: #E5E7EB;
  --border-focus: #065F46;
  --success: #10B981;
  --warning: #F59E0B;
  --error: #EF4444;
}
```

### 字体

| 用途 | 字体 | 备选回退 | 注意事项 |
|---|---|---|---|
| Display / H1-H2 | Space Grotesk | Geist, Satoshi | 700-800 weight |
| Body / 正文 | DM Sans | Plus Jakarta Sans | 400 weight, 1.6 line-height |
| Labels / 标签 | DM Sans 500 | — | 14px, uppercase 或 small |
| Mono / 代码 | JetBrains Mono | IBM Plex Mono | 仅用于格式标签、文件名 |

### 尺寸系统

```css
--radius-sm: 4px;    /* 小标签、按钮 */
--radius-md: 6px;    /* 卡片、输入框 */
--radius-lg: 8px;    /* 大卡片、模态框 */
--radius-xl: 12px;   /* 拖放区 */
--radius-full: 9999px; /* Pills, badges */

--space-xs: 4px;
--space-sm: 8px;
--space-md: 16px;
--space-lg: 24px;
--space-xl: 32px;
--space-2xl: 48px;
--space-3xl: 64px;
--space-4xl: 96px;

--shadow-sm: 0 1px 2px 0 rgba(0,0,0,0.03);
--shadow-md: 0 4px 6px -1px rgba(0,0,0,0.05);
--shadow-lg: 0 10px 15px -3px rgba(0,0,0,0.08);
```

---

## 页面结构

### 首页 Section 清单（从上到下）

1. **Navbar** — sticky, 高度 64px, 背景带模糊效果 (backdrop-blur)
2. **Hero** — 标题 + 副标题 + 拖放区 + 格式 pills + CTA
3. **Trust Bar** — 3 项：Private / Fast / Free，hover 无效果
4. **Supported Formats** — 8 个格式图标，4x2 网格，点击跳转对应转换页
5. **How It Works** — 3 步横向流程，箭头连接
6. **Why Local?** — 左右对比：Server Upload vs Local Processing
7. **Use Cases** — 3 张横向卡片：Web Dev / Office / Designer
8. **Features** — 4 项，2x2 网格，图标 + 标题 + 描述
9. **Pricing** — Free vs Pro (Coming Soon)
10. **FAQ** — 手风琴折叠，10 个问题
11. **Footer CTA** — 重复 Hero CTA
12. **Footer** — 链接分组 + 法律页 + 格式页链接

### 功能页（SEO 页面）

- `/jpg-to-png`, `/png-to-webp`, `/heic-to-jpg`, `/webp-to-avif`, `/jpg-to-webp`, `/png-to-jpg`
- 结构：简化版首页，Hero 区组件保持一致，文案针对特定格式对优化
- 页脚和导航与首页完全一致

### 信息页

- `/privacy` — Privacy Policy（纯文本，无广告）
- `/terms` — Terms of Service
- `/faq` — 单独的 FAQ 页（首页的扩展版）

---

## 组件约束

### 导航栏 (Navbar)
- 高度：64px，垂直居中
- 背景：`rgba(250, 250, 248, 0.85)` + `backdrop-blur: 12px`
- 底部边框：1px solid #E5E7EB，仅在滚动后显示
- 左侧：Logo (icon + wordmark horizontal, 高度 32px)
- 右侧：Tools dropdown | FAQ | Privacy | Terms
- 没有 "Sign Up" / "Login" 按钮（首版无账户系统）
- 移动端：汉堡菜单，侧滑弹出

### 拖放区 (Dropzone)
- 外层容器：白色卡片，1px border #E5E7EB，radius 12px，padding 48px
- 内层区域：2px dashed #065F46，radius 8px，min-height 200px
- 图标：Lucide `upload-cloud`，48px，颜色 #065F46
- Hover：虚线变实线，背景 tint #D1FAE5
- Active drag：边框加粗，背景 #D1FAE5
- 错误状态：边框 #EF4444，图标和提示变红
- 支持多文件：`<input type="file" multiple accept="image/*">`

### 格式 Pills
- 形状：pill，radius 9999px
- 默认：1px border #E5E7EB，bg white，text #1A1A1A
- 选中：bg #065F46，text white，无 border
- 尺寸：padding 8px 16px，14px，weight 500
- 排列：horizontal wrap，gap 8px

### 按钮
- Primary CTA：深绿实心，白色文字，radius 6px，padding 14px 28px
- Hover：bg #047857，transform translateY(-1px)，transition 150ms ease
- Active：transform translateY(0)，稍暗
- Secondary：白色实心，深绿边框和文字，hover 时淡绿背景
- Disabled：灰色背景，灰色文字，无 hover 效果

### 卡片 (Cards)
- 背景：white，border 1px #E5E7EB，radius 8px
- 无阴影（或极淡 shadow-sm）
- Hover：border-color 变 #065F46，transition 200ms
- 内边距：24px

### 手风琴 (Accordion)
- 项间分隔：1px border #E5E7EB
- 展开按钮：Lucide `chevron-down`，展开时旋转 180°
- 内容区：展开时带淡入动画，h高度从 0 过渡到 auto
- 只能同时展开一个（可选）

### 文件列表项 (File List Item)
- 左侧：缩略图 + 文件名 + 原始大小
- 右侧：格式下拉选择器 + 质量滑块 + 删除按钮
- 底部：进度条（转换中）或 下载链接（完成）
- 背景：white 卡片，转换完成后左侧边框加 3px 绿色标记

---

## 图片替换清单

| 位置 | 当前占位符 | 最终资产 | 优先级 | 备注 |
|---|---|---|---|---|
| Logo Icon | 字符 "Px" | SVG Logo 图标 | P0 | 16px 可辨识 |
| Logo Wordmark | 文字 "PixConvert" | SVG 水平 Wordmark | P0 | 导航栏 + 页脚 |
| OG Image | `[OG URL]` | 1200x630 PNG | P0 | 社交分享 |
| Favicon | 默认 | 32x32 ICO/PNG | P0 | 浏览器标签 |
| Apple Touch | 默认 | 180x180 PNG | P1 | iOS 主屏 |
| 格式图标 | 文字缩写 | 8 个 SVG 图标 | P1 | JPG/PNG/WebP/AVIF/BMP/GIF/TIFF/HEIC |
| 信任条图标 | Lucide 占位 | Lucide 线性图标 | P0 | Shield, Zap, Gift |
| 步骤图标 | 数字 1/2/3 | Lucide 线性图标 | P1 | Upload, Settings, Download |
| 使用场景图标 | 占位 | Lucide 线性图标 | P1 | Monitor, Smartphone, Palette |
| Feature 图标 | 占位 | Lucide 线性图标 | P1 | Cpu, Layers, FileType, UserX |
| Hero 背景图 | 纯色 | 可选：抽象纹理 SVG | P2 | 可以不用，纯色也很好 |

---

## 移动端适配

### 结构变化
- 所有 Section 变为单列堆叠
- Hero 标题最多 2 行，字号缩小至 28-32px
- 拖放区占满宽度，min-height 160px
- 信任条变为滚动横向或竖向堆叠
- 格式 pills 变为 2 行或横向滚动
- 使用场景卡片变为竖向堆叠，全宽
- Features 2x2 变为单列

### 交互变化
- 汉堡菜单：右上角，点击侧滑出导航
- 拖放区主要依赖点击触发（移动端拖放较少用）
- 所有点击目标 ≥ 44px
- 文件列表竖向堆叠，每行一个文件
- 格式选择器用底部 sheet 或弹出
- 进度条更粗（至少 8px高度）

### 字体变化
- H1: 28-32px (desktop 48-56px)
- H2: 22-24px (desktop 32-36px)
- Body: 16px 不变，保持可读性
- 行高不缩小，保持 1.6

---

## 开发注意事项

### 必须遵守
1. **首屏必须能用工具** — 拖放区在 above the fold 可见且可操作
2. **WASM 懒加载** — 首屏不等 WASM 加载完成才渲染，用 skeleton 或简化 Canvas 方案占位
3. **无白屏时间** — 首屏加载 < 1.5s，用户可以立即上传
4. **隐私第一** — 不调用任何上传 API，所有处理在浏览器内
5. **无 Cookie 分析优先** — 首版如无分析工具，不需要 Cookie Banner
6. **SSR 必须** — 首页和所有 SEO 页面必须服务端渲染，meta 完整

### 建议
- 使用 Tailwind 自定义配置文件 (`tailwind.config.js` 戒 `globals.css` 变量) 实现 Design Tokens
- 使用 `next/font` 加载 Space Grotesk 和 DM Sans，避免 FOIT/FOUT
- 拖放区支持 `dragover` / `dragleave` / `drop` 事件，并有反馈状态
- 批量文件使用 `Promise.all` 并行处理，每个文件独立进度
- 转换完成后用 `URL.createObjectURL` + `下载` 触发下载，无需上传
- 支持深色模式预留（即使首版不实现，CSS 变量结构支持切换）

### 常见坑
- ❌ 不要用 `<input type="file">` 的默认样式 — 定制成设计稿中的拖放区样式
- ❌ 不要在首屏放大幻灯片 — 工具站首屏必须是工具
- ❌ 不要让用户滚动 2 屏才看到 FAQ — 首屏下方即可见 Trust Bar
- ❌ 不要忘记移动端的触摸操作 — 桌面设计不等于移动设计
- ❌ 不要在文案中使用竞品品牌名称（iloveimg / CloudConvert / FreeConvert / Convertio）

---

## 风险

| 等级 | 风险 | 影响 | 缓解 |
|---|---|---|---|
| **P0** | 设计稿看起来像 AI 模板站 | 用户信任度下降，差异化失败 | 严格执行反 AI 味约束表，开发前逐条检查 |
| **P0** | Hero 不是工具 | 违背工具型搜索意图，转化率下降 | 首屏必须嵌入可操作的拖放区 |
| **P1** | 绿色被误读为"环保站" | 品牌定位模糊 | 通过文案和图标强化"Privacy/Local/Secure"而非"Eco" |
| **P1** | 移动端拖放体验差 | 移动用户流失 | 移动端以点击触发为主，拖放为辅 |
| **P2** | 深色模式未预留 | 未来扩展成本 | CSS 变量结构支持暗色模式切换 |
| **P2** | 无 OG 图/品牌资产 | 社交分享效果差 | 上线前至少完成 Logo + OG + Favicon |

---

## 给下游的最小必要信息

1. **最终视觉方向**：Privacy-First Minimal（浅色、深青绿 accent、Space Grotesk + DM Sans、大量留白）
2. **Design Tokens**：见上文"颜色"和"尺寸系统"部分
3. **页面结构**：首页 12 个 section + 6 个格式对页 + 3 个信息页
4. **组件约束**：导航栏、拖放区、格式 pills、按钮、卡片、手风琴、文件列表项 — 均已定义
5. **图片替换清单**：见上文"图片替换清单"表格
6. **移动端要求**：单列、触摸目标 ≥ 44px、汉堡导航、拖放区全宽
7. **开发注意事项**：WASM 懒加载、无上传、SSR 必须、无 Cookie Banner（首版）

---

## 建议下一步

- **下一阶段**：frontend-site-automation（前端开发）
- **启动 Prompt**：基于 06-design 交付物，使用 Next.js 14 + Tailwind CSS 实现首页和核心转换功能
- **先做什么**：
  1. 搭建项目脚手架 + Tailwind 配置 Design Tokens
  2. 实现 Navbar + Hero（含 Dropzone 占位）
  3. 实现文件选择 + 格式 pills 交互
  4. 集成 WASM 转换引擎
  5. 实现下载 + 进度反馈
  6. 补全剩余 section + 响应式
  7. SEO 页面生成
  8. 法律页 + Footer
- **验收标准**：Lighthouse Performance ≥ 90，首屏加载 < 1.5s，单文件转换 < 3s，移动端可操作

---

## 项目路径

```
/home/agentuser/projects/pixconvert.org/
├── 01-prd/
├── 04-compliance/
├── 05-copy/
└── 06-design/
    ├── 01-competitor-visual-analysis.md
    ├── 02-anti-ai-constraints.md
    ├── 03-design-directions.md
    ├── 04-homepage-generation-prompt.md
    ├── 05-assets-prompts.md
    └── HANDOFF.md   ← 本文件
```

---

*设计包产出完成。等待方向确认后可进入精修和前端开发。*
