#!/bin/bash
# ZiiBoxes - 自动部署到 Cloudflare（无需 Git 推送）

echo "🚀 部署 ZiiBoxes 到 Cloudflare Pages"
echo "===================================="
echo ""

cd /home/admin/.openclaw/workspace/ziiboxes

# 检查 Wrangler 是否安装
if ! command -v wrangler &> /dev/null; then
    echo "❌ Wrangler 未安装"
    echo "💡 请执行：npm install -g wrangler"
    exit 1
fi

# 检查是否登录
echo "🔐 检查 Cloudflare 登录状态..."
if ! wrangler whoami &> /dev/null; then
    echo "❌ 未登录 Cloudflare"
    echo "💡 请执行：wrangler login"
    exit 1
fi

echo "✅ 已登录 Cloudflare"
echo ""

# 构建
echo "📦 构建项目..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ 构建失败"
    exit 1
fi

echo "✅ 构建成功"
echo ""

# 部署
echo "📤 部署到 Cloudflare Pages..."
wrangler pages deploy .next --project-name=ziiboxes

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ 部署成功！"
    echo "🌐 访问：https://ziiboxes.pages.dev"
else
    echo ""
    echo "❌ 部署失败"
    echo "💡 请检查 Cloudflare 登录状态"
fi
