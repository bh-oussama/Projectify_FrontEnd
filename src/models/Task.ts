export class Task {
  id: string;
  title: string;
  priority: string;
  state: string;
  started: string;
  finished: string;
  sprint: string;
  constructor(
    title: string,
    priority: string,
    state: string,
    started: string,
    finished: string,
    sprint: string
  ) {
    this.title = title;
    this.priority = priority;
    this.state = state;
    this.started = started;
    this.finished = finished;
    this.sprint = sprint;
  }
}
