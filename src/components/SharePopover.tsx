return (
  <div className="relative">
    <Popover>
      <PopoverTrigger asChild>
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <Share className="w-5 h-5 text-gray-500" />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-80 z-50">
        <div className="space-y-4">
          {/* ... 现有的分享卡片内容 ... */}
        </div>
      </PopoverContent>
    </Popover>
  </div>
) 