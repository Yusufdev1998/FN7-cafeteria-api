import { Controller } from '@nestjs/common';
import { CashTransactionsService } from './cash-transactions.service';

@Controller('cash-transactions')
export class CashTransactionsController {
  constructor(private readonly cashTransactionsService: CashTransactionsService) {}
}
