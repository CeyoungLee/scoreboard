import React from 'react';

export class Stopwatch extends React.Component {
  tickRef;
  state = {
    isRunning: false,
    timer:0
  }

  handleStopwatch(){
    this.setState(prevState => ({isRunning: !prevState.isRunning}))
  }

  render() {
    return (
      <div className="stopwatch">
        <h1 className="h1">Stopwatch</h1>
        <span className="stopwatch-time">{this.state.timer}</span>
        <button onClick={this.handleStopwatch.bind(this)}>{this.state.isRunning ? 'Stop' : 'Start'}</button>
        <button onClick={()=>{this.setState({timer:0})}}>Reset</button>
      </div>
    );
  }

  tick = () => {
    if(this.state.isRunning){
      this.setState(prevState => ({timer: prevState.timer +1})) ;
    }
  }

  componentDidMount() {
    console.log('componentDidMount');
    this.tickRef = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.tickRef);
  }
}
