import Parser from 'rss-parser'

const parser = new Parser()

const PROXY = 'https://cors-anywhere.herokuapp.com/'

const FEED = {
  POSTS: 'https://dev98.de/feed/'
}
const feed = {
  state: {
    loading: true,
    feedUrl: null,
    image: null,
    description: null,
    link: null,
    title: null,
    posts: null
  },
  mutations: {
    updatePosts (mutationObj) {
      feed.state.feedUrl = mutationObj.feedUrl
      feed.state.image = mutationObj.image
      feed.state.description = mutationObj.description
      feed.state.link = mutationObj.link
      feed.state.title = mutationObj.title
      feed.state.posts = mutationObj.items
      setTimeout(() => { feed.state.loading = false }, 0)
    }
  },
  actions: {
    async fetchPosts () {
      const feedResponse = await parser.parseURL(PROXY + FEED.POSTS)
      feed.mutations.updatePosts(feedResponse)
    }
  },
  getters: {
    postById () {
      return 'Null yet'
    }
  }
}

export default feed
