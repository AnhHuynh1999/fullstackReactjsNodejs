import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
class ModalUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      address: "",
    };
  }

  componentDidMount() {
    let user = this.props.currentUser;
    if (user && !_.isEmpty(user)) {
      this.setState({
        id: user.id,
        email: user.email,
        password: user.password,
        firstName: user.firstName,
        lastName: user.lastName,
        address: user.address,
      });
    }
    console.log("current user ", this.props.currentUser);
  }

  toggle = () => {
    this.props.toggleFromParent();
  };
  handleOnChangeInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleEditUser = () => {
    if (this.checkValideInput()) {
      this.props.editUser(this.state);
    }
  };
  checkValideInput = () => {
    let isValid = true;
    let arrInput = ["firstName", "lastName", "address"];
    for (const element of arrInput) {
      if (!this.state[element]) {
        isValid = false;
        alert("Missing parameter: " + element);
        break;
      }
    }
    return isValid;
  };
  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        toggle={() => this.toggle()}
        className={"modal-user-container"}
        size="lg"
        centered
      >
        <ModalHeader toggle={() => this.toggle()}>Modal Edit User</ModalHeader>
        <ModalBody>
          <div className="modal-user-body">
            <div className="input-container">
              <label>Email</label>
              <input
                type="text"
                name="email"
                value={this.state.email}
                onChange={(e) => this.handleOnChangeInput(e)}
              ></input>
            </div>
            <div className="input-container">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={(e) => this.handleOnChangeInput(e)}
              ></input>
            </div>
            <div className="input-container">
              <label>Firstname</label>
              <input
                type="text"
                name="firstName"
                value={this.state.firstName}
                onChange={(e) => this.handleOnChangeInput(e)}
              ></input>
            </div>
            <div className="input-container">
              <label>Lastname</label>
              <input
                type="text"
                name="lastName"
                value={this.state.lastName}
                onChange={(e) => this.handleOnChangeInput(e)}
              ></input>
            </div>
            <div className="input-container max-width-input">
              <label>Address</label>
              <input
                type="text"
                name="address"
                value={this.state.address}
                onChange={(e) => this.handleOnChangeInput(e)}
              ></input>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            className="px-3"
            onClick={() => this.handleEditUser()}
          >
            Update user
          </Button>
          <Button
            color="secondary"
            className="px-3"
            onClick={() => this.toggle()}
          >
            Close
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);
