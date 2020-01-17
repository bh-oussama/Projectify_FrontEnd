import {SprintModel} from './Sprint.model';

export class ProjectModel {
  constructor(
    public   name = '',
    public   description = '',
    public   creationDate = '',
    public   teams = [],
    public   sprints = []
  ) {
  }


}
