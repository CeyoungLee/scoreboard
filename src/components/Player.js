import {Counter} from "./Counter";
import React from "react";

export class Player extends React.PureComponent{
  render(){
    console.log(this.props.name, 'rendered');

    return (
      <div className="player">
    <span className="player-name">
      <button className="remove-player" onClick={() => this.props.removePlayer(this.props.id)}> x </button>
      {this.props.name}
    </span>
        <Counter id={this.props.id} score={this.props.score} changeScore={this.props.changeScore}/>
      </div>
    );
  }

/*  shouldComponentUpdate(nextProps, nextState, nextContext) {
    //console.log(nextProps);
    if (nextProps.score !== this.props.score){
      return true;
    }else{
      return false;
    }
  }*/

}