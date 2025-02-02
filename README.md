# LifeQuote

一个分享和收藏名言的平台。

## 环境要求

- Node.js 18+
- npm 或 yarn

## 开发设置

1. 克隆仓库：

```bash
git clone https://github.com/yourusername/lifequote.git
cd lifequote
```

2. 安装依赖：

```bash
npm install
# 或
yarn install
```

3. 环境变量设置：

复制环境变量示例文件并设置您的值：

```bash
cp .env.example .env.local
```

然后编辑 `.env.local` 文件，填写以下必需的环境变量：

- `NEXT_PUBLIC_SUPABASE_URL`: Supabase 项目 URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Supabase 匿名密钥
- `NEXT_PUBLIC_SITE_URL`: 您的网站 URL（开发环境使用 http://localhost:3000）

您可以在 Supabase 项目设置中找到这些值。

4. 运行开发服务器：

```bash
npm run dev
# 或
yarn dev
```

## 部署

1. 确保设置了所有必需的环境变量
2. 构建项目：

```bash
npm run build
# 或
yarn build
```

3. 启动生产服务器：

```bash
npm start
# 或
yarn start
```

## 功能

- 多语言支持（中文/英文）
- 用户认证系统
- 个人资料管理
- 名言收藏功能
- 点赞和分享功能
- 响应式设计

## 技术栈

- Next.js 13+ (App Router)
- TypeScript
- Tailwind CSS
- Supabase 