import 'reflect-metadata';
import * as express from 'express';
import { createConnection } from 'typeorm';
import * as cors from 'cors';
import * as path from 'path';

import routes from './routes';

createConnection().then(() => {

  const app = express();

  app.use(cors());
  
  app.use(express.json());
  
  app.use(routes);
  
  app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
  
  app.listen(3333);

}).catch(error => console.log(error));
