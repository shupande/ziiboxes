#!/bin/bash
# 自动推送脚本 - 使用保存的凭证

cd /home/admin/.openclaw/workspace/ziiboxes

# 配置凭证保存
git config --global credential.helper store

# 检查是否有未推送的提交
if git rev-list --left-right --count origin/main...HEAD | grep -q "0	0"; then
    echo "✅ 已经是最新版本"
    exit 0
fi

# 推送
echo "📤 推送到 GitHub..."
git push origin main

if [ $? -eq 0 ]; then
    echo "✅ 推送成功！"
    echo "☁️ Cloudflare 正在部署..."
else
    echo "❌ 推送失败 - 需要手动输入 Token"
    exit 1
fi
