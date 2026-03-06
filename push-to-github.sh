#!/bin/bash
# ZiiBoxes - 推送到 GitHub 的脚本

echo "🚀 推送到 GitHub..."
echo ""
echo "💡 提示：输入 GitHub 密码或 Personal Access Token"
echo "   如果开启了两因素认证，需要使用 Token"
echo "   Token 创建：https://github.com/settings/tokens"
echo ""

cd /home/admin/.openclaw/workspace/ziiboxes

# 显示当前状态
echo "📊 Git 状态:"
git status --short
echo ""

# 推送
echo "📤 开始推送..."
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ 推送成功！"
    echo ""
    echo "🎯 下一步：访问 Cloudflare 部署"
    echo "   1. 访问 https://dash.cloudflare.com"
    echo "   2. Workers & Pages → Create application"
    echo "   3. Connect to Git → 选择 ziiboxes"
    echo "   4. 配置构建并部署"
    echo ""
    echo "📦 仓库地址：https://github.com/shupande/ziiboxes"
else
    echo ""
    echo "❌ 推送失败"
    echo ""
    echo "💡 可能的原因:"
    echo "   1. 用户名或密码错误"
    echo "   2. 需要使用 Personal Access Token"
    echo "   3. 仓库不存在或没有权限"
    echo ""
    echo "🔑 创建 Token: https://github.com/settings/tokens"
fi
