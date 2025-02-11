import React from 'react';
import { Share, Link as LinkIcon, Twitter, Facebook } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { toast } from 'sonner';

interface SharePopoverProps {
  url?: string;
  title?: string;
}

/**
 * 分享弹出框组件
 * @param {SharePopoverProps} props - 组件属性
 * @returns {JSX.Element} 分享弹出框
 */
export default function SharePopover({ url = window.location.href, title = document.title }: SharePopoverProps) {
  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      toast.success('链接已复制到剪贴板');
    } catch (err) {
      toast.error('复制链接失败');
    }
  };

  const handleShare = (platform: string) => {
    const shareUrls: { [key: string]: string } = {
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
    };

    window.open(shareUrls[platform], '_blank');
  };

  return (
    <div className="relative">
      <Popover>
        <PopoverTrigger asChild>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Share className="w-5 h-5 text-gray-500" />
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-medium">分享这条语录</h3>
              <p className="text-sm text-gray-500">选择分享方式</p>
            </div>
            
            <div className="flex flex-col gap-2">
              <button
                onClick={handleCopyLink}
                className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <LinkIcon className="w-5 h-5" />
                <span>复制链接</span>
              </button>
              
              <button
                onClick={() => handleShare('twitter')}
                className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Twitter className="w-5 h-5" />
                <span>分享到 Twitter</span>
              </button>
              
              <button
                onClick={() => handleShare('facebook')}
                className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Facebook className="w-5 h-5" />
                <span>分享到 Facebook</span>
              </button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
} 