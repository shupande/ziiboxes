#!/bin/bash
# 测试推送脚本

echo "🔐 测试 Git 凭证..."
cd /home/admin/.openclaw/workspace/ziiboxes

echo "📊 当前状态:"
git status --short

echo ""
echo "📦 待推送提交:"
git log origin/main..HEAD --oneline

echo ""
echo "📤 执行推送..."
git push origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ 推送成功！凭证已固化！"
    echo "🎉 以后可以自动推送了！"
else
    echo ""
    echo "❌ 推送失败"
    echo "💡 请手动执行：git push origin main"
fi
