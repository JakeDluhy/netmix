const jsonServer = require('json-server');
const path = require('path');
const { serializeJsonapi, deserializeJsonapi } = require('./json-api-adapter');

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));

const middlewares = jsonServer.defaults();
server.use(middlewares);

server.use(jsonServer.bodyParser);
server.use(deserializeJsonapi);

router.render = serializeJsonapi;
server.use(router);

server.listen(3000, () => {
  console.log('JSON Server is running');
});
