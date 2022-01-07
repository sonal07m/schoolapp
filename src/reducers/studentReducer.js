const intialState = [
  {
    id: "1",
    firstname: "anna",
    lastname: "bell",
    email: "anna@gmail.com",
    address: "Ochsenweg 54, Melle, 49324",
    phone: "+49 30 901820",
    classId: ["1", "2", "4"],
    gender: "female",
  },
  {
    firstname: "Hanna",
    lastname: "bell",
    email: "hanna@gmail.com",
    address: "Ochsenweg 54, Melle, 49324",
    phone: "+49 30 901820",
    classId: ["1", "4"],
    gender: "female",
    id: "2"
  },
  {
    firstname: "Lena",
    lastname: "bell",
    email: "lena@gmail.com",
    address: "Ochsenweg 54, Melle, 49324",
    phone: "+49 30 901820",
    classId: ["2"],
    gender: "female",
    id: "3"
  },
  {
    firstname: "Daniel",
    lastname: "bell",
    email: "emma@gmail.com",
    address: "Ochsenweg 54, Melle, 49324",
    phone: "+49 30 901820",
    classId: ["2", "3"],
    gender: "male",
    id: "4"
  }
];

export default (state = { student: intialState }, action) => {
  const { student } = state;
  let newData = [];
  switch (action.type) {
    case "GET_STUDENT_DATA":
      return {
        ...state,
        student: [...state.student, ...action.payload]
      };
    case "EDIT_STUDENT":
      newData = student.map(a => (a.id === action.payload.stuId.toString()
        ? { id: action.payload.stuId.toString(), ...action.payload.object } : a));
      return {
        ...state,
        student: newData
      };
    case "DELETE_STUDENT_DATA": {
      const index = student.findIndex(obj => obj.id === action.payload);
      newData = [
        ...student.slice(0, index),
        ...student.slice(index + 1)
      ];
      return {
        ...state,
        student: newData
      };
    }
    default:
      return state;
  }
};
