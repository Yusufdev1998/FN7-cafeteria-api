import { Injectable } from '@nestjs/common';
import { CashSources, CashStatus, OrderStatus } from 'generated/prisma';
import { PrismaService } from 'src/prisma.service';

const user_id = 1;
@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {}
  createOrder(data: any) {
    return this.prisma.orders.create({
      data: {
        user_id,
        OrderMeals: {
          createMany: {
            data: data.meals,
          },
        },
      },
    });
  }

  getOrder(id: number) {
    return this.prisma.orders.findFirst({
      where: { id },
      include: {
        OrderMeals: true,
      },
    });
  }

  async changeOrderStatus(id: number, status: OrderStatus) {
    const updated = await this.prisma.orders.update({
      where: { id },
      data: {
        status,
      },
      include: {
        OrderMeals: true,
      },
    });

    if (status === OrderStatus.CLOSED) {
      const money = updated.OrderMeals.reduce(
        (acc, el) => acc + el.price * el.quantity,
        0,
      );

      await this.prisma.cashTransactions.create({
        data: {
          source_id: updated.id,
          source_name: CashSources.ORDERS,
          amount: money,
          type: CashStatus.INCOME,
        },
      });
    }

    return updated;
  }
}
