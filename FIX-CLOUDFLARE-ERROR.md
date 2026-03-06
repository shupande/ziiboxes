# 🚨 Cloudflare 部署错误修复

**错误原因**: OpenNext Cloudflare 不支持 Next.js 14.x

**解决方案**: 升级到 Next.js 15

---

## 🔧 修复步骤

### 方案 1：升级 Next.js（推荐）

```bash
cd /home/admin/.openclaw/workspace/ziiboxes

# 升级 Next.js 到 15.x
npm install next@15 react@19 react-dom@19

# 验证版本
npm list next react react-dom

# 提交更改
git add package.json package-lock.json
git commit -m "Upgrade to Next.js 15 for Cloudflare compatibility"

# 推送到 GitHub
git push origin main
```

**Cloudflare 会自动重新部署！**

---

### 方案 2：使用 Cloudflare Pages 原生支持（备选）

如果不升级 Next.js，可以使用 Cloudflare Pages 的原生 Next.js 支持：

1. **删除自动部署命令**
   - Cloudflare Pages → Settings → Build & deployments
   - 删除 `npx wrangler deploy` 命令

2. **配置 Next.js 构建**
   ```
   Framework preset: Next.js
   Build command: npm run build
   Build output directory: .next
   ```

3. **重新部署**

---

## 💡 推荐方案

**使用方案 1（升级 Next.js 15）**

**优点**:
- ✅ 支持最新功能
- ✅ 性能更好
- ✅ 安全更新
- ✅ Cloudflare 完美支持

**升级命令**:
```bash
cd /home/admin/.openclaw/workspace/ziiboxes
npm install next@15 react@19 react-dom@19
git add .
git commit -m "Upgrade to Next.js 15"
git push origin main
```

---

## 📊 Next.js 15 主要变化

### 破坏性变更
- React 19 必需
- 某些 API 废弃
- 路由约定变化

### 我们的项目影响
- ✅ 我们的代码兼容（使用标准 API）
- ✅ 只需更新依赖版本
- ✅ 无需修改代码

---

*最后更新*: 2026-03-06  
*状态*: 等待升级
