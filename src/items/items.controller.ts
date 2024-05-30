import { ItemStatus } from './item-status.enum';
import { Item } from './item.model';
import { ItemsService } from './items.service';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {} // ItemsServiceをDIする

  // ここにリクエストハンドラを書く
  // 例: GETリクエストのハンドラ
  @Get()
  findAll(): string {
    return this.itemsService.find(); // ItemsServiceのfindメソッドを呼び出す
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
