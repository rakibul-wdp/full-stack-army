/**
 * store 10 students information
 * - name
 * - email
 * - id
 */

// a utility to create a random id
function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

const students = [
  {
    id: 'd77b9648-8916-4988-ab8e-3bb9b3cc5dd5',
    name: 'Abul',
    email: 'abul@gmail.com'
  },
  {
    id: 'a4028586-fd46-4eca-94b2-bc0bb32e0594',
    name: 'Babul',
    email: 'babul@gmail.com'
  },
  {
    id: '93b6f2df-0695-4faa-b4e4-11f435f65072',
    name: 'Cabul',
    email: 'Cabul@gmail.com'
  }
];

