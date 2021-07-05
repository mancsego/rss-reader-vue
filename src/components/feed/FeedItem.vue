<template>
  <div class="card shadow text-center pb-4 mx-2 bg-white">
    <div class="card-body pb-0">
      <div class="card-title h-20 mb-2">
        <a target="_blank" rel="noopener noreferrer" class="hover:text-blue-800" :href="item.link">
          <h2>{{ item.title }}</h2>
        </a>
      </div>
      <div class="text-gray-500">
        <p>
          {{ pubDate }} |
          <a target="_blank" rel="noopener noreferrer" class="hover:text-blue-800" :href="item.comments">Comments</a>
        </p>
        <p class="mb-2">{{ item.creator }}</p>
        <Tag v-for="(category, index) in item.categories" :tag="category" :key="item.guid + index"/>
      </div>
      <div class="divider"></div>
      <div class="pb-5">{{ content }}</div>
    </div>
    <router-link class="text-blue-600" :to="link">
      <button class="btn btn-outline">Read more...</button>
    </router-link>
  </div>
</template>

<script>
const Tag = () => import('@/components/basic/Tag')

export default {
  name: 'FeedItem',
  components: { Tag },
  props: {
    item: Object
  },
  computed: {
    content () {
      return this.item.contentSnippet.replaceAll('Read More', '')
    },
    link () {
      const guid = this.item.guid
      return '/post/' + guid.substring(guid.indexOf('?p=') + 1)
    },
    pubDate () {
      return new Date(this.item.pubDate).toDateString()
    }
  }
}
</script>
