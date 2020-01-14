export class Message {
  body: string;
  date: string;
  id_sender: string;
  constructor(body: string, date: string, id_sender: string) {
    this.body = body;
    this.date = date;
    this.id_sender = id_sender;
  }
}
