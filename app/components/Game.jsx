//Component1.jsx
import React from "react";
import Board from "./Board.jsx";
// console.log(React);
const user = {
  firstname: "yyy",
  lastname: "xxx"
};
class Component1 extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

//导出组件
export default Component1;
