<template>
  <div class="container mx-auto">
    <div class="card shadow">
      <div class="card-body text-justify">
        <h2 class="card-title text-center">{{ post.title }}</h2>
        <div class="text-gray-500">
          <p>
            {{ pubDate }} |
            <a target="_blank" rel="noopener noreferrer" class="hover:text-blue-800" :href="post.comments">Comments</a>
          </p>
          <p class="mb-2">{{ post.creator }}</p>
          <Tag v-for="(category, index) in post.categories" :tag="category" :key="index"/>
        </div>
        <div class="divider"></div>
        <div class="" v-html="post['content:encoded']"/>
      </div>
      <router-link class="text-blue-600 py-5 px-5" to="/">
        <button class="btn btn-outline">Back</button>
      </router-link>
    </div>
  </div>
</template>

<script>
const Tag = () => import('@/components/basic/Tag')

export default {
  name: 'PostTemplate',
  components: { Tag },
  computed: {
    post () {
      const posts = this.$store.getters.getByGuid(this.$route.params.post_id)
      return posts.length ? posts[0] : ''
    },
    pubDate () {
      return new Date(this.post.pubDate).toDateString()
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
