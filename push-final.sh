#!/bin/bash
# ZiiBoxes - 永久保存 Git 凭证并推送

echo "🔐 配置 Git 永久保存凭证..."
git config --global credential.helper store

echo ""
echo "📤 推送到 GitHub..."
echo "💡 这是最后一次需要输入密码，之后会永久保存！"
echo ""

cd /home/admin/.openclaw/workspace/ziiboxes
git push origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ 推送成功！"
    echo "✅ 凭证已保存到 ~/.git-credentials"
    echo ""
    echo "🎉 以后推送不再需要输入密码！"
    echo ""
    echo "📦 GitHub: https://github.com/shupande/ziiboxes"
    echo "☁️ Cloudflare: https://dash.cloudflare.com"
else
    echo ""
    echo "❌ 推送失败"
    echo ""
    echo "💡 请检查:"
    echo "   1. Token 是否正确"
    echo "   2. 网络连接"
    echo "   3. GitHub 仓库权限"
fi
