/**
 * 处理用户注册
 * @param {string} email - 用户邮箱
 * @param {string} password - 用户密码
 */
const handleSignUp = async (email: string, password: string) => {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      }
    });

    if (error) {
      // 处理特定错误
      if (error.message.includes('rate limit')) {
        alert('请稍后再试。为了保护系统，我们限制了注册频率。');
        return;
      }
      throw error;
    }

    // 注册成功
    alert('验证邮件已发送，请查收邮箱完成注册');
    
  } catch (error) {
    console.error('注册失败:', error);
    // 显示用户友好的错误信息
    alert('注册过程中出现错误，请稍后重试');
  }
}; 