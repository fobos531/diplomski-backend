import { Controller, Get, Param } from '@nestjs/common';
import { RoomServiceClient, AccessToken } from 'livekit-server-sdk';

const livekitHost = 'http://localhost:7880';
const apikey = 'APIM9byRnR9KtfQ';
const secretKey = 'ceFifJxe6f0m3noNHJtYHase7calFuslZtZM8pzs89bH';

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
