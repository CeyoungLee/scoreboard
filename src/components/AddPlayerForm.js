import React from 'react';

export class AddPlayerForm extends React.Component {
  state = {
    value: ''
  };

  handleValueChange(e) {
    console.log(e);
    this.setState({value: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    //유효성체크
    const playNode = document.getElementById('player');
    console.log(playNode.validity.valid);
    if(!playNode.validity.valid){
      //isNameValid =true;
      return;
    }
    this.props.addPlayer(this.state.value);

    //폼초기화
    this.setState({value: ''});
  }


  render() {

    return (
      <div>
        <form action="" className="form" onSubmit={this.handleSubmit.bind(this)} noValidate>
          <input id="player" type="text" className="input" value={this.state.value} onChange={this.handleValueChange.bind(this)}
                 placeholder="Enter a player's name" required/>
          <input type="submit" className="input" value="Add Player"/>
        </form>
      </div>
    );
  }
}