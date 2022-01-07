import shortid from "shortid";

export const addClass = className => (dispatch) => {
  const obj = [{ id: shortid.generate(), name: className }];
  dispatch({
    type: "GET_CLASS_DATA",
    payload: obj
  });
};

export const editClass = (classId, className) => (dispatch) => {
  dispatch({
    type: "EDIT_CLASS",
    payload: { classId, className }
  });
};

export const deleteClass = classId => (dispatch) => {
  dispatch({
    type: "DELETE_CLASS_DATA",
    payload: classId
  });
};
