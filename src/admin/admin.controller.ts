import { Body, Controller, Post } from '@nestjs/common';
import { AdminSignupDto } from 'src/auth/dto';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post('register-admin')
  registerAdmin(@Body() dto: AdminSignupDto) {
    return this.adminService.registerAdmin(dto);
  }
}
