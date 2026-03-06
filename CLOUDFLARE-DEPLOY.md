# 🚀 ZiiBoxes - Cloudflare 部署指南

**部署平台**: Cloudflare Pages (原生 Next.js 支持)  
**最后更新**: 2026-03-06

---

## 📋 配置说明

### 已配置

- ✅ Next.js 15.5.12
- ✅ React 19.2.4
- ✅ Cloudflare Pages 原生支持
- ✅ Wrangler CLI
- ✅ @cloudflare/next-on-pages

### 部署方式

#### 方式 1: GitHub 自动部署（推荐）

1. **连接 GitHub 仓库到 Cloudflare Pages**
   - 访问 https://dash.cloudflare.com
   - Workers & Pages → Create application → Pages
   - Connect to Git → 选择 `ziiboxes` 仓库

2. **配置构建设置**
   ```
   Framework preset: Next.js
   Build command: npm run build
   Build output directory: .next
   Root directory: /
   ```

3. **保存并部署**
   - 点击 "Save and Deploy"
   - Cloudflare 会自动构建和部署
   - 等待 3-5 分钟完成

4. **自动部署**
   - 每次推送到 `main` 分支都会自动触发构建
   - 无需手动操作

#### 方式 2: 命令行部署

```bash
# 安装依赖
npm install

# 本地预览
npm run preview

# 部署到 Cloudflare
npm run deploy
```

---

## 🔧 配置优化

### 已优化设置

**next.config.mjs**:
```javascript
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
};
```

**wrangler.toml**:
- compatibility_date: 2024-09-23
- compatibility_flags: ["nodejs_compat"]
- pages_build_output_dir: .vercel/output/static

### 环境变量

在 Cloudflare Pages Dashboard 设置：

```
NEXT_PUBLIC_SITE_URL = https://ziiboxes.com
NEXT_PUBLIC_SITE_NAME = ZiiBoxes
CONTACT_EMAIL = hello@ziiboxes.com
```

---

## 📊 部署检查清单

### 部署前

- [x] Next.js 配置正确
- [x] Wrangler 配置正确
- [x] 代码已推送到 GitHub
- [ ] Cloudflare Pages 已连接
- [ ] 构建配置已设置

### 部署后

- [ ] 网站可访问
- [ ] 所有页面正常
- [ ] 图片加载正常
- [ ] 表单功能正常
- [ ] 移动端响应式正常

---

## 🎯 性能优化

### 已启用

- ✅ 静态导出
- ✅ 图片优化
- ✅ 代码分割
- ✅ Tree shaking

### 建议添加

- [ ] 构建缓存配置
- [ ] CDN 缓存优化
- [ ] 图片懒加载
- [ ] 字体优化

---

## 🐛 常见问题

### Q: 构建失败

**A**: 检查 Node.js 版本，确保使用 Node 18+

### Q: 图片不显示

**A**: 使用 `/images/` 路径，不要使用绝对路径

### Q: 表单不工作

**A**: 使用第三方服务（Formspree/EmailJS）或创建 Cloudflare Function

---

## 📈 监控和分析

### Cloudflare Analytics

访问 Cloudflare Dashboard → Pages → Analytics

查看：
- 访问量
- 带宽使用
- 请求数
- 错误率

### Google Analytics

在 `app/layout.tsx` 中添加 GA 脚本：

```typescript
<script
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
  async
/>
```

---

*最后更新*: 2026-03-06  
*状态*: 配置完成，等待部署
