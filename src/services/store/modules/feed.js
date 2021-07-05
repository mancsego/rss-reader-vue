import Parser from 'rss-parser'

const parser = new Parser()

const PROXY = 'https://cors-proxy-dev98.herokuapp.com/'

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
    posts: []
  },
  mutations: {
    updatePosts (mutationObj) {
      feed.state.feedUrl = mutationObj.feedUrl
      feed.state.image = mutationObj.image
      feed.state.description = mutationObj.description
      feed.state.link = mutationObj.link
      feed.state.title = mutationObj.title
      feed.state.posts = mutationObj.items
      setTimeout(() => {
        feed.state.loading = false
      }, 0)
    }
  },
  actions: {
    async fetchPosts () {
      try {
        const feedResponse = await parser.parseURL(PROXY + FEED.POSTS)
        feed.mutations.updatePosts(feedResponse)
      } catch (e) {
        feed.mutations.updatePosts({})
      }
    }
  },
  getters: {
    filterByTag (state) {
      return (tag) => {
        if (!tag) {
          return state.posts
        }
        const normalizedTag = tag.toLowerCase()
        return state.posts.filter(post => post.categories.some(cat => cat.toLowerCase().includes(normalizedTag)))
      }
    },
    getByGuid (state) {
      return (guid) => {
        return state.posts.filter(post => post.guid.substring(post.guid.indexOf('?p=') + 1) === guid)
      }
    }
  }
}

export default feed
