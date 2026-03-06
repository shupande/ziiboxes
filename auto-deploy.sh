#!/bin/bash
# ZiiBoxes - 自动推送脚本（使用凭证文件）

cd /home/admin/.openclaw/workspace/ziiboxes

# 检查是否有未推送的提交
if git rev-list --left-right --count origin/main...HEAD | grep -q "0	0"; then
    echo "✅ 已经是最新版本，无需推送"
    exit 0
fi

echo "📦 等待推送的提交:"
git log origin/main..HEAD --oneline

echo ""
echo "📤 推送到 GitHub..."

# 尝试直接推送
git push origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ 推送成功！"
    echo "☁️ Cloudflare 会自动部署..."
else
    echo ""
    echo "❌ 推送失败"
    echo "💡 请手动执行：git push origin main"
fi
