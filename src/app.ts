import express from 'express';

import routes from './routes';

class App {
  public server;

  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;


/**
 * source: 
 * https://medium.com/@Evelyn.Taylor/easy-steps-to-set-up-typescript-with-node-js-and-express-4264eaf40351
 * https://levelup.gitconnected.com/creating-a-node-js-api-with-express-and-typescript-549fba5f5a33
 */