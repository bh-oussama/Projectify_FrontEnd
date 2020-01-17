import {TaskModel} from './Task.model';

export class SprintModel {

  constructor(
    public name: string,
    public startDate: string = '',
    public endDate: string = '',
    public tasks: TaskModel[] = [],
  ) {
  }
}
