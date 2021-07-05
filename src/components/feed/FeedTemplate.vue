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
.loader {
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
