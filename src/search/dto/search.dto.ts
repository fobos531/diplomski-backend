import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Length,
  Max,
  Min,
} from 'class-validator';

export class SearchDto {
  @IsString()
  @IsNotEmpty()
  @Length(1) // minimum length of 1
  query: string;

  @IsNumber()
  @Min(1)
  @Max(1000)
  @IsOptional()
  page: number;
}
