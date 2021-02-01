import React from "react";
import ReactDOM from "react-dom";
class HelloMessage extends React.Component {
  render() {
    return <strong>Hello {this.props.name} !</strong>;
  }
}
var mount = document.getElementById("app");
ReactDOM.render(<HelloMessage name="Codemine" />, mount);
