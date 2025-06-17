import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class MealsService {
  constructor(private prisma: PrismaService) {}
  create(createMealDto: any) {
    return this.prisma.meals.create({ data: createMealDto });
  }

  findAll() {
    return this.prisma.meals.findMany();
  }

  findOne(id: number) {
    return this.prisma.meals.findFirst({ where: { id } });
  }

  update(id: number, updateMealDto: any) {
    return this.prisma.meals.update({
      where: {
        id,
      },
      data: updateMealDto,
    });
  }

  remove(id: number) {
    return this.prisma.meals.delete({ where: { id } });
  }
}
