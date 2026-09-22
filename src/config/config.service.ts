import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigService {
  async logMessage() {
    console.log('This is from the config service class');
  }
}
