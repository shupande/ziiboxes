# 🚀 Wrangler CLI 部署指南

## 📋 部署步骤

### 第 1 步：安装 Wrangler

```bash
# 全局安装
npm install -g wrangler

# 或者使用 npx（无需安装）
npx wrangler <command>
```

### 第 2 步：登录 Cloudflare

```bash
wrangler login
```

**会打开浏览器**：
1. 点击 "Authorize Cloudflare"
2. 登录 Cloudflare 账户
3. 授权 Wrangler
4. 返回终端

### 第 3 步：构建项目

```bash
cd /home/admin/.openclaw/workspace/ziiboxes
npm run build
```

### 第 4 步：部署到 Cloudflare Pages

```bash
wrangler pages deploy .next --project-name=ziiboxes
```

**部署选项**：
- `--project-name=ziiboxes` - 项目名称
- `--branch=main` - 分支名称
- `--commit-dirty=true` - 允许未提交更改

---

## 🎯 一键部署脚本

**创建** `deploy.sh`：

```bash
#!/bin/bash
# 构建并部署
npm run build
wrangler pages deploy .next --project-name=ziiboxes
```

**执行**：
```bash
bash deploy.sh
```

---

## 📊 部署后

**访问**：
- 预览 URL: `https://ziiboxes.pages.dev`
- 自定义域名：配置后访问 `https://ziiboxes.com`

**管理**：
- Cloudflare Dashboard → Workers & Pages → ziiboxes

---

## 🐛 常见问题

### Q: 权限错误

**A**: 使用 `npx` 或添加 `--userconfig` 参数

### Q: 登录超时

**A**: 重新执行 `wrangler login`

### Q: 构建失败

**A**: 检查 Node.js 版本（需要 18+）

---

*最后更新*: 2026-03-06
