'use-strict';

module.exports = {
  name: 'myPlugin', // could be pkg: require('../package.json')
  version: '1.0.0',
  register: async (server, options) => {
    server.route({
      method: 'GET',
      path: '/test',
      handler: (req, h) => {
        return `Welcome from my first plugin. Salams ${options.name}`;
      }
    });
  }
};
