import React from "react";
import Square from "./Square";
import { Layout } from 'antd'
const { Header, Footer, Sider, Content } = Layout

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => {
          this.props.onClick(i);
        }}
      />
    );
  }
  render() {
    return (
      <div>
        <Layout>
          <Header style={{ backgroundColor: 'red' }}>Header</Header>
          <Content style={{ backgroundColor: 'blue' }}>
            <div className="board-row">
              {this.renderSquare(0)}
              {this.renderSquare(1)}
              {this.renderSquare(2)}
            </div>
            <div className="board-row">
              {this.renderSquare(3)}
              {this.renderSquare(4)}
              {this.renderSquare(5)}
            </div>
            <div className="board-row">
              {this.renderSquare(6)}
              {this.renderSquare(7)}
              {this.renderSquare(8)}
            </div>
          </Content>
          <Footer style={{ backgroundColor: 'yellow' }}>Footer</Footer>
        </Layout>
      </div>
    );
  }
}

export default Board;
