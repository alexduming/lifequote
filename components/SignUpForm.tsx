/**
 * 注册表单组件
 */
const SignUpForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (isSubmitting) return;
    
    try {
      setIsSubmitting(true);
      setError('');
      
      // 处理注册逻辑
      await handleSignUp(email, password);
      
    } catch (error) {
      if (error.message.includes('rate limit')) {
        setError('请稍后再试，系统正在处理其他请求');
      } else {
        setError('注册失败，请稍后重试');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* 表单内容 */}
      {error && <div className="error-message">{error}</div>}
      <button 
        type="submit" 
        disabled={isSubmitting}
      >
        {isSubmitting ? '处理中...' : '注册'}
      </button>
    </form>
  );
}; 