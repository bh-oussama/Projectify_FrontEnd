import {ProjectModel} from './Project.model';
import {UserModel} from './User.model';

export class TaskModel {
  taskID: number;
  taskName: string;
  taskPriority: number;
  taskDescription: string;
  taskState: string;
  projectName?: string;
}
