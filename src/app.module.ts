import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TitlesModule } from './titles/titles.module';
import { MoviesModule } from './movies/movies.module';
import { TvModule } from './tv/tv.module';
import { SearchModule } from './search/search.module';
import { LiveKitModule } from './livekit/livekit.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TitlesModule,
    MoviesModule,
    TvModule,
    SearchModule,
    LiveKitModule,
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [],
})
export class AppModule {}
