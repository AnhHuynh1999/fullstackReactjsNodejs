import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";

import * as actions from "../../store/actions";

import "./Login.scss";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "admin",
      password: "admin@123",
      isShowPassword: false,
    };
  }

  handleChangeInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleLogin = () => {
    alert("Đăng nhập thành công");
  };

  handleShowHidePassword = () => {
    this.setState({ isShowPassword: !this.state.isShowPassword });
  };

  render() {
    //JSX
    return (
      <div className="login-backgroud">
        <div className="login-container">
          <div className="login-content">
            <div className="login">
              <div className="login-content row">
                <div className="col-12 text-login">Login</div>
                <div className="col-12 form-group login-input">
                  <label>Username</label>
                  <input
                    type="text"
                    name="username"
                    value={this.state.username}
                    className="form-control"
                    placeholder="Enter your username"
                    // onChange={(e) => this.handleChangeInput(e)}
                    onChange={this.handleChangeInput}
                  ></input>
                </div>
                <div className="col-12 form-group login-input ">
                  <label>Password</label>
                  <div className="custom-input-password">
                    <input
                      type={this.state.isShowPassword ? "text" : "password"}
                      name="password"
                      value={this.state.password}
                      className="form-control"
                      placeholder="Enter your password"
                      // onChange={(e) => this.handleChangeInput(e)}
                      onChange={this.handleChangeInput}
                    ></input>
                    <span onClick={this.handleShowHidePassword}>
                      {this.state.isShowPassword ? (
                        <i className="far fa-eye-slash"></i>
                      ) : (
                        <i className="far fa-eye"></i>
                      )}
                    </span>
                  </div>
                </div>
                <div className="col-12">
                  <button className="btn-login" onClick={this.handleLogin}>
                    Login
                  </button>
                </div>

                <div className="col-12">
                  <span className="forgot-password">Forgot your password</span>
                </div>
                <div className="col-12 text-center mt-3">
                  <span className="text-other-login">Or Login with</span>
                </div>
                <div className="col-12 social-login">
                  <i className="fab fa-google-plus-g google"></i>
                  <i class="fab fa-facebook-f facebook"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    navigate: (path) => dispatch(push(path)),
    adminLoginSuccess: (adminInfo) =>
      dispatch(actions.adminLoginSuccess(adminInfo)),
    adminLoginFail: () => dispatch(actions.adminLoginFail()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
