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
    firstName: 'Oussama',
    lastName: 'Belhadj Hmida'
  },
  {
    firstName: 'Mohamed',
    lastName: 'Belja'
  },
  {
    firstName: 'Aymen',
    lastName: 'Alatri'
  }, {
    firstName: 'Seif',
    lastName: 'El Behi'
  },
  {
    firstName: 'Donia',
    lastName: 'Khadhraoui'
  },
  {
    firstName: 'Mohamed',
    lastName: 'Ayoub'
  }, {
    firstName: 'Achraf',
    lastName: 'Belhadj Hmida'
  },
  {
    firstName: 'Nourhaine',
    lastName: 'Rouchou'
  },
  {
    firstName: 'Ghassen',
    lastName: 'Riahi'
  }
];

export const TEAMS = [
  {
    name: 'Front-End',
    collaborators: [
      {
        firstName: 'Oussama',
        lastName: 'Belhadj Hmida'
      },
      {
        firstName: 'Mohamed',
        lastName: 'Belja'
      }
    ]
  },
  {
    name: 'Back-End',
    collaborators: [
      {
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
  )
];
