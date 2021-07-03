<template>
  <div class="card shadow text-center">
    <div class="card-body">
      <h2 class="card-title">{{ item.title }}</h2>
      <p>{{ item.creator }} | {{ item.pubDate }}</p>
      <div class="divider"></div>
      <div>{{ content }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeedItem',
  props: {
    item: Object
  },
  computed: {
    content () {
      return this.item.contentSnippet.replaceAll('Read More', '')
    }
  },
  created() {
    console.log(this.item)
  }
}
</script>
