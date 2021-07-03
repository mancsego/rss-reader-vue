import Parser from 'rss-parser'

const parser = new Parser()

const PREFIX = 'https://cors-anywhere.herokuapp.com/'

const FEED = {
  POSTS: 'https://dev98.de/feed/'
}
const devNinetyEight = {
  state: {
    feedUrl: null,
    image: null,
    description: null,
    link: null,
    title: null,
    posts: null
  },
  mutations: {
    updatePosts (mutationObj) {
      devNinetyEight.state.feedUrl = mutationObj.feedUrl
      devNinetyEight.state.image = mutationObj.image
      devNinetyEight.state.description = mutationObj.description
      devNinetyEight.state.link = mutationObj.link
      devNinetyEight.state.title = mutationObj.title
      devNinetyEight.state.posts = mutationObj.items
    }
  },
  actions: {
    async fetchPosts () {
      const feed = await parser.parseURL(PREFIX + FEED.POSTS)
      devNinetyEight.mutations.updatePosts(feed)
    }
  },
  getters: {
    postById () {
      return 'Null yet'
    }
  }
}

export default devNinetyEight
