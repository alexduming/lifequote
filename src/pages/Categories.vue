<template>
  <div class="categories-page container mx-auto px-4">
    <!-- 分类标签导航 -->
    <div class="category-tags flex flex-wrap gap-3 mb-8">
      <button 
        v-for="category in categories" 
        :key="category.id"
        class="px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200"
      >
        {{ category.name }}
      </button>
    </div>

    <!-- 语录列表 -->
    <div class="quotes-grid grid gap-6">
      <div v-for="quote in quotes" :key="quote.id" class="quote-card">
        <div class="p-6 bg-white rounded-lg shadow hover:shadow-md transition">
          <p class="text-lg mb-4">{{ quote.content }}</p>
          <div class="text-sm text-gray-600">
            —— {{ quote.author }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template> 