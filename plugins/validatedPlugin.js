'use-strict';
const Joi = require('@hapi/joi');

module.exports = {
  pkg: require('../package.json'),
  register: async (server, options) => {
    server.route({
      method: 'GET',
      path: '/userinput/{name}/{phone}',
      handler: (req, h) => {
        return `Params are valid. Congratulations ${req.params.name}!`;
      },
      options: {
        validate: {
          params: {
            name: Joi.string(),
            phone: Joi.number()
          }
        }
      }
    });
  }
};
