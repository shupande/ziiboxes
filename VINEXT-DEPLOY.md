# 🚀 Vinext 部署到 Cloudflare 完整指南

**部署方式**: Cloudflare Pages 原生 Next.js 支持（无需手动推送）

---

## 📋 Vinext 配置

### 已配置

- ✅ Next.js 15.0.0（兼容版本）
- ✅ React 18.3.1
- ✅ Cloudflare Pages 原生支持
- ✅ 无需 @cloudflare/next-on-pages

---

## 🎯 部署步骤（无需 Git 推送）

### 方式 1: Cloudflare Dashboard 直接部署

1. **访问** https://dash.cloudflare.com
2. **Workers & Pages** → **Create application** → **Pages**
3. **选择** "Direct Upload"（直接上传）
4. **执行本地构建**:
   ```bash
   cd /home/admin/.openclaw/workspace/ziiboxes
   npm run build
   ```
5. **上传** `.next` 文件夹到 Cloudflare

---

### 方式 2: 使用 Wrangler CLI（推荐）

**安装 Wrangler**:
```bash
npm install -g wrangler
```

**登录 Cloudflare**:
```bash
wrangler login
```

**部署**:
```bash
cd /home/admin/.openclaw/workspace/ziiboxes
wrangler pages deploy .next --project-name=ziiboxes
```

**自动部署脚本**:
```bash
#!/bin/bash
# deploy.sh
npm run build
wrangler pages deploy .next --project-name=ziiboxes
```

---

### 方式 3: GitHub 自动部署（最终方案）

**配置 Cloudflare Pages**:

1. **访问** https://dash.cloudflare.com
2. **Workers & Pages** → **Create application** → **Pages**
3. **Connect to Git** → 选择 `ziiboxes` 仓库
4. **配置构建**:
   ```
   Framework preset: Next.js
   Build command: npm run build
   Build output directory: .next
   Root directory: /
   ```
5. **Save and Deploy**

**自动部署**:
- 每次推送到 `main` 分支自动触发
- 无需手动操作

---

## 🔧 wrangler.toml 配置

```toml
name = "ziiboxes"
compatibility_date = "2024-09-23"
compatibility_flags = ["nodejs_compat"]
pages_build_output_dir = ".next"
```

---

## 📊 部署检查清单

### 部署前

- [x] Next.js 版本兼容（15.0.0）
- [x] 配置文件正确
- [x] 代码已提交
- [ ] 部署到 Cloudflare

### 部署后

- [ ] 网站可访问
- [ ] 所有页面正常
- [ ] 图片加载正常
- [ ] 表单功能正常

---

## 🎯 快速部署命令

```bash
# 1. 构建
npm run build

# 2. 部署（选择一种）

# 方式 A: Wrangler CLI
wrangler pages deploy .next --project-name=ziiboxes

# 方式 B: Cloudflare Dashboard 手动上传
# 上传 .next 文件夹

# 方式 C: GitHub 自动部署
# 推送到 main 分支
```

---

## 🐛 常见问题

### Q: 构建失败

**A**: 检查 Node.js 版本（需要 18+）

### Q: 部署后页面空白

**A**: 检查 `.next` 文件夹是否正确上传

### Q: 图片不显示

**A**: 使用 `/images/` 路径，不要使用绝对路径

---

*最后更新*: 2026-03-06  
*状态*: 配置完成，等待部署
