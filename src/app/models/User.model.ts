import { TaskModel} from './Task.model';

export class UserModel {
  id: number;
  userName: string;
  password?: string;
  email: string;
  tasks: TaskModel[];
}
