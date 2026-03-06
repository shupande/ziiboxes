#!/bin/bash
# ZiiBoxes - 刷新 Git 凭证并推送

echo "🔐 刷新 Git 凭证..."
git config credential.helper store

echo "📤 推送到 GitHub..."
echo "💡 如果提示输入，请输入一次 Token（会永久保存）"
echo ""

cd /home/admin/.openclaw/workspace/ziiboxes
git add .
git commit -m "Auto-update: $(date '+%Y-%m-%d %H:%M')" || echo "ℹ️ 没有新更改"
git push origin main

echo ""
if [ $? -eq 0 ]; then
    echo "✅ 推送成功！"
    echo "🎉 凭证已保存，下次自动推送！"
else
    echo "⚠️  推送失败，请手动执行："
    echo "   cd /home/admin/.openclaw/workspace/ziiboxes"
    echo "   git push origin main"
fi
