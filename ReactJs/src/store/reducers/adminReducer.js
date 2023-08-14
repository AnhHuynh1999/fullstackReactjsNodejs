import actionTypes from "../actions/actionTypes";

const initialState = {
  isLoadingGender: false,
  isLoadingPosition: false,
  isLoadingRole: false,
  isLoadingUser: false,
  isLoadingDoctor: false,
  isLoadingAllDoctor: false,
  genders: [],
  roles: [],
  positions: [],
  users: [],
  topDoctors: [],
  allDoctors: [],
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_GENDER_START:
      let copyState = { ...state };
      copyState.isLoadingGender = true;
      return {
        ...copyState,
      };
    case actionTypes.FETCH_GENDER_SUCCESS:
      state.genders = action.data;
      state.isLoadingGender = false;
      return {
        ...state,
      };
    case actionTypes.FETCH_GENDER_FAILED:
      state.isLoadingGender = false;
      state.genders = [];
      return {
        ...state,
      };

    case actionTypes.FETCH_POSITION_START:
      state.isLoadingPosition = true;
      return {
        ...state,
      };
    case actionTypes.FETCH_POSITION_SUCCESS:
      state.positions = action.data;
      state.isLoadingPosition = false;
      return {
        ...state,
      };
    case actionTypes.FETCH_POSITION_FAILED:
      state.isLoadingPosition = false;
      state.positions = [];
      return {
        ...state,
      };

    case actionTypes.FETCH_ROLE_START:
      state.isLoadingRole = true;
      return {
        ...state,
      };
    case actionTypes.FETCH_ROLE_SUCCESS:
      state.roles = action.data;
      state.isLoadingRole = false;
      return {
        ...state,
      };
    case actionTypes.FETCH_ROLE_FAILED:
      state.isLoadingRole = false;
      state.roles = [];
      return {
        ...state,
      };

    case actionTypes.FETCH_ALL_USER_START:
      state.isLoadingUser = true;
      return {
        ...state,
      };
    case actionTypes.FETCH_ALL_USER_SUCCESS:
      state.users = action.users;
      state.isLoadingUser = false;
      return {
        ...state,
      };
    case actionTypes.FETCH_ALL_USER_FAILED:
      state.isLoadingUser = false;
      state.users = [];
      return {
        ...state,
      };
    case actionTypes.FETCH_TOP_DOCTOR_START:
      state.isLoadingDoctor = true;
      return {
        ...state,
      };
    case actionTypes.FETCH_TOP_DOCTOR_SUCCESS:
      state.topDoctors = action.dataDoctor;
      state.isLoadingDoctor = false;
      return {
        ...state,
      };
    case actionTypes.FETCH_TOP_DOCTOR_FAILED:
      state.isLoadingDoctor = false;
      state.topDoctors = [];
      return {
        ...state,
      };

    case actionTypes.FETCH_ALL_DOCTOR_START:
      state.isLoadingAllDoctor = true;
      return {
        ...state,
      };
    case actionTypes.FETCH_ALL_DOCTOR_SUCCESS:
      state.allDoctors = action.dataDoctor;
      state.isLoadingAllDoctor = false;
      return {
        ...state,
      };
    case actionTypes.FETCH_ALL_DOCTOR_FAILED:
      state.isLoadingAllDoctor = false;
      state.allDoctors = [];
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default adminReducer;
