import shortid from "shortid";

export const addStudent = object => (dispatch) => {
  const obj = [{ id: shortid.generate(), ...object }];
  dispatch({
    type: "GET_STUDENT_DATA",
    payload: obj
  });
};

export const editStudent = (stuId, object) => (dispatch) => {
  dispatch({
    type: "EDIT_STUDENT",
    payload: { stuId, object }
  });
};

export const deleteStudent = stuId => (dispatch) => {
  dispatch({
    type: "DELETE_STUDENT_DATA",
    payload: stuId
  });
};
