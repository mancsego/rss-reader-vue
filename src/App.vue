<template>
  <div id="app" class="bg-gray-100">
    <Header/>
    <div class="content mb-4">
      <router-view/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import { STORE } from './services/store/Constants'
import Header from './components/basic/Header'
import Footer from './components/basic/Footer'

export default {
  name: 'App',
  components: {
    Footer,
    Header
  },
  beforeCreate () {
    this.$store.dispatch(STORE.POSTS.FETCH)
  }
}
</script>
<style scoped lang="css">
.content {
  min-height: 500px;
}
</style>
