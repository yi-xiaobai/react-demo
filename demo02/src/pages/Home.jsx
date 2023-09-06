import { Component } from "react";
import Mock from "mockjs";
import axios from "axios";
import "./index.css";

// mock数据
Mock.mock("/mock/usermsg", "get", {
  code: "0",
  msg: "success",
  "list|5": [{ name: "@name", age: "@integer(18, 25)" }],
});

class Home extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    list: [],
    isShow: true,
  };
  render() {
    return (
      <div>
        <div className={this.state.isShow ? "show" : "hide"}>我是Home组件</div>
        <div>
          <button onClick={this.handleCss}>显示Home组件</button>
        </div>
      </div>
    );
  }

  handleCss = () => {
    this.setState({
      isShow: !this.state.isShow,
    });
  };

  componentDidMount() {
    axios
      .get("/mock/usermsg")
      .then((res) => {
        console.log("==>Get res", res);
        this.setState({
          list: res.data.list,
        });
      })
      .catch((err) => {
        console.error("==>Get err", err);
      });
  }
}

export default Home;
