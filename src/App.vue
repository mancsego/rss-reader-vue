<template>
  <div id="app">
    <Header/>
    <FeedWrapper v-if="feed.title"/>
    <Footer/>
  </div>
</template>

<script>
import {STORE} from "./services/store/Constants";
import Header from "./components/Header";
import Footer from "./components/Footer";

const FeedWrapper = import("./components/feed/FeedWrapper");

export default {
  name: 'App',
  components: {
    Footer,
    FeedWrapper,
    Header
  },
  computed: {
    feed() {
      console.log(this.$store.state.devNinetyEight)
      return this.$store.state.devNinetyEight
    }
  },
  beforeCreate() {
    this.$store.dispatch(STORE.POSTS.FETCH)
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
