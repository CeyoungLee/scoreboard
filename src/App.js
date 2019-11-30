import React from 'react';
import './App.css';
import {Header} from './components/Header';
import {Player} from './components/Player';
import {AddPlayerForm} from "./components/AddPlayerForm";

let maxID = 4;

class App extends React.Component {
  state = {
    players: [
      {id: 1, name: 'LDK', score: 10},
      {id: 2, name: 'PARK', score: 20},
      {id: 3, name: 'KIM', score: 12},
      {id: 4, name: 'HONG', score: 5}
    ]
  }

  render() {
    return (<div className="scoreboard">
      <Header title="My Scoreboard" players={this.state.players}/>
      {
        this.state.players.map((player) => (
          <Player name={player.name} key={player.id.toString()} score={player.score}
                  changeScore={this.handleChangeScore}
                  removePlayer={this.handleRemovePlayer} id={player.id}/>
        ))
      }
      <AddPlayerForm addPlayer={this.handleAddPlayer}></AddPlayerForm>
    </div>)
  }

  handleRemovePlayer = (id) => {
    console.log('removePlayer:' + id);
    const players = this.state.players.filter(player => player.id !== id); //id값이 사라진 애들만 남긴 배열 리턴. this 가 클릭시 실행되는 비동기라서 큐에서 기다리고 있다. this가 undefined
    //this.state.players = players; 이렇게 하면 안된대
    console.log(players);
    this.setState(prevState => {
      const players = prevState.players.filter(player => player.id !== id);
      // immutable 함수를 이용하여 새로운 배열을 리턴해야합니다.
      //키와 변수가 같을 경우 한쪽을 생략. : shorthand property
      return {players: players}
    })
  }

  handleChangeScore = (id, delta) => {
    console.log('handleChangeScore', id, ' ', delta)
    this.setState(prevState => {
      //원본배열이 아닌 새배열 리턴하기 바구니만 보고 자식이 같다고 생각할까봐
      const players = [...prevState.players];
      players.forEach(player => {
        if (player.id ===id ){
          player.score += delta
        }
      })
      return {players}
    })
  }

  handleAddPlayer = (name) =>{
    console.log('handleAddPlayer',  name);
  this.setState(prevState => {
    const players = [...prevState.players];
    players.push({id: ++maxID, name: name, score: 0})
    return {players:players};
    });
  }

}


export default App;
