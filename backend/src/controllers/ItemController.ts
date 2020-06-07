import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Item from '../entity/Item';

class ItemController {

  async create(request: Request, response: Response) {

    const itemRepository = getRepository(Item);

    const { image, title } = request.body;

    const item = new Item();
    item.image = image;
    item.title = title;
    await itemRepository.save(item);

    return response.json({ mensage: 'ok' });

  }

  async index(request: Request, response: Response) {

    const itemRepository = getRepository(Item);

    const items = await itemRepository.find();

    const serializedItems = items.map(item => {
      return {
        id: item.id,
        title: item.title,
        image_url: `http://localhost:3333/uploads/${item.image}`
      }
    })

    response.json(serializedItems);

  }

}

export default ItemController;