import React, { Component } from "react";
import { connect } from "react-redux";

class HomeFooter extends Component {
  render() {
    return (
      <div className=" home-footer">
        <span>
          &copy; 2023 Bảo Anh. More information.
          <a
            target="_blank"
            href="https://www.facebook.com/profile.php?id=100007501807287"
            rel="noreferrer"
          >
            &#8594; Click here &#8592;
          </a>
        </span>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    lang: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
