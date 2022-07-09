import { Controller, Get, Param } from '@nestjs/common';
import { RoomServiceClient, AccessToken } from 'livekit-server-sdk';

const livekitHost = 'https://livekit.cinesimul.xyz:7880';
const apikey = 'API2NKZfbJBg63w';
const secretKey = 'YY9q5I95HryiXlKPi2Hhi9m6bENkaPON8CQIEtweXAC';

@Controller('live')
export class LiveKitController {
  @Get('/token')
  async getToken(): Promise<any> {
    const svc = new RoomServiceClient(livekitHost, 'api-key', 'secret-key');

    const at = new AccessToken(apikey, secretKey, {
      identity: 'BOSS3',
    });
    at.addGrant({ roomJoin: true, room: 'stark-tower' });

    const token = at.toJwt();
    console.log('access token', token);

    return 'BOSS';
  }
}
