export class Message {
  id: number;
  Body: string;
  Date: string;
  Id_sender: string;
  Id_receiver: string;
  constructor(body: string, date: string, id_sender: string, id_receiver) {
    this.Body = body;
    this.Date = date;
    this.Id_sender = id_sender;
    this.Id_receiver = id_receiver;
  }
}
