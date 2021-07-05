const initialState = {
  loading: true,
  feedUrl: null,
  image: null,
  description: null,
  link: null,
  title: null,
  posts: []
}

const items = [{ categories: ['cat', 'random'], guid: 'test', link: 'cat-link' }, { categories: ['random'], guid: 'guid', link: 'tt-link' }]
const mockRes = {
  feedUrl: 'test',
  image: 'test',
  description: 'test',
  link: 'test',
  title: 'test',
  items: items
}
jest.mock('rss-parser', () => {
  return jest.fn().mockImplementation(() => {
    return { parseURL: jest.fn(() => mockRes) }
  })
})

test('Test feed store', async () => {
  const feed = require('@/services/store/modules/feed').default
  expect(feed.state).toEqual(initialState)
  await feed.actions.fetchPosts()
  expect(feed.state.feedUrl).toEqual(mockRes.feedUrl)

  expect(feed.getters.filterByTag(feed.state)('cat')).toEqual([{ categories: ['cat', 'random'], guid: 'test', link: 'cat-link' }])

  expect(feed.getters.filterByTag(feed.state)('random')).toEqual(items)
  expect(feed.getters.filterByTag(feed.state)()).toEqual(items)

  expect(feed.getters.getByGuid(feed.state)('test')).toEqual([{ categories: ['cat', 'random'], guid: 'test', link: 'cat-link' }])
})
