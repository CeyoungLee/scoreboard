import Counter from "./Counter";
import React from "react";
import {removePlayer} from "../redux/actions";
import {connect} from "react-redux";

export class Player extends React.PureComponent{
  render(){
    console.log(this.props.name, 'rendered');
    const {removePlayer, id, name, score} = this.props;
    return (
      <div className="player">
    <span className="player-name">
      <button className="remove-player" onClick={() => removePlayer(id)}> x </button>
      {this.props.children}
      {name}
    </span>
        <Counter id={id} score={score} />
      </div>
    );
  }

/* shouldComponentUpdate(nextProps, nextState, nextContext) {
    //console.log(nextProps);
    if (nextProps.score !== this.props.score){
      return true;
    }else{
      return false;
    }
  }*/
}

const mapActionToProps = (dispatch) => ({
  removePlayer: (id) => dispatch(removePlayer(id))
})

export default connect(null, mapActionToProps)(Player);