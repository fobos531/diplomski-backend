import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class EventsGateway {
  @WebSocketServer() server: Server;

  @SubscribeMessage('identity')
  async identity(
    @MessageBody() data: any,
    @ConnectedSocket() socket: Socket,
  ): Promise<any> {
    socket.broadcast.emit('HEY', data); // Emits to everyone except the sender
    return this.server.sockets.emit('BOSS', data); // Emits to absolutely everyone
  }
}
