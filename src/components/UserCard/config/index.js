export default {
  api: {
    baseUrl: 'https://randomuser.me/api',
    seed: 'pd2020-1',
    user: {
      fields: ['name', 'gender', 'email', 'picture'],
      allowedParams: ['page', 'seed', 'results', 'inc'],
    },
  },
};
