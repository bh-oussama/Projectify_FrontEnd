import {Task} from '../../models/Task';

export const DATA = [
  // tslint:disable:max-line-length
  {
    Content: 'some task to be done'
  },
  {
    Content: 'some task to be done'
  },
  {
    Content: 'some task to be done'
  },
  {
    Content: 'some task to be done'
  },
  {
    Content: 'some task to be done'
  },
  {
    Content: 'some task to be done'
  },
  {
    Content: 'some task to be done'
  },
  {
    Content: 'some task to be done'
  },
  {
    Content: 'some task to be done'
  },
  {
    Content: 'some task to be done'
  },
  {
    Content: 'some task to be done'
  }
];

export const COLLABORATORS = [
  {
    id: '1',
    firstName: 'Oussama',
    lastName: 'Belhadj Hmida'
  },
  {
    id: '2',
    firstName: 'Mohamed',
    lastName: 'Belja'
  },
  {
    id: '3',
    firstName: 'Aymen',
    lastName: 'Alatri'
  }, {
    id: '4',
    firstName: 'Seif',
    lastName: 'El Behi'
  },
  {
    id: '5',
    firstName: 'Donia',
    lastName: 'Khadhraoui'
  },
  {
    id: '6',
    firstName: 'Mohamed',
    lastName: 'Ayoub'
  }, {
    id: '7',
    firstName: 'Achraf',
    lastName: 'Belhadj Hmida'
  }
];

export const TEAMS = [
  {
    id: '1',
    name: 'Front-End',
    collaborators: [
      {
        id: '1',
        firstName: 'Oussama',
        lastName: 'Belhadj Hmida'
      },
      {
        id: '2',
        firstName: 'Mohamed',
        lastName: 'Belja'
      }
    ]
  },
  {
    id: '2',
    name: 'Back-End',
    collaborators: [
      {
        id: '3',
        firstName: 'Aymen',
        lastName: 'Alatri'
      }
    ]
  }
];

export const taskStates = ['Pending', 'In Progress', 'Done'];

export const TASKS = [
  new Task(
    2,
    'add this feature',
    '3',
    taskStates[1],
    '12/12/19',
    '13/12/19',
    '2'
  ),
  new Task(
    3,
    'add this feature',
    '3',
    taskStates[2],
    '12/12/19',
    '13/12/19',
    '2'
  ),
  new Task(
    4,
    'add this feature',
    '3',
    taskStates[0],
    '12/12/19',
    '13/12/19',
    '2'
  ),
  new Task(
    5,
    'add this feature',
    '3',
    taskStates[3],
    '12/12/19',
    '13/12/19',
    '2'
  ),
  new Task(
    6,
    'add this feature',
    '3',
    taskStates[1],
    '12/12/19',
    '13/12/19',
    '2'
  ),
  new Task(
    6,
    'add this feature',
    '3',
    taskStates[1],
    '12/12/19',
    '13/12/19',
    '2'
  ),
  new Task(
    6,
    'add this feature',
    '3',
    taskStates[1],
    '12/12/19',
    '13/12/19',
    '2'
  )
];
