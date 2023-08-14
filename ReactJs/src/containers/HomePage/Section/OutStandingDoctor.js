import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import Slider from "react-slick";
import * as actions from "../../../store/actions";
import { LANGUAGES } from "../../../utils";
import { withRouter } from "react-router";
class OutStandingDoctor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrDotors: [],
    };
  }

  componentDidMount() {
    this.props.loadTopDoctor();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.topDoctorsRedux !== this.props.topDoctorsRedux) {
      this.setState({
        arrDotors: this.props.topDoctorsRedux,
      });
    }
  }

  handleViewDetailDoctor = (doctor) => {
    this.props.history.push(`/detail-doctor/${doctor.id}`);
  };

  render() {
    let { language } = this.props;
    let arrDoctors = this.state.arrDotors;
    return (
      <div className=" section-share section-outstanding-doctor">
        <div className="section-container">
          <div className="section-header">
            <span className="title-section">
              <FormattedMessage id="homepage.outstanding-doctor" />
            </span>
            <button className="btn-section">
              <FormattedMessage id="homepage.more-infor" />
            </button>
          </div>
          <div className="section-body">
            <Slider {...this.props.settings}>
              {arrDoctors?.length > 0 &&
                arrDoctors?.map((doctor, index) => {
                  let imageBase64 = "";
                  if (doctor.image) {
                    imageBase64 = new Buffer(doctor.image, "base64").toString(
                      "binary"
                    );
                  }
                  let nameVi = `${doctor.positionData.valueVi}, ${doctor.firstName} ${doctor.lastName}`;
                  let nameEn = `${doctor.positionData.valueEn}, ${doctor.firstName} ${doctor.lastName}`;

                  return (
                    <div
                      className="section-customize"
                      key={index}
                      onClick={() => this.handleViewDetailDoctor(doctor)}
                    >
                      <div className="customize-border">
                        <div className="outer-bg">
                          <div
                            className="bg-image section-outstanding-doctor"
                            style={{
                              backgroundImage: `url(${imageBase64})`,
                            }}
                          >
                            {" "}
                          </div>
                        </div>
                        <div className="position text-center">
                          <div>
                            {language === LANGUAGES.VI ? nameVi : nameEn}
                          </div>
                          <div>Cơ xương khớp</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    topDoctorsRedux: state.admin.topDoctors,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadTopDoctor: () => dispatch(actions.fetchTopDoctor()),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(OutStandingDoctor)
);
