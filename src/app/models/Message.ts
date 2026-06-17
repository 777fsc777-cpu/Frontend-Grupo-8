export class Message {
  idMessage: number = 0;
  content: string = '';
  status: string = '';
  dateSent: string = '';
  idConversation: number = 0;
  idUser: number = 0;
  conversation?: { idConversation: number };
  user?: { idUser: number; username?: string };
}
