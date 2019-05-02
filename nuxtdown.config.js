module.exports = {
  api: function (isStatic) {
    const baseURL = 'http://localhost:3000'
    const browserBaseURL = !isStatic ? '' : process.env.BASE_URL

    return {
      baseURL,
      browserBaseURL
    }
  },
  content: [
    [
      'blog',
      {
        page: '/blog/posts/_post',
        permalink: '/:slug',
        isPost: true
      }
    ],
    [
      'products',
      {
        page: '/products/_product',
        permalink: '/product/:slug',
        isPost: false
      }
    ]
  ]
}
