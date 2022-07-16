import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Length,
  Max,
  Min,
} from 'class-validator';

export class TokenDto {
  @IsString()
  @IsOptional()
  roomName: string;
}
