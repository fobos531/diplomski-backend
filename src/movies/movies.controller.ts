import { Controller, Get, Param } from '@nestjs/common';
import { TheMovieDbService } from '@harshppatel/nestjs-themoviedb-api';
import MovieDB from 'node-themoviedb';

@Controller('movies')
export class MoviesController {
  constructor(private readonly tmdb: TheMovieDbService) {}

  @Get('/:id')
  async getMovieDetails(@Param('id') id: number): Promise<any> {
    const args: MovieDB.Arguments.Movie.GetDetails = {
      pathParameters: {
        movie_id: id,
      },
      query: {
        append_to_response: 'videos',
      },
    };

    const movieDetails = await this.tmdb.getMovieEndpoint().getDetails(args);
    const images = await this.tmdb.getMovieEndpoint().getImages({
      pathParameters: { movie_id: id },
      query: {
        include_image_language: 'en',
      },
    });

    return {
      success: true,
      data: { ...movieDetails.data, images: images.data },
    };
  }

  @Get('/:id/credits')
  async getMovieCredits(@Param('id') id: number): Promise<any> {
    const args: MovieDB.Arguments.Movie.GetCredits = {
      pathParameters: {
        movie_id: id,
      },
    };

    const credits = await this.tmdb.getMovieEndpoint().getCredits(args);

    return {
      success: true,
      data: credits.data,
    };
  }
}
