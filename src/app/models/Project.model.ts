
export class ProjectModel {
  public projectID: string;

  constructor(
    public   name = '',
    public   description = '',
    public   creationDate = '',
    public   teams = [],
    public   sprints = []
  ) {
  }
}
