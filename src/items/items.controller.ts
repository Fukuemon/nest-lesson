import { Controller, Get } from '@nestjs/common';

@Controller('items')
export class ItemsController {
  // ここにコントローラのロジックを書く
  constructor() {}

  // ここにリクエストハンドラを書く
  // 例: GETリクエストのハンドラ
  @Get()
  findAll(): string {
    return 'This action returns all items';
  }
}
