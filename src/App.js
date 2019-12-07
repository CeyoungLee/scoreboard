import React from 'react';
import './App.css';
import {Header} from './components/Header';
import AddPlayerForm from "./components/AddPlayerForm";
import {connect} from "react-redux";
import {CustomPlayer} from "./components/CustomPlayer";
import _ from 'lodash';
import Player from './components/Player';

class App extends React.Component {
  getHighScore(){
    const maxObj = _.maxBy(this.props.players, 'score');
    return maxObj.score;
  }

  render() {
    return (<div className="scoreboard">
      <Header title="My Scoreboard" players={this.props.players}/>
      {
        this.props.players.map((player) => (
          <CustomPlayer name={player.name} key={player.id.toString()} score={player.score} isHighScore={this.getHighScore() === player.score}/>
        ))
      }
      <AddPlayerForm></AddPlayerForm>
    </div>)
  }
/*
  handleRemovePlayer = (id) => {
    console.log('removePlayer:' + id);
    const players = this.props.players.filter(player => player.id !== id); //id값이 사라진 애들만 남긴 배열 리턴. this 가 클릭시 실행되는 비동기라서 큐에서 기다리고 있다. this가 undefined
    //this.state.players = players; 이렇게 하면 안된대>나중 state> props로
    console.log(players);
    this.setState(prevState => {
      const players = prevState.players.filter(player => player.id !== id);
      // immutable 함수를 이용하여 새로운 배열을 리턴해야합니다.
      //키와 변수가 같을 경우 한쪽을 생략. : shorthand property
      return {players: players}
    })
  }*/
}

const mapStateToProps = (state) => {
  return {
    //왼 props 우 store 의 state
    players: state.playerReducer.players
  }
};


export default connect(mapStateToProps,null)(App);
