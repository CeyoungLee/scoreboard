import React from "react";

export class Counter extends React.Component {

  state = {
    score: 1
  };

  incrementScore = () => {
    this.setState(prevState => ({score: prevState.score + 1}));
  };

  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement">-</button>
        <span className="counter-score">{this.state.score} </span>
        <button className="counter-action increment" onClick={this.incrementScore}>+</button>
      </div>
    )
  }
}