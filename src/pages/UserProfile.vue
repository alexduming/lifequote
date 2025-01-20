<template>
  <div class="user-profile container mx-auto px-4">
    <!-- 用户信息 -->
    <div class="user-info mb-8">
      <div class="flex items-center gap-4">
        <img :src="user.avatar" class="w-20 h-20 rounded-full">
        <div>
          <h2 class="text-xl font-bold">{{ user.name }}</h2>
          <p class="text-gray-600">已收藏 {{ user.savedQuotes.length }} 条语录</p>
        </div>
      </div>
    </div>

    <!-- 收藏的语录 -->
    <div class="saved-quotes">
      <h3 class="text-lg font-bold mb-4">我的收藏</h3>
      <div class="grid gap-4">
        <!-- 收藏列表 -->
      </div>
    </div>
  </div>
</template> 