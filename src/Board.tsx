import * as React from "react";
import Square from "./Square";

interface IState {
  squares: Array<string | null>;
}

class Board extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      squares: Array(9).fill(null)
    };
    this.handleClick = this.handleClick.bind(this);
  }

  public handleClick(i: number) {
    const squares = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({squares});
    window.console.log(squares);
  }

  public renderSquare(i: number) {
    return <Square value={this.state.squares[i]} onClick={this.handleClick.bind(null, i)} />;
  }

  public render() {
    const status = "Next player: X";

    return (
      <div>
        <div className="status">{status}</div>
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
      </div>
    );
  }
}

export default Board;
