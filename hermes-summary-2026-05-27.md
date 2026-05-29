# Hermes 工作总结 — 2026-05-27

## 项目：pixconvert.org 自动化部署配置

### 1. 目标
为 pixconvert 项目配置 GitHub Actions，实现代码提交到 main 分支后自动部署到 Cloudflare Workers，并清除缓存。

### 2. 完成的工作

#### 2.1 创建 Workflow 文件
- 文件：`.github/workflows/deploy.yml`
- 触发条件：`push` 到 `main` 分支
- 包含步骤：
  1. Checkout 代码
  2. 设置 Node.js v22.22.2
  3. 安装依赖 (`npm ci`)
  4. 构建 (`npx opennextjs-cloudflare build`)
  5. 部署到 Cloudflare (`npx wrangler deploy`)
  6. 清除 Cloudflare 缓存 (`purge_cache` API)

#### 2.2 配置 GitHub Secrets
在 GitHub 仓库设置中配置了以下 secrets：
- `CLOUDFLARE_API_TOKEN` — Cloudflare API Token
- `CLOUDFLARE_ACCOUNT_ID` — Cloudflare Account ID
- `CLOUDFLARE_ZONE_ID` — Cloudflare Zone ID

#### 2.3 解决的关键问题

| 问题 | 解决方案 |
|------|----------|
| Cloudflare API Token 认证失败 (9106) | 重新生成具有正确权限的 Token：Account → Cloudflare Workers:Edit, Zone → Zone:Edit, Zone Cache Purge:Purge |
| GitHub Actions 中 Node.js 版本警告 | 明确指定 `node-version: '22.22.2'` |
| Cache purge 的 Authorization header 变量名错误 | 修正为 `${CLOUDFLARE_API_TOKEN}` |
| 无法直接查看 GitHub Actions 日志 | 通过本地测试 `wrangler deploy --dry-run` 验证配置 |

### 3. 验证结果
- ✅ 本地构建成功 (`npx opennextjs-cloudflare build`)
- ✅ 本地部署测试成功 (`npx wrangler deploy`)
- ✅ GitHub Actions workflow 运行成功
- ✅ 自动部署到 pixconvert.org 生效

### 4. 后续使用
现在只需将代码 push 到 `main` 分支，GitHub Actions 会自动完成构建、部署和缓存清除。

---

## 其他
- 尝试了 Notion API 写入总结，但因 API Token 权限问题（401 Unauthorized）未能完成，改为生成此 Markdown 文件。
