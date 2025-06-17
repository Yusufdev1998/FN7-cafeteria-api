import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  create(@Body() body: any) {
    return this.ordersService.createOrder(body);
  }

  @Get('/:id')
  get(@Param('id') id) {
    return this.ordersService.getOrder(+id);
  }

  @Patch('/:id/status')
  changeOrderStatus(@Param('id') id, @Body('status') status) {
    return this.ordersService.changeOrderStatus(+id, status);
  }
}
