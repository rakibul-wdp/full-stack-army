// a utility to create a random id
function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

const students = {
  'd77b9648-8916-4988-ab8e-3bb9b3cc5dd5': {
    id: 'd77b9648-8916-4988-ab8e-3bb9b3cc5dd5',
    name: 'Abul',
    email: 'abul@gmail.com'
  },
  'a4028586-fd46-4eca-94b2-bc0bb32e0594': {
    id: 'a4028586-fd46-4eca-94b2-bc0bb32e0594',
    name: 'Babul',
    email: 'babul@gmail.com'
  },
  '93b6f2df-0695-4faa-b4e4-11f435f65072': {
    id: '93b6f2df-0695-4faa-b4e4-11f435f65072',
    name: 'Cabul',
    email: 'Cabul@gmail.com'
  }
};

/**
 * 1. Easily Traverse (O(n))
 * 1.1 Get anything if you have the id/key: O(1)
 * 2. Filter
 * 3. Delete (medium) O(1)
 * 4. Update (medium) O(1)
 * 5. Create a new one (easy) O(1)
 */

const std = {
  id: uuidv4(),
  name: "Dabul",
  email: "dabul@gmail.com"
};

students[std.id] = std;

const idToBeUpdated = "93b6f2df-0695-4faa-b4e4-11f435f65072";
const updatedData = {
  name: "Ebul",
  email: "ebul@gmail.com"
};

students[idToBeUpdated] = {
  ...students[idToBeUpdated],
  ...updatedData,
};

// delete students[idToBeUpdated];

// console.log(students["d77b9648-8916-4988-ab8e-3bb9b3cc5dd5"]);

for (let key in students) {
  // console.log(students[key].email);
}

Object.values(students).forEach((student) => {
  console.log(student.name, student.email);
});