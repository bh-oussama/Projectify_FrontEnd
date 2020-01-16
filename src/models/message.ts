export class Message {
  body: string;
  date: string;
  id_sender: string;
  id_receiver: string;
  constructor(body: string, date: string, id_sender: string, id_receiver) {
    this.body = body;
    this.date = date;
    this.id_sender = id_sender;
    this.id_receiver = id_receiver;
  }
}
