import { Injectable } from '@nestjs/common';

@Injectable()
export class ExpendituresService {
  create(createExpenditureDto: any) {
    return 'This action adds a new expenditure';
  }

  findAll() {
    return `This action returns all expenditures`;
  }

  findOne(id: number) {
    return `This action returns a #${id} expenditure`;
  }

  update(id: number, updateExpenditureDto: any) {
    return `This action updates a #${id} expenditure`;
  }

  remove(id: number) {
    return `This action removes a #${id} expenditure`;
  }
}
