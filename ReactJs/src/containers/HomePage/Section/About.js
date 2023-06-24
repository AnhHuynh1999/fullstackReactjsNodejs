import React, { Component } from "react";
import { connect } from "react-redux";

class About extends Component {
  render() {
    return (
      <div className=" section-share section-about">
        <div className="section-about-header">Truyền thông hỏi về Bảo Anh</div>
        <div className="section-about-content">
          <div className="content-left">
            <iframe
              width="100%"
              height="400px"
              src="https://www.youtube.com/embed/_qPdi9D2rHA?list=RD_qPdi9D2rHA"
              title="Chán Gái 707 | Low G | Rap Nhà Làm"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="content-right">
            <p>
              Vết thương không lành theo cách chúng ta muốn, chúng lành theo
              cách chúng cần. Cần có thời gian để vết thương mờ dần thành sẹo.
              Cần có thời gian để quá trình chữa bệnh diễn ra. Hãy cho bản thân
              thời gian đó. Hãy nhẹ nhàng với vết thương của bạn. Hãy nhẹ nhàng
              với trái tim của bạn. Bạn xứng đáng được chữa lành – Dele Olanubi
            </p>
          </div>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
