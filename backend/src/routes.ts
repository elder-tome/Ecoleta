import * as express from 'express';
import PointController  from './controllers/PointController';
import ItemController  from './controllers/ItemController';

const pointController = new PointController();
const itemController = new ItemController();

const routs = express.Router()

// index, show, create, update, delete

routs.post('/point', pointController.create);

routs.get('/point', pointController.index);

routs.get('/point/:id', pointController.show);

routs.post('/item', itemController.create);

routs.get('/item', itemController.index);

export default routs;
