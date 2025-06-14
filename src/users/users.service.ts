import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  async signIn(signInDto: any) {
    const { login, password } = signInDto;

    const user = await this.prisma.users.findFirst({
      where: {
        login,
        password,
      },
    });

    if (user) {
      return {
        message: 'Success',
        data: {
          id: user.id,
          fullName: user.fullName,
        },
      };
    }

    throw new UnauthorizedException('Incorrect login or password');
  }
}
