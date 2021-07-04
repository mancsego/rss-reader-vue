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
  items: ['test']
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
})
