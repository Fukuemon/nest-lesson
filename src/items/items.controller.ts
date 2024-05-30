import { ItemsService } from './items.service';
import { Controller, Get } from '@nestjs/common';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {} // ItemsServiceをDIする

  // ここにリクエストハンドラを書く
  // 例: GETリクエストのハンドラ
  @Get()
  findAll(): string {
    return this.itemsService.find(); // ItemsServiceのfindメソッドを呼び出す
  }
}
