import React, { Component } from "react";
import { connect } from "react-redux";
import userService from "../../services/userService";
import ModalUser from "./ModalUser";
import "./UserManage.scss";
import { emitter } from "../../utils/emitter";
class UserManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrUsers: [],
      isOpenModal: false,
    };
  }

  async componentDidMount() {
    await this.getAllUsersFromReact();
  }

  handleAddNewUser() {
    this.setState({ isOpenModal: true });
  }
  toggleUserModal = () => {
    this.setState({ isOpenModal: !this.state.isOpenModal });
  };
  createNewUser = async (data) => {
    try {
      let res = await userService.createNewUser(data);
      console.log("created", res);
      if (res && res.errCode === 0) {
        alert("Create new user successfully");
        this.getAllUsersFromReact();
        this.toggleUserModal();
        emitter.emit("EVENT_CLEAR_MODAL_DATA", { id: "your id" }); // ĐĂNG KÝ MỘT EVENT
      } else alert(res.message);
    } catch (error) {
      console.log(error);
    }
  };

  getAllUsersFromReact = async () => {
    let res = await userService.getAllUsers("ALL");
    if (res && res.errCode === 0) {
      this.setState({ arrUsers: res.users });
    }
  };

  deleteUser = async (data) => {
    try {
      console.log("deleted", data);
      let res = await userService.deleteUser(data.id);
      if (res && res.errCode === 0) {
        alert(res.message);
        this.getAllUsersFromReact();
      } else alert(res.message);
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <div className="users-container">
        <ModalUser
          isOpen={this.state.isOpenModal}
          toggleFromParent={this.toggleUserModal}
          createNewUser={this.createNewUser}
        />
        <div className="title text-center">Manage uers</div>
        <div className="mx-1">
          <button
            className="btn btn-primary px-3 mb-2"
            onClick={() => this.handleAddNewUser()}
          >
            <i className="fas fa-plus"></i>
            Add user
          </button>
        </div>
        <div className="users-table">
          <table className="table">
            <thead className="table-dark">
              <tr>
                <th>Email</th>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Address</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.arrUsers &&
                this.state.arrUsers.map((user, index) => (
                  <tr key={index}>
                    <td>{user.email}</td>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.address}</td>
                    <td>
                      <button className="btn-edit">
                        <i className="fas fa-pencil-alt"></i>
                      </button>
                      <button
                        className="btn-delete"
                        onClick={() => this.deleteUser(user)}
                      >
                        <i className="fas fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
