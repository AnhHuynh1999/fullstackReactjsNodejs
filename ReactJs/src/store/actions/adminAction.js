import actionTypes from "./actionTypes";
import userService from "../../services/userService";
import { toast } from "react-toastify";
// export const fetchGenderStart = () => ({
//   type: actionTypes.FETCH_GENDER_START,
// });

export const fetchGenderStart = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: actionTypes.FETCH_GENDER_START,
      });
      let res = await userService.getAllCodeService("GENDER");
      if (res && res.errCode === 0) {
        dispatch(fetchGenderSuccess(res.data));
      } else {
        dispatch(fetchGenderFailed());
      }
    } catch (error) {
      dispatch(fetchGenderFailed());
      console.log("fetchGenderStart error", error);
    }
  };
};

export const fetchGenderSuccess = (genderData) => ({
  type: actionTypes.FETCH_GENDER_SUCCESS,
  data: genderData,
});

export const fetchGenderFailed = () => ({
  type: actionTypes.FETCH_GENDER_FAILED,
});

export const fetchPositionStart = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: actionTypes.FETCH_POSITION_START,
      });
      let res = await userService.getAllCodeService("POSITION");
      if (res && res.errCode === 0) {
        dispatch(fetchPositionSuccess(res.data));
      } else {
        dispatch(fetchPositionFailed());
      }
    } catch (error) {
      dispatch(fetchPositionFailed());
      console.log("fetchPositionStart error", error);
    }
  };
};

export const fetchPositionSuccess = (positionData) => ({
  type: actionTypes.FETCH_POSITION_SUCCESS,
  data: positionData,
});

export const fetchPositionFailed = () => ({
  type: actionTypes.FETCH_POSITION_FAILED,
});

export const fetchRoleStart = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: actionTypes.FETCH_ROLE_START,
      });
      let res = await userService.getAllCodeService("ROLE");
      if (res && res.errCode === 0) {
        dispatch(fetchRoleSuccess(res.data));
      } else {
        dispatch(fetchRoleFailed());
      }
    } catch (error) {
      dispatch(fetchRoleFailed());
      console.log("fetchRoleStart error", error);
    }
  };
};

export const fetchRoleSuccess = (roleData) => ({
  type: actionTypes.FETCH_ROLE_SUCCESS,
  data: roleData,
});

export const fetchRoleFailed = () => ({
  type: actionTypes.FETCH_ROLE_FAILED,
});

export const createNewUser = (data) => {
  return async (dispatch, getState) => {
    try {
      let res = await userService.createNewUser(data);
      if (res && res.errCode === 0) {
        toast.success("Created a new user successed");
        dispatch(saveUserSuccess());
        dispatch(fetchAllUserStart());
      } else {
        dispatch(saveUserFailed());
      }
    } catch (error) {
      dispatch(saveUserFailed());
      console.log("createNewUser error", error);
    }
  };
};

export const saveUserSuccess = () => ({
  type: actionTypes.CREATE_USER_SUCCESS,
});

export const saveUserFailed = () => ({
  type: actionTypes.CREATE_USER_SUCCESS,
});

export const fetchAllUserStart = (data) => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: actionTypes.FETCH_ALL_USER_START,
      });
      let res = await userService.getAllUsers("ALL");
      if (res && res.errCode === 0) {
        dispatch(fetchUserSuccess(res.users.reverse()));
      } else {
        toast.error("Fetch all user");
        toast.error("Create a new user error");
        dispatch(fetchUserFailed());
      }
    } catch (error) {
      toast.error("Fetch all user");
      dispatch(fetchUserFailed());
      console.log("fetchAllUserStart error", error);
    }
  };
};

export const fetchUserSuccess = (data) => ({
  type: actionTypes.FETCH_ALL_USER_SUCCESS,
  users: data,
});

export const fetchUserFailed = () => ({
  type: actionTypes.FETCH_ALL_USER_FAILED,
});

export const deleteUser = (userId) => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: actionTypes.DELETE_USER_START,
      });
      let res = await userService.deleteUser(userId);
      if (res && res.errCode === 0) {
        toast.success("Delete a new user successed");
        dispatch(deleteUserSuccess());
        dispatch(fetchAllUserStart());
      } else {
        toast.error("Delete a new user error");
        dispatch(deleteUserFailed());
      }
    } catch (error) {
      toast.error("Delete a new user error");
      dispatch(deleteUserFailed());
      console.log("deleteUser error", error);
    }
  };
};

export const deleteUserSuccess = (data) => ({
  type: actionTypes.DELETE_USER_SUCCESS,
  users: data,
});

export const deleteUserFailed = () => ({
  type: actionTypes.DELETE_USER_FAILED,
});

export const editUser = (data) => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: actionTypes.EDIT_USER_START,
      });
      let res = await userService.editUser(data);
      if (res && res.errCode === 0) {
        toast.success("Edit a  user successed");
        dispatch(editUserSuccess());
        dispatch(fetchAllUserStart());
      } else {
        toast.error("Edit  new user error");
        dispatch(editUserFailed());
      }
    } catch (error) {
      toast.error("Edit  new user error");
      dispatch(editUserFailed());
      console.log("editUser error", error);
    }
  };
};

export const editUserSuccess = (data) => ({
  type: actionTypes.EDIT_USER_SUCCESS,
});

export const editUserFailed = () => ({
  type: actionTypes.EDIT_USER_FAILED,
});

export const fetchAllDoctor = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: actionTypes.FETCH_ALL_DOCTOR_START,
      });
      let res = await userService.getAllDoctor();
      if (res && res.errCode === 0) {
        dispatch({
          type: actionTypes.FETCH_ALL_DOCTOR_SUCCESS,
          dataDoctor: res.data,
        });
        getAllDoctorSuccess();
      }
    } catch (error) {
      toast.error("Get all doctor error");
      dispatch(getAllDoctorFailed());
      console.log("Get all doctor error", error);
    }
  };
};

export const getAllDoctorSuccess = (data) => ({
  type: actionTypes.FETCH_ALL_DOCTOR_SUCCESS,
});

export const getAllDoctorFailed = () => ({
  type: actionTypes.FETCH_ALL_USER_FAILED,
});

export const fetchTopDoctor = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: actionTypes.FETCH_TOP_DOCTOR_START,
      });
      let res = await userService.getTopDoctorHome("3");
      if (res && res.errCode === 0) {
        dispatch({
          type: actionTypes.FETCH_TOP_DOCTOR_SUCCESS,
          dataDoctor: res.data,
        });
        getTopDoctorSuccess();
      }
    } catch (error) {
      toast.error("Get top doctor error");
      dispatch(getTopDoctorFailed());
      console.log("Get top doctor error", error);
    }
  };
};

export const getTopDoctorSuccess = (data) => ({
  type: actionTypes.FETCH_TOP_DOCTOR_SUCCESS,
});

export const getTopDoctorFailed = () => ({
  type: actionTypes.FETCH_TOP_DOCTOR_FAILED,
});

export const saveDetailDoctor = (data) => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: actionTypes.SAVE_DETAIL_DOCTOR_START,
      });
      let res = await userService.saveDetailDoctor(data);
      if (res && res.errCode === 0) {
        toast.success("Save infor detail doctor successed");
        dispatch({
          type: actionTypes.SAVE_DETAIL_DOCTOR_SUCCESS,
        });
        saveDetailDoctorSuccess();
      } else {
        toast.error("Save infor detail doctor failed");
        dispatch(saveDetailDoctorFailed());
      }
    } catch (error) {
      toast.error("Save infor detail doctor failed");
      toast.error("Save doctor error");
      dispatch(saveDetailDoctorFailed());
      console.log("Save doctor error", error);
    }
  };
};

export const saveDetailDoctorSuccess = (data) => ({
  type: actionTypes.SAVE_DETAIL_DOCTOR_SUCCESS,
});

export const saveDetailDoctorFailed = () => ({
  type: actionTypes.SAVE_DETAIL_DOCTOR_FAILED,
});
