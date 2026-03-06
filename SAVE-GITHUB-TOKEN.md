# 🔐 GitHub 凭证固化指南

**状态**: ⏳ 等待首次手动输入

---

## ❌ 当前问题

Git 凭证**没有固化**，原因是：
- 之前没有成功完成过一次推送
- 需要手动输入一次 Token 来保存

---

## ✅ 解决方案（一次性操作）

### 执行以下命令：

```bash
cd /home/admin/.openclaw/workspace/ziiboxes
git config credential.helper store
git push origin main
```

**输入**：
```
Username: shupande
Password: [粘贴你的 GitHub Token]
```

**成功后**：
- ✅ 凭证保存到 `~/.git-credentials`
- ✅ 以后推送**不需要再输入密码**
- ✅ 自动推送脚本可以正常工作

---

## 🔍 验证凭证是否保存

```bash
# 检查凭证文件
cat ~/.git-credentials

# 应该显示类似：
# https://shupande:ghp_xxxxxxxxxxxx@github.com
```

---

## 🚀 保存后的自动化

凭证保存后，可以使用自动推送脚本：

```bash
# 自动推送脚本
bash /home/admin/.openclaw/workspace/ziiboxes/auto-push.sh

# 或者快速推送
bash /home/admin/.openclaw/workspace/ziiboxes/quick-push.sh
```

---

## 💡 为什么需要首次手动输入？

**安全原因**：
- Git 不能自动存储凭证
- 必须用户主动输入一次
- 这是 GitHub 的安全机制

**一次输入，永久保存**：
- 输入一次 Token
- 保存到 `~/.git-credentials`
- 以后所有推送自动使用

---

## 📋 Token 获取指南

如果没有 Token：

1. **访问**: https://github.com/settings/tokens
2. **点击**: "Generate new token (classic)"
3. **填写**:
   - Note: `ZiiBoxes Deployment`
   - Expiration: `No expiration`
   - Scopes: 勾选 ✅ `repo` (全部)
4. **点击**: "Generate token"
5. **复制**: Token（类似 `ghp_xxxxxxxxxxxx`）
6. **保存**: 立即复制，只显示一次！

---

*最后更新*: 2026-03-06  
*状态*: 等待首次手动输入 Token
