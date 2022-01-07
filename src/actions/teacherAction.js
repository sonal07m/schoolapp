import shortid from "shortid";

export const addTeacher = className => (dispatch) => {
  const obj = [{ id: shortid.generate(), class: className }];
  dispatch({
    type: "GET_TEACHER_DATA",
    payload: obj
  });
};

export const editTeacher = (classId, className) => (dispatch) => {
  dispatch({
    type: "EDIT_TEACHER",
    payload: { classId, className }
  });
};

export const deleteTeacher = classId => (dispatch) => {
  dispatch({
    type: "DELETE_TEACHER_DATA",
    payload: classId
  });
};
