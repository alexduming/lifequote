/**
 * 检查必需的环境变量是否已设置
 */
export function checkRequiredEnvVars() {
  const requiredEnvVars = [
    'NEXT_PUBLIC_SUPABASE_URL',
    'NEXT_PUBLIC_SUPABASE_ANON_KEY',
  ];

  const missingEnvVars = requiredEnvVars.filter(
    (envVar) => !process.env[envVar]
  );

  if (missingEnvVars.length > 0) {
    throw new Error(
      `Missing required environment variables:\n${missingEnvVars.join('\n')}\n\n` +
      '请确保在 .env.local 文件中设置这些环境变量。\n' +
      '如果您还没有创建 .env.local 文件，请复制 .env.example 并填写相应的值。'
    );
  }
} 