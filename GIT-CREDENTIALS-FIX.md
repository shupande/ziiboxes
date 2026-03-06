# 🔐 Git 凭证问题解决方案

## 问题分析

**现象**：
- 主人手动执行 `git push` 成功（不需要输入密码）
- 但我的 `exec` 命令执行 `git push` 失败（提示需要 Username）

**原因**：
- 凭证保存在**你的 shell 会话的内存缓存**中（`credential.helper=cache`）
- 我的 `exec` 命令运行在**不同的 shell 环境**，无法访问你的内存缓存
- 凭证**没有保存到文件**（`~/.git-credentials`），因为你的推送直接成功了，没有触发认证

---

## 解决方案（3 选 1）

### 方案 1：使用凭证文件（推荐）

**执行一次**：
```bash
cd /home/admin/.openclaw/workspace/ziiboxes

# 强制使用文件存储
git config --global credential.helper store

# 清除现有缓存
git credential reject

# 执行一次推送（会提示输入 Token）
git push origin main
```

**输入**：
```
Username: shupande
Password: [你的 GitHub Token]
```

**成功后**：
- ✅ 凭证保存到 `~/.git-credentials`
- ✅ 我可以自动推送
- ✅ 永久有效

---

### 方案 2：继续手动推送（简单）

**你执行**：
```bash
cd /home/admin/.openclaw/workspace/ziiboxes
git push origin main
```

**我继续**：
- 创建内容
- 提交代码
- 你定期推送

---

### 方案 3：使用 Token URL（不推荐，不安全）

```bash
# 在 URL 中包含 Token
git remote set-url origin https://shupande:TOKEN@github.com/shupande/ziiboxes.git
git push origin main
```

**缺点**：
- ❌ Token 会暴露在日志中
- ❌ 不安全
- ❌ 不推荐

---

## 当前状态

**等待推送的提交**：4 个
- Vinext 迁移
- Header 修复
- 蜡烛包装指南
- ESLint 修复

**推送命令**：
```bash
cd /home/admin/.openclaw/workspace/ziiboxes
git push origin main
```

---

*最后更新*: 2026-03-06 23:20
