<template>
  <div class="container mx-auto">
    <div class="pb-8">
      <div class="flex justify-center"><img :src="feed.image.url" alt="img"></div>
      <div class="text-center pt-4"><h1 class="text-xl">{{ feed.description }}</h1></div>
    </div>
    <div class="px-5 pb-5 text-center flex justify-center">
      <div class="form-control">
        <div class="flex space-x-2">
          <input type="text" ref="filter" v-model="filter" placeholder="Filter by tag" class="input input-bordered">
          <button class="btn" @click="() => { this.filter = ''}">Reset filter</button>
        </div>
      </div>
    </div>
    <div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
      <FeedItem v-for="feedItem in posts" :item="feedItem" :key="feedItem.link"/>
      <h1 class="text-xl" v-if="!posts.length">No posts yet....</h1>
    </div>
  </div>
</template>

<script>
import FeedItem from './FeedItem'

export default {
  name: 'FeedWrapper',
  components: { FeedItem },
  data () {
    return {
      filter: ''
    }
  },
  computed: {
    feed () {
      return this.$store.state.feed
    },
    posts () {
      return this.$store.getters.filterByTag(this.filter.trim())
    }
  },
  async mounted () {
    await this.$nextTick()
    this.$refs.filter.focus()
  }
}
</script>
