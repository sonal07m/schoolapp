/* eslint-disable no-case-declarations */
const intialState = [
  {
    id: "1",
    name: "maths"
  },
  {
    id: "2",
    name: "physics"
  },
  {
    id: "3",
    name: "chemistry"
  },
  {
    id: "4",
    name: "computer"
  }
];


export default (state = { classData: intialState }, action) => {
  const { classData } = state;
  let newData = [];
  switch (action.type) {
    case "GET_CLASS_DATA":
      return {
        ...state,
        classData: [...state.classData, ...action.payload]
      };
    case "EDIT_CLASS":
      newData = classData.map(a => (a.id === action.payload.classId.toString()
        ? { id: action.payload.classId.toString(), name: action.payload.className } : a));
      return {
        ...state,
        classData: newData
      };
    case "DELETE_CLASS_DATA":
      const index = classData.findIndex(obj => obj.id === action.payload);
      newData = [
        ...classData.slice(0, index),
        ...classData.slice(index + 1)
      ];
      return {
        ...state,
        classData: newData
      };
    default:
      return state;
  }
};
