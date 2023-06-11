import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import React, { Component } from "react";
import { connect } from "react-redux";
import { emitter } from "../../utils/emitter";
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
    this.listenToEmitter();
  }
  listenToEmitter() {
    emitter.on("EVENT_CLEAR_MODAL_DATA", (data) => {
      console.log("listen emitter from parent", data);
      this.setState({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        address: "",
      });
    });
  }
  componentDidMount() {}

  toggle = () => {
    this.props.toggleFromParent();
  };
  handleOnChangeInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleAddNewUser = () => {
    if (this.checkValideInput()) {
      this.props.createNewUser(this.state);
    }
  };
  checkValideInput = () => {
    let isValid = true;
    let arrInput = ["email", "password", "firstName", "lastName", "address"];
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
        <ModalHeader toggle={() => this.toggle()}>Modal title</ModalHeader>
        <ModalBody>
          <div className="modal-user-body">
            <div className="input-container">
              <label>Email</label>
              <input
                type="text"
                name="email"
                onChange={(e) => this.handleOnChangeInput(e)}
              ></input>
            </div>
            <div className="input-container">
              <label>Password</label>
              <input
                type="password"
                name="password"
                onChange={(e) => this.handleOnChangeInput(e)}
              ></input>
            </div>
            <div className="input-container">
              <label>Firstname</label>
              <input
                type="text"
                name="firstName"
                onChange={(e) => this.handleOnChangeInput(e)}
              ></input>
            </div>
            <div className="input-container">
              <label>Lastname</label>
              <input
                type="text"
                name="lastName"
                onChange={(e) => this.handleOnChangeInput(e)}
              ></input>
            </div>
            <div className="input-container max-width-input">
              <label>Address</label>
              <input
                type="text"
                name="address"
                onChange={(e) => this.handleOnChangeInput(e)}
              ></input>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            className="px-3"
            onClick={() => this.handleAddNewUser()}
          >
            Add user
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
