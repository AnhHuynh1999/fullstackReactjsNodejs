import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import "./ManageDoctor.scss";
import * as actions from "../../../store/actions";

import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";
import Select from "react-select";
import { CRUD_ACTION, LANGUAGES } from "../../../utils";
import { userService } from "../../../services";
// Register plugins if required
// MdEditor.use(YOUR_PLUGINS_HERE);

// Initialize a markdown parser
const mdParser = new MarkdownIt(/* Markdown-it options */);

class ManageDoctor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentMarkdown: "",
      contentHTML: "",
      selectedDoctor: {},
      description: "",
      listDoctor: [],
      hasOldData: false,
    };
  }

  componentDidMount() {
    this.props.fetchAllDoctor();
  }
  buildDataInputSelect = (inputData) => {
    let result = [];
    let language = this.props.language;
    if (inputData && inputData.length > 0) {
      inputData.map((item, index) => {
        let object = {};
        let labelVi = `${item.lastName} ${item.firstName}`;
        let labelEn = `${item.firstName} ${item.lastName}`;
        object.label = language === LANGUAGES.VI ? labelVi : labelEn;
        object.value = item.id;
        result.push(object);
      });
    }
    return result;
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.allDoctors !== this.props.allDoctors) {
      this.setState({
        listDoctor: this.buildDataInputSelect(this.props.allDoctors),
      });
    }
    if (prevProps.language !== this.props.language) {
      this.setState({
        listDoctor: this.buildDataInputSelect(this.props.allDoctors),
      });
    }
  }

  // Finish!
  handleEditorChange = ({ html, text }) => {
    this.setState({ contentHTML: html, contentMarkdown: text });
  };
  handleSaveContentMarkdown = () => {
    let { hasOldData } = this.state;

    this.props.saveDetailDoctor({
      contentHTML: this.state.contentHTML,
      contentMarkdown: this.state.contentMarkdown,
      description: this.state.description,
      doctorId: this.state.selectedDoctor.value,
      actions: hasOldData ? CRUD_ACTION.EDIT : CRUD_ACTION.CREATE,
    });
  };
  handleChangeSelect = async (selectedDoctor) => {
    this.setState({ selectedDoctor });
    let res = await userService.getDetailInforDoctor(selectedDoctor.value);
    if (
      res &&
      res.errCode === 0 &&
      res.data &&
      res.data.Markdown &&
      res.data.Markdown.contentHTML
    ) {
      let markdown = res.data.Markdown;
      this.setState({
        contentHTML: markdown.contentHTML,
        contentMarkdown: markdown.contentMarkdown,
        description: markdown.description,
        hasOldData: true,
      });
    } else {
      this.setState({
        contentHTML: "",
        contentMarkdown: "",
        description: "",
        hasOldData: false,
      });
    }
  };
  handleOnChangeDesc = (e) => {
    this.setState({ description: e.target.value });
  };
  render() {
    let { hasOldData } = this.state;
    return (
      <div className="manage-doctor-container">
        <div className="manage-doctor-title">Tạo thêm thông tin doctors</div>
        <div className="more-infor">
          <div className="content-left">
            <label>Chọn bác sĩ </label>
            <Select
              options={this.state.listDoctor}
              onChange={this.handleChangeSelect}
            />
          </div>
          <div className="content-right">
            <label>Thông tin giới thiệu:</label>
            <textarea
              value={this.state.description}
              onChange={(e) => this.handleOnChangeDesc(e)}
              className="form-control"
              rows={4}
            ></textarea>
          </div>
        </div>
        <div className="manage-doctor-editor">
          <MdEditor
            style={{ height: "500px" }}
            value={this.state.contentMarkdown}
            renderHTML={(text) => mdParser.render(text)}
            onChange={this.handleEditorChange}
          />
        </div>
        <button
          onClick={() => this.handleSaveContentMarkdown()}
          className={`${
            hasOldData ? "save-content-doctor" : "create-content-doctor"
          }`}
        >
          {hasOldData ? "Lưu" : "Tạo"} thông tin
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    allDoctors: state.admin.allDoctors,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllDoctor: () => dispatch(actions.fetchAllDoctor()),
    saveDetailDoctor: (data) => dispatch(actions.saveDetailDoctor(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageDoctor);
