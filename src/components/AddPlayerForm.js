import React from 'react';

export class AddPlayerForm extends React.Component {
  state = {
    value: ''
  }

  handleValueChange(e) {
    console.log(e);
    this.setState({value: e.target.value});
  }
  handleSubmit(e){
    e.preventDefault();
    this.props.addPlayer(this.state.value);
    this.setState({value: ''});
  }


  render() {

    return (
      <div>
        <form action="" className="form" onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" className="input" value={this.state.value} onChange={this.handleValueChange.bind(this)}
                 placeholder="Enter a player's name"/>
          <input type="submit" className="input" value="Add Player"/>
        </form>
      </div>
    );
  }
}