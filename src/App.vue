<template>
  <div id="app">
    <Header/>
    <FeedWrapper v-if="feed.title" :feed="feed"/>
    <Footer/>
  </div>
</template>

<script>
import {STORE} from "./services/store/Constants";
import Header from "./components/Header";
import Footer from "./components/Footer";

const FeedWrapper = () => import("./components/feed/FeedWrapper");

export default {
  name: 'App',
  components: {
    Footer,
    FeedWrapper,
    Header
  },
  computed: {
    feed() {
      return this.$store.state.devNinetyEight
    }
  },
  beforeCreate() {
    this.$store.dispatch(STORE.POSTS.FETCH)
  }
}
</script>
