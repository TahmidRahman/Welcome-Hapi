'use-strict';

const Hapi = require('@hapi/hapi');

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost'
  });

  server.route({
    method: 'GET',
    path: '/',
    handler: (req, h) => {
      return 'Hapi says me welcome!!!';
    }
  });

  await server.register([
    {
      plugin: require('./plugins/myPlugin'),
      options: { name: 'Rafique' },
      routes: {
        prefix: '/myplugins'
      }
    },
    {
      plugin: require('./plugins/validatedPlugin'),
      options: {}
    }
  ]);
  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', err => {
  console.log(err);
  process.exit(1);
});

init();
