# ZiiBoxes - Cloudflare 部署完整指南

**最后更新**: 2026-03-06  
**项目位置**: `/home/admin/.openclaw/workspace/ziiboxes`  
**目标平台**: Cloudflare Pages

---

## 📋 部署前检查清单

### ✅ 必须完成

- [x] Next.js 项目编译通过
- [x] 所有页面创建完成（11 个页面）
- [ ] Git 仓库初始化
- [ ] GitHub 仓库创建
- [ ] Cloudflare 账户注册

### ⏳ 建议完成

- [ ] 域名 ziiboxes.com 已注册
- [ ] 真实产品图片已替换
- [ ] 表单连接到邮箱
- [ ] 添加导航栏和页脚

---

## 🚀 部署步骤

### 第 1 步：初始化 Git 仓库（5 分钟）

```bash
# 进入项目目录
cd /home/admin/.openclaw/workspace/ziiboxes

# 初始化 Git 仓库
git init

# 创建 .gitignore 文件（如果还没有）
cat > .gitignore << 'EOF'
# Node modules
node_modules/
.pnp/
.pnp.js

# Build outputs
.next/
out/
build/
dist/

# Debug logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Local env files
.env*.local
.env

# Vercel
.vercel

# TypeScript
*.tsbuildinfo
next-env.d.ts

# Testing
coverage/

# Misc
.DS_Store
*.pem

# Uploads
public/uploads/
public/images/products/*
!public/images/products/.gitkeep
EOF

# 添加所有文件到 Git
git add .

# 提交
git commit -m "Initial commit: ZiiBoxes website v1.0

Features:
- 11 complete pages (7 business + 4 legal)
- Next.js 14 + TypeScript + Tailwind CSS
- SEO optimized
- Mobile responsive
- Contact and quote forms
- Blog ready

Pages:
- Homepage
- Products (mailer-boxes)
- Quote/Inquiry
- Blog
- Contact
- Services
- About
- Privacy Policy
- Terms of Service
- Cookie Policy
- Disclaimer"

# 创建 main 分支
git branch -M main
```

---

### 第 2 步：创建 GitHub 仓库（5 分钟）

#### 选项 A：使用 GitHub 网站

1. **访问** https://github.com/new
2. **登录** 你的 GitHub 账户
3. **填写信息**:
   - Repository name: `ziiboxes`
   - Description: `ZiiBoxes - Custom Packaging for E-commerce Brands`
   - Visibility: **Public** (或 Private 如果不想公开)
   - ❌ 不要初始化 README
   - ❌ 不要添加 .gitignore
   - ❌ 不要选择 license
4. **点击** "Create repository"
5. **复制** 仓库 URL（类似 `https://github.com/YOUR_USERNAME/ziiboxes.git`）

#### 选项 B：使用 GitHub CLI

```bash
# 如果安装了 gh CLI
gh repo create ziiboxes --public --source=. --remote=origin --push
```

---

### 第 3 步：推送到 GitHub（2 分钟）

```bash
# 添加远程仓库（替换 YOUR_USERNAME 为你的 GitHub 用户名）
git remote add origin https://github.com/YOUR_USERNAME/ziiboxes.git

# 推送代码
git push -u origin main

# 验证推送成功
# 访问 https://github.com/YOUR_USERNAME/ziiboxes 查看代码
```

---

### 第 4 步：连接 Cloudflare Pages（10 分钟）

#### 4.1 注册/登录 Cloudflare

1. **访问** https://dash.cloudflare.com
2. **注册** 免费账户（如果还没有）
3. **验证** 邮箱

#### 4.2 创建 Pages 项目

1. **登录** Cloudflare Dashboard
2. **左侧菜单** 选择 "Workers & Pages"
3. **点击** "Create application"
4. **选择** "Pages" 标签
5. **点击** "Connect to Git"

#### 4.3 授权 GitHub

1. **点击** "Authorize Cloudflare Pages"
2. **登录** GitHub（如果需要）
3. **授权** Cloudflare 访问你的仓库
4. **选择** `ziiboxes` 仓库

#### 4.4 配置构建设置

**Build settings**:

```
Framework preset: Next.js
Build command: npm run build
Build output directory: .next
Root directory: / (leave as default)
```

**Environment variables** (点击 "Add variable"):

```
NODE_VERSION = 20
NEXT_TELEMETRY_DISABLED = 1
```

#### 4.5 开始部署

1. **点击** "Save and Deploy"
2. **等待** 构建完成（约 3-5 分钟）
3. **查看** 部署预览 URL（类似 `https://ziiboxes-xxxx.pages.dev`）

---

### 第 5 步：配置自定义域名（可选，10 分钟）

#### 如果你有 ziiboxes.com 域名

##### 选项 A：域名在 Cloudflare 管理

1. **在 Pages 项目** → "Custom domains"
2. **点击** "Set up a custom domain"
3. **输入** `ziiboxes.com`
4. **点击** "Activate domain"
5. Cloudflare **自动** 配置 DNS

##### 选项 B：域名在其他注册商

1. **在 Pages 项目** → "Custom domains"
2. **点击** "Set up a custom domain"
3. **输入** `ziiboxes.com`
4. **点击** "Continue"
5. **复制** DNS 配置信息：
   ```
   Type: CNAME
   Name: www
   Content: ziiboxes-xxxx.pages.dev
   TTL: Auto
   ```
6. **登录** 你的域名注册商（GoDaddy/Namecheap 等）
7. **添加** DNS 记录
8. **等待** DNS 传播（5-30 分钟）

---

### 第 6 步：配置生产环境变量（5 分钟）

在 Cloudflare Pages Dashboard：

1. **进入** Pages 项目
2. **点击** "Settings" → "Environment variables"
3. **添加生产变量**:

```
# 网站配置
NEXT_PUBLIC_SITE_URL = https://ziiboxes.com
NEXT_PUBLIC_SITE_NAME = ZiiBoxes

# 联系邮箱
CONTACT_EMAIL = hello@ziiboxes.com
SUPPORT_EMAIL = support@ziiboxes.com

# Analytics（后续添加）
NEXT_PUBLIC_GA_ID = G-XXXXXXXXXX
```

4. **点击** "Save"
5. **重新部署** 触发新构建

---

### 第 7 步：测试部署（5 分钟）

#### 访问测试

1. **访问** 你的 Pages URL: `https://ziiboxes-xxxx.pages.dev`
2. **测试** 所有页面:
   - [ ] 首页 `/`
   - [ ] 产品页 `/products/mailer-boxes`
   - [ ] 询盘页 `/quote`
   - [ ] 博客页 `/blog`
   - [ ] 联系我们 `/contact`
   - [ ] 服务页 `/services`
   - [ ] 关于我们 `/about`
   - [ ] 隐私政策 `/privacy`
   - [ ] 服务条款 `/terms`
   - [ ] Cookie 政策 `/cookie-policy`
   - [ ] 免责声明 `/disclaimer`

3. **检查** 移动端响应式
4. **测试** 表单提交
5. **验证** 图片加载

#### 性能测试

1. **访问** https://pagespeed.web.dev/
2. **输入** 你的 URL
3. **查看** 分数（目标：90+）

---

## 🔧 后续优化

### 1. 添加自动部署

```bash
# 现在每次推送到 main 分支都会自动部署
git add .
git commit -m "Update content"
git push origin main

# Cloudflare 会自动构建和部署
```

### 2. 配置预览部署

- 每次创建 Pull Request 都会生成预览 URL
- 用于测试新功能，不影响生产

### 3. 设置分析

在 Cloudflare Dashboard:
- Web Analytics → 启用
- 查看流量、性能等数据

### 4. 添加表单后端

**选项 A: Cloudflare Workers**
```bash
# 创建处理表单的 Worker
npx wrangler init form-handler
```

**选项 B: 第三方服务**
- Formspree: https://formspree.io
- EmailJS: https://www.emailjs.com
- Getform: https://getform.io

### 5. 设置自定义 404 页面

创建 `app/not-found.tsx`:
```tsx
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Page not found</p>
        <a href="/" className="text-blue-600 hover:underline">
          Go Home →
        </a>
      </div>
    </div>
  );
}
```

---

## 📊 部署检查清单

### 部署前

- [ ] 代码已提交到 Git
- [ ] GitHub 仓库已创建
- [ ] 代码已推送到 GitHub
- [ ] Cloudflare 账户已注册

### 部署中

- [ ] Pages 项目已创建
- [ ] GitHub 仓库已连接
- [ ] 构建配置正确
- [ ] 环境变量已设置
- [ ] 部署成功完成

### 部署后

- [ ] 所有页面可访问
- [ ] 移动端显示正常
- [ ] 图片加载正常
- [ ] 表单可以提交
- [ ] 性能分数 > 80
- [ ] 自定义域名配置（可选）
- [ ] SSL 证书自动启用

---

## 🐛 常见问题解决

### 问题 1: 构建失败

**错误**: `Error: Next.js build failed`

**解决**:
```bash
# 本地测试构建
npm run build

# 检查错误信息
# 修复后重新推送
git add .
git commit -m "Fix build errors"
git push origin main
```

### 问题 2: 图片不显示

**原因**: 图片路径错误或文件太大

**解决**:
```bash
# 检查图片是否在 public/images 目录
ls -la public/images/

# 优化图片大小
# 使用 https://squoosh.app 压缩图片
# 目标：< 500KB per image
```

### 问题 3: 自定义域名不工作

**原因**: DNS 未传播或配置错误

**解决**:
```
1. 等待 DNS 传播（最多 48 小时）
2. 检查 DNS 配置是否正确
3. 清除浏览器缓存
4. 使用 https://dnschecker.org 检查传播状态
```

### 问题 4: 表单不工作

**原因**: 没有后端处理

**解决**:
- 使用 Formspree 等第三方服务
- 或创建 Cloudflare Worker 处理

---

## 💰 Cloudflare 免费套餐限制

### Pages 免费套餐

- ✅ **无限请求**: 无限制
- ✅ **带宽**: 每月 100GB
- ✅ **构建次数**: 每月 500 次
- ✅ **预览部署**: 无限
- ✅ **自定义域名**: 无限
- ✅ **SSL 证书**: 免费自动

### 对于 ZiiBoxes

- 预计月流量：< 10GB（初期）
- 预计构建：< 50 次/月
- **完全在免费套餐内** ✅

---

## 📈 部署后的下一步

### 立即执行（部署后 24 小时）

1. **提交到 Google Search Console**
   - 访问 https://search.google.com/search-console
   - 添加网站
   - 提交 sitemap.xml

2. **设置 Google Analytics**
   - 访问 https://analytics.google.com
   - 创建属性
   - 添加 GA ID 到环境变量

3. **测试所有功能**
   - 表单提交
   - 页面加载速度
   - 移动端体验

### 第一周

1. **监控流量**
   - Cloudflare Analytics
   - Google Analytics

2. **收集反馈**
   - 测试用户体验
   - 修复发现的问题

3. **内容更新**
   - 添加更多产品页面
   - 写博客文章

### 第一个月

1. **SEO 优化**
   - 关键词排名追踪
   - 内容优化
   - 建立外链

2. **功能增强**
   - 连接表单到邮箱
   - 添加在线聊天
   - 优化转化率

---

## 🎯 快速部署命令总结

```bash
# 1. 初始化 Git
cd /home/admin/.openclaw/workspace/ziiboxes
git init
git add .
git commit -m "Initial commit"
git branch -M main

# 2. 推送到 GitHub（替换 YOUR_USERNAME）
git remote add origin https://github.com/YOUR_USERNAME/ziiboxes.git
git push -u origin main

# 3. 访问 Cloudflare 部署
# https://dash.cloudflare.com → Workers & Pages → Create → Connect to Git

# 4. 配置构建
# Framework: Next.js
# Build command: npm run build
# Output directory: .next

# 5. 部署完成！
# 访问 https://ziiboxes-xxxx.pages.dev
```

---

## 📞 需要帮助？

### Cloudflare 资源

- **文档**: https://developers.cloudflare.com/pages/
- **社区**: https://community.cloudflare.com/
- **状态**: https://www.cloudflarestatus.com/

### Next.js 资源

- **文档**: https://nextjs.org/docs
- **部署指南**: https://nextjs.org/docs/deployment

### 项目问题

检查项目文档:
- `/home/admin/.openclaw/workspace/ziiboxes/README.md`
- `/home/admin/.openclaw/workspace/ziiboxes/PROJECT-STATUS.md`

---

*最后更新*: 2026-03-06  
*部署状态*: 准备就绪 ✅
