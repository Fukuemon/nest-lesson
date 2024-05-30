import { ItemStatus } from './item-status.enum';
import { Item } from './item.model';
import { ItemsService } from './items.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {} // ItemsServiceをDIする

  // ここにリクエストハンドラを書く
  // 例: GETリクエストのハンドラ
  @Get()
  findAll(): Item[] {
    return this.itemsService.findAll(); // ItemsServiceのfindメソッドを呼び出す
  }

  @Get(':id')
  findById(@Param('id') id: string): Item {
    return this.itemsService.findById(id);
  }

  @Post()
  create(
    @Body('id') id: string,
    @Body('name') name: string,
    @Body('description') description: string,
    @Body('price') price: number,
  ): Item {
    const item: Item = {
      id,
      name,
      description,
      price,
      status: ItemStatus.ON_SALE,
    };
    return this.itemsService.create(item);
  }
}
