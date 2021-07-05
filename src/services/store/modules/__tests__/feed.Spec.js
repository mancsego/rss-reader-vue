const initialState = {
  loading: true,
  feedUrl: null,
  image: null,
  description: null,
  link: null,
  title: null,
  posts: null
}

const mockRes = {
  feedUrl: 'test',
  image: 'test',
  description: 'test',
  link: 'test',
  title: 'test',
  items: [{ categories: ['cat', 'random'], link: 'cat-link' }, { categories: ['random'], link: 'tt-link' }]
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

  expect(feed.getters.filterByTag(feed.state)('cat')).toEqual([{ 'categories': ['cat', 'random'], 'link': 'cat-link' }])
  expect(feed.getters.filterByTag(feed.state)('random')).toEqual(
    [{ categories: ['cat', 'random'], link: 'cat-link' }, { categories: ['random'], link: 'tt-link' }]
  )
  expect(feed.getters.filterByTag(feed.state)()).toEqual(
    [{ categories: ['cat', 'random'], link: 'cat-link' }, { categories: ['random'], link: 'tt-link' }]
  )
})
