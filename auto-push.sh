#!/bin/bash
# ZiiBoxes - 自动改进并推送脚本

echo "🚀 ZiiBoxes 自动改进和推送脚本"
echo "================================"
echo ""

# 检查凭证
if [ ! -f ~/.git-credentials ]; then
    echo "⚠️  警告：Git 凭证未保存"
    echo ""
    echo "📝 请先运行一次手动推送以保存凭证："
    echo "   cd /home/admin/.openclaw/workspace/ziiboxes"
    echo "   git push origin main"
    echo ""
    echo "💡 输入你的 GitHub Token 后，凭证会自动保存"
    echo ""
    exit 1
fi

echo "✅ Git 凭证已找到"
echo ""

# 进入项目目录
cd /home/admin/.openclaw/workspace/ziiboxes

# 检查是否有未提交的更改
if ! git diff --quiet || ! git diff --cached --quiet; then
    echo "📝 发现未提交的更改..."
    git add .
    git commit -m "Auto-update: $(date '+%Y-%m-%d %H:%M')"
    echo "✅ 更改已提交"
    echo ""
else
    echo "ℹ️  没有未提交的更改"
    echo ""
fi

# 推送
echo "📤 推送到 GitHub..."
git push origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ 推送成功！"
    echo ""
    echo "☁️ Cloudflare 会自动重新部署（3-5 分钟）"
    echo ""
    echo "🌐 访问：https://www.ziiboxes.com"
else
    echo ""
    echo "❌ 推送失败"
    echo ""
    echo "💡 请检查："
    echo "   1. 网络连接"
    echo "   2. GitHub 凭证是否有效"
    echo "   3. 仓库权限"
fi
