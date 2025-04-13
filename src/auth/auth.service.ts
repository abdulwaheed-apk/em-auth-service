import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  signup() {
    return 'sign up';
  }

  signin() {
    return 'sign in';
  }
}
