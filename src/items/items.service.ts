import { Injectable } from '@nestjs/common';

@Injectable()
export class ItemsService {
  find(): string {
    return 'This action returns all items';
  }
}
