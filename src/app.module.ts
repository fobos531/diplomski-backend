import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TitlesModule } from './titles/titles.module';
import { MoviesModule } from './movies/movies.module';
import { TvModule } from './tv/tv.module';
import { WsModule } from './ws/ws.module';
import { SearchModule } from './search/search.module';
import { LiveKitModule } from './livekit/livekit.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DATABASE_URL),
    UsersModule,
    TitlesModule,
    MoviesModule,
    TvModule,
    WsModule,
    SearchModule,
    LiveKitModule,
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [],
})
export class AppModule {}
