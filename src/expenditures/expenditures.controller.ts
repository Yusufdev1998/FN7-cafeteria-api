import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ExpendituresService } from './expenditures.service';

@Controller('expenditures')
export class ExpendituresController {
  constructor(private readonly expendituresService: ExpendituresService) {}

  @Post()
  create(@Body() createExpenditureDto: any) {
    return this.expendituresService.create(createExpenditureDto);
  }

  @Get()
  findAll() {
    return this.expendituresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.expendituresService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateExpenditureDto: any) {
    return this.expendituresService.update(+id, updateExpenditureDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.expendituresService.remove(+id);
  }
}
