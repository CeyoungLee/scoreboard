import React from 'react';

export class AddPlayerForm extends React.Component {
  render() {
    this.state = {
      value: ''
    };

    function handleValueChange(e){
      console.log(e);
      this.setState({value: e.target.value});
    }

    return (
      <div>
        <form action="" className="form">
          <input type="text" className="input" value={this.state.value} onChange={this.handleValueChange}
                 placeholder="Enter a player's name"/>
          <input type="submit" className="input" value="Add Player"/>
        </form>
      </div>
    );
  }
}