import { Body, Controller, Post } from '@nestjs/common';
import { AccessToken } from 'livekit-server-sdk';
import { randFullName, randBook } from '@ngneat/falso';
import { TokenDto } from './dto/token.dto';

// linode
//const apikey = 'API2NKZfbJBg63w';

// digital ocean
const apikey = 'APIcS9SFAF47gsu';

// linode
//const secretKey = 'YY9q5I95HryiXlKPi2Hhi9m6bENkaPON8CQIEtweXAC';

const secretKey = 'PRMsHiDs5F2wffJT3eMWk5yEW923xklAMLrl4IBWuGCA';

@Controller('live')
export class LiveKitController {
  @Post('/join')
  async join(@Body() tokenDto: TokenDto): Promise<any> {
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
