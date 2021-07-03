<template>
  <div class="container mx-auto">
    {{ feed.title }}
    <div class="grid grid-cols-3 gap-5">
      <FeedItem v-for="feedItem in feed.posts" :item="feedItem" :key="feedItem.link"/>
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
  }
}
</script>
