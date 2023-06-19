import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import "./HomeHeader.scss";
import logo from "../../assets/logo.svg";
import { FormattedMessage } from "react-intl";
import { LANGUAGES } from "../../utils/constant";
import { changeLanguageApp } from "../../store/actions";
class HomeHeader extends Component {
  changeLanguage = (language) => {
    //fire redux event : action
    this.props.changeLanguageAppReact(language);
  };
  render() {
    let language = this.props.lang;
    return (
      <Fragment>
        <div className="home-header-container">
          <div className="home-header-content">
            <div className="left-content">
              <i className="fas fa-bars"></i>
              <img className="header-logo" alt="" src={logo} />
            </div>
            <div className="center-content">
              <div className="child-content">
                <div>
                  <b>
                    <FormattedMessage
                      id={"homeheader.speciality"}
                    ></FormattedMessage>
                  </b>
                </div>
                <div className="subs-title">
                  <FormattedMessage id={"homeheader.searchdoctor"}>
                    {" "}
                  </FormattedMessage>
                </div>
              </div>
              <div className="child-content">
                <div>
                  <b>
                    {" "}
                    <FormattedMessage
                      id={"homeheader.health-facility"}
                    ></FormattedMessage>
                  </b>
                </div>
                <div className="subs-title">
                  <FormattedMessage
                    id={"homeheader.select-room"}
                  ></FormattedMessage>
                </div>
              </div>
              <div className="child-content">
                <div>
                  <b>
                    <FormattedMessage
                      id={"homeheader.doctor"}
                    ></FormattedMessage>{" "}
                  </b>
                </div>
                <div className="subs-title">
                  <FormattedMessage
                    id={"homeheader.select-doctor"}
                  ></FormattedMessage>
                </div>
              </div>
              <div className="child-content">
                <div>
                  <b>
                    {" "}
                    <FormattedMessage id={"homeheader.fee"}></FormattedMessage>
                  </b>
                </div>
                <div className="subs-title">
                  <FormattedMessage
                    id={"homeheader.check-health"}
                  ></FormattedMessage>
                </div>
              </div>
            </div>
            <div className="right-content">
              <div className="support">
                <i className="fas fa-question-circle"></i>
                <FormattedMessage id={"homeheader.support"}></FormattedMessage>
              </div>
              <div
                className={
                  language === LANGUAGES.VI
                    ? "language-vi active"
                    : "language-vi"
                }
              >
                <span onClick={() => this.changeLanguage(LANGUAGES.VI)}>
                  {" "}
                  VN
                </span>
              </div>
              <div
                className={
                  language === LANGUAGES.EN
                    ? "language-en active"
                    : "language-en"
                }
              >
                <span onClick={() => this.changeLanguage(LANGUAGES.EN)}>
                  EN
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="home-header-banner">
          <div className="content-up">
            <div className="title1">
              <FormattedMessage id={"banner.title1"}></FormattedMessage>
            </div>
            <div className="title2">
              <FormattedMessage id={"banner.title2"}></FormattedMessage>
            </div>
            <div className="search">
              <i className="fas fa-search"></i>
              <input type="text" placeholder={"Tìm kiếm chuyên khoa"} />
            </div>
          </div>
          <div className="content-down">
            <div className="options">
              <div className="option-child">
                <div className="icon-child">
                  <i className="far fa-hospital"></i>
                </div>
                <div className="text-child">
                  <FormattedMessage id={"banner.child1"}></FormattedMessage>
                </div>
              </div>
              <div className="option-child">
                <div className="icon-child">
                  <i className="fas fa-mobile-alt"></i>
                </div>
                <div className="text-child">
                  <FormattedMessage id={"banner.child2"}></FormattedMessage>
                </div>
              </div>
              <div className="option-child">
                <div className="icon-child">
                  <i className="fas fa-procedures"></i>
                </div>
                <div className="text-child">
                  <FormattedMessage id={"banner.child3"}></FormattedMessage>
                </div>
              </div>
              <div className="option-child">
                <div className="icon-child">
                  <i className="fas fa-flask"></i>
                </div>
                <div className="text-child">
                  <FormattedMessage id={"banner.child4"}></FormattedMessage>
                </div>
              </div>
              <div className="option-child">
                <div className="icon-child">
                  <i className="fas fa-user-md"></i>
                </div>
                <div className="text-child">
                  <FormattedMessage id={"banner.child5"}></FormattedMessage>
                </div>
              </div>
              <div className="option-child">
                <div className="icon-child">
                  <i className="fas fa-briefcase-medical"></i>
                </div>
                <div className="text-child">
                  <FormattedMessage id={"banner.child6"}></FormattedMessage>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
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
  return {
    changeLanguageAppReact: (language) => dispatch(changeLanguageApp(language)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
