import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AuthService } from 'src/auth/auth.service';
import { AdminSignupDto } from 'src/auth/dto';

@Injectable()
export class AdminService {
  constructor(
    private authService: AuthService,
    private config: ConfigService,
  ) {}

  async registerAdmin(dto: AdminSignupDto) {
    const ADMIN_SECRET_KEY = this.config.get('ADMIN_SECRET_KEY') as string;

    if (dto.secretKey !== ADMIN_SECRET_KEY) {
      throw new UnauthorizedException('Invalid admin secret key');
    }

    return this.authService.signup(dto, true);
  }
}
