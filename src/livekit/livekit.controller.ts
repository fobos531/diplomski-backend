import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RoomServiceClient, AccessToken } from 'livekit-server-sdk';
import { randFullName, randBook } from '@ngneat/falso';
import { TokenDto } from './dto/token.dto';

const livekitHost = 'https://livekit.cinesimul.xyz:7880';
const apikey = 'API2NKZfbJBg63w';
const secretKey = 'YY9q5I95HryiXlKPi2Hhi9m6bENkaPON8CQIEtweXAC';

@Controller('live')
export class LiveKitController {
  @Post('/join')
  async join(@Body() tokenDto: TokenDto): Promise<any> {
    const svc = new RoomServiceClient(livekitHost, 'api-key', 'secret-key');

    const at = new AccessToken(apikey, secretKey, {
      identity: randFullName(),
    });

    const roomName = tokenDto.roomName;

    at.addGrant({
      roomJoin: true,
      room: roomName || randBook().title,
      roomAdmin: true,
    });

    const token = at.toJwt();
    console.log('access token', token);

    return {
      success: true,
      token,
    };
  }
}
