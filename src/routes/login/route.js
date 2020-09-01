module.exports = {
  all: () => [{ slug: '/login/' }],
  permalink: ({ request }) => request.slug,
};
