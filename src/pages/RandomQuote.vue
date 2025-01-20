<template>
  <div class="random-quote-page container mx-auto px-4 py-12">
    <div class="max-w-2xl mx-auto text-center">
      <!-- 随机语录展示 -->
      <div class="quote-display mb-8">
        <p class="text-2xl mb-4">{{ currentQuote.content }}</p>
        <p class="text-gray-600">—— {{ currentQuote.author }}</p>
      </div>

      <!-- 操作按钮 -->
      <div class="actions flex justify-center gap-4">
        <button 
          @click="getNewQuote"
          class="px-6 py-3 bg-blue-500 text-white rounded-lg"
        >
          换一条
        </button>
        <button 
          @click="saveQuote"
          class="px-6 py-3 border border-blue-500 text-blue-500 rounded-lg"
        >
          收藏
        </button>
      </div>
    </div>
  </div>
</template> 