import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/signin')
  signIn(@Body() signInDto: any) {
    return this.usersService.signIn(signInDto);
  }
}
