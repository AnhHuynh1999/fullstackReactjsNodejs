import axios from "../axios";

const userService = {
  handleLogin(email, password) {
    return axios.post("/api/login", { email: email, password: password });
  },
  getAllUsers(id) {
    return axios.get(`/api/get-all-users?id=${id}`);
  },
  createNewUser(data) {
    return axios.post("/api/create-new-user", data);
  },
  deleteUser(userId) {
    return axios.delete(`/api/delete-user`, { data: { id: userId } });
  },
  editUser(inputData) {
    return axios.put("/api/edit-user", inputData);
  },
  getAllCodeService(inputData) {
    return axios.get(`/api/allcode?type=${inputData}`);
  },
  getTopDoctorHome(limit) {
    return axios.get(`/api/top-doctor-home`, {params: { limit: limit}});
  },
};

export default userService;
