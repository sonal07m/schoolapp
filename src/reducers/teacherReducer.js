const intialState = [
  {
    id: "1",
    firstname: "alias",
    lastname: "bell",
    email: "alias@gmail.com",
    address: "Schulstrasse 4",
    phone: "+49 30 901820",
    classId: "1",
    gender: "female"
  },
  {
    firstname: "sophia",
    lastname: "bell",
    email: "sophia@gmail.com",
    address: "Schulstrasse 4",
    phone: "+49 30 901820",
    classId: "2",
    gender: "female",
    id: "2"
  },
  {
    firstname: "michael",
    lastname: "bell",
    email: "michael@gmail.com",
    address: "Schulstrasse 4",
    phone: "+49 30 901820",
    classId: "3",
    gender: "male",
    id: "3"
  },
  {
    firstname: "tobias",
    lastname: "bell",
    email: "tobias@gmail.com",
    address: "Lehmbergerstr. 2, Damp, 24351",
    phone: "+49 30 901820",
    classId: "4",
    gender: "male",
    id: "4"
  }
];

export default (state = { teacher: intialState }, action) => {
  const { teacher } = state;
  let newData = [];
  switch (action.type) {
    case "GET_TEACHER_DATA":
      return {
        ...state,
        teacher: [...state.classData, ...action.payload]
      };
    case "EDIT_TEACHER":
      newData = teacher.map(a => (a.id === action.payload.classId.toString()
        ? {
          id: action.payload.classId.toString(),
          class: action.payload.className
        } : a));
      return {
        ...state,
        teacher: newData
      };
    case "DELETE_TEACHER_DATA": {
      const index = teacher.findIndex(obj => obj.id === action.payload);
      newData = [
        ...teacher.slice(0, index),
        ...teacher.slice(index + 1)
      ];
      return {
        ...state,
        teacher: newData
      };
    }
    default:
      return state;
  }
};
