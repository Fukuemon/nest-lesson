import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty, IsString, MaxLength, Min } from 'class-validator';

export class CreateItemDto {
  @IsString() // 文字列
  @IsNotEmpty() // 空でない
  @MaxLength(40) // 40文字以内
  name: string;

  @IsInt() // 整数
  @Min(1) // 1以上
  @Type(() => Number) // number型に変換
  price: number;

  @IsString() // 文字列
  @IsNotEmpty() // 空でない
  description: string;
}
