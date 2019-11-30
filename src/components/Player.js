import {Counter} from "./Counter";
import React from "react";

export class Player extends React.Component{
  render(){
    console.log(this.props.name, 'rendered');
    const {removePlayer, id, name, score, changeScore} = this.props;
    return (
      <div className="player">
    <span className="player-name">
      <button className="remove-player" onClick={() => removePlayer(id)}> x </button>
      {name}
    </span>
        <Counter id={id} score={this.props.score} changeScore={changeScore}/>
      </div>
    );
  }

 shouldComponentUpdate(nextProps, nextState, nextContext) {
    //console.log(nextProps);
    if (nextProps.score !== this.props.score){
      return true;
    }else{
      return false;
    }
  }

}