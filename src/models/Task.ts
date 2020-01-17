export class Task {
  id: number;
  title: string;
  priority: string;
  state: string;
  started: string;
  finished: string;
  sprint: string;
  constructor(
    id: number,
    title: string,
    priority: string,
    state: string,
    started: string,
    finished: string,
    sprint: string
  ) {
    this.id = id;
    this.title = title;
    this.priority = priority;
    this.state = state;
    this.started = started;
    this.finished = finished;
    this.sprint = sprint;
  }
  setid(id: number) {
    this.id = id;
  }
}
