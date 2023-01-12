import { SendNotification } from '@application/useCases/sendNotification';
import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database.module';
import { NotificationsController } from './controllers/notifications.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [SendNotification],
})
export class HttpModule {}
