<template>
  <div class="container mx-auto">
    <div class="pb-8">
      <div class="flex justify-center"><img :src="feed.image.url" alt="img"></div>
      <div class="text-center pt-4"><h1 class="text-xl">{{ feed.description }}</h1></div>
    </div>
    <div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
      <FeedItem v-for="feedItem in feed.posts" :item="feedItem" :key="feedItem.link"/>
      <h1 class="text-xl" v-if="!feed.posts.length">No posts yet....</h1>
    </div>
  </div>
</template>

<script>
import FeedItem from './FeedItem'

export default {
  name: 'FeedWrapper',
  components: { FeedItem },
  props: {
    feed: Object
  },
  created () {
    console.log(this.feed)
  }
}
</script>
