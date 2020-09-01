module.exports = {
  all: () => [{ slug: '/account/' }],
  permalink: ({ request }) => request.slug,
  ssrOnly: true,
};
