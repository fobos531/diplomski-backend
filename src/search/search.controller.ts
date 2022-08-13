import { Body, Controller, Post } from '@nestjs/common';
import { TheMovieDbService } from '@harshppatel/nestjs-themoviedb-api';
import MovieDB from 'node-themoviedb';
import { SearchDto } from './dto/search.dto';

@Controller('search')
export class SearchController {
  constructor(private readonly tmdb: TheMovieDbService) {}

  @Post('/movies')
  async multiSearch(@Body() searchDto: SearchDto) {
    const args: MovieDB.Arguments.Search.Movies = {
      query: {
        query: searchDto.query,
        page: searchDto.page,
      },
    };

    const search = await this.tmdb.getSearchEndpoint().movies(args);

    return {
      success: true,
      data: search.data,
    };
  }
}
