import { Module } from '@nestjs/common';
import { LiveKitController } from './livekit.controller';

@Module({
  imports: [],
  controllers: [LiveKitController],
  providers: [],
})
export class LiveKitModule {}
