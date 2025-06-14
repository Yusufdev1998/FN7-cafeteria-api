import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MealsModule } from './meals/meals.module';
import { OrdersModule } from './orders/orders.module';
import { ExpendituresModule } from './expenditures/expenditures.module';
import { UsersModule } from './users/users.module';
import { CashTransactionsModule } from './cash-transactions/cash-transactions.module';

@Module({
  imports: [MealsModule, OrdersModule, ExpendituresModule, UsersModule, CashTransactionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
