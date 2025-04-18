import { IsNotEmpty, IsString } from 'class-validator';
import { SignupDto } from './signup.dto';

export class AdminSignupDto extends SignupDto {
  @IsString()
  @IsNotEmpty()
  secretKey: string;
}
