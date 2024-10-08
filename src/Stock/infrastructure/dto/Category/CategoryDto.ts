import { AutoMap } from '@automapper/classes';

export class CategoryDto {
  @AutoMap()
  id: number;

  @AutoMap()
  description: string;
}
