module.exports = {
  all: () => [{ slug: '/' }],
  permalink: ({ request }) => request.slug,
  data: async ({ query, request, data }) => {
    return {
      ...data,
      aapje: 'Aapje',
    };
  },
};
