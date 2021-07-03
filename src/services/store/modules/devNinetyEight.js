import Parser from "rss-parser";

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
        updatePosts(mutationObj) {
            devNinetyEight.feedUrl = mutationObj.feedUrl;
            devNinetyEight.image = mutationObj.image;
            devNinetyEight.description = mutationObj.description;
            devNinetyEight.link = mutationObj.link;
            devNinetyEight.title = mutationObj.title;
            devNinetyEight.post = mutationObj.items;
        }
    },
    actions: {
        async fetchPosts() {
            const feed = await parser.parseURL(PREFIX + FEED.POSTS);
            devNinetyEight.mutations.updatePosts(feed)
        }
    },
    getters: {
        postById() {
            return 'Null yet';
        }
    }
}

export default devNinetyEight
