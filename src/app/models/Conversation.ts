export class Conversation {
  id: number = 0;
  idConversation: number = 0;
  idUser1: number = 0;
  idUser2: number = 0;
  idEstate: number = 0;
  user1?: { idUser: number };
  user2?: { idUser: number };
  estate?: { idEstate: number };
}
