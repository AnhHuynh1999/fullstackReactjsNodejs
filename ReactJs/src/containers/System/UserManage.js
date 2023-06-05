import React, { Component } from "react";
import { connect } from "react-redux";
import userService from "../../services/userService";
import "./UserManage.scss";
class UserManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrUsers: [],
    };
  }

  async componentDidMount() {
    let res = await userService.getAllUsers("ALL");
    if (res && res.errCode === 0) {
      this.setState({ arrUsers: res.users });
    }
    console.log(res);
  }

  render() {
    return (
      <div className="users-container">
        <div className="title text-center">Manage uers</div>
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
                      <button className="btn-delete">
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
