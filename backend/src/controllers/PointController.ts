import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Point from "../entity/Point";
import Item from '../entity/Item';

class PointController {

  public async create(request: Request, response: Response) {

    const pointRepository = getRepository(Point);
    const itemRepository = getRepository(Item);

    const { name, email, whatsapp, latitude, longitude, city, uf, item } = request.body;

    const point = new Point();
    point.image = 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60';
    point.name = name;
    point.email = email;
    point.whatsapp = whatsapp;
    point.latitude = latitude;
    point.longitude = longitude;
    point.city = city;
    point.uf = uf;
    const itens = await itemRepository.findByIds(item);
    point.item = itens;
    await pointRepository.save(point);

    return response.json({
      id: point.id,
      ...point
    });
  }

  public async index(request: Request, response: Response) {

    const pointRepository = getRepository(Point);

    const { city, uf, items } = request.query;
    //separa os valores apos a "," e eliminar os espaços.
    const parseItems = String(items).split(',').map( item => Number(item.trim()));

    const points = await pointRepository.createQueryBuilder('point')
    .leftJoin("point.item", "item")
    .where('item.id IN (:...parseItems) AND city = :city AND uf = :uf', { parseItems, city, uf })
    .getMany();

    response.json(points);
  }

  async show(request: Request, response: Response) {
    
    const pointRepository = getRepository(Point);

    const { id } = request.params;

    const point = await pointRepository.findOne(id, { relations: ['item'] });
    if (!point) {
      response.status(400).json({ message: 'point not found.' })
    }

    response.json(point);
  }

}

export default PointController;

//service pattern
//repository pattern (data mapper)