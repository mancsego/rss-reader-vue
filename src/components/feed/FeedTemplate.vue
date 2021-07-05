<template>
  <div>
    <FeedWrapper v-if="feed.title && !feed.loading"/>
    <NoData v-if="!feed.title && !feed.loading"/>
    <div class="flex justify-center py-40" v-if="feed.loading">
      <div class="loader w-full"/>
    </div>
  </div>

</template>

<script>
const NoData = () => import('@/components/feed/FeedNoData')
const FeedWrapper = () => import('@/components/feed/FeedWrapper')

export default {
  name: 'FeedTemplate',
  components: { NoData, FeedWrapper },
  computed: {
    feed () {
      return this.$store.state.feed
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
