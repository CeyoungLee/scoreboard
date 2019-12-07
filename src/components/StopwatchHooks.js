import React,{useState, useEffect} from 'react';

export function Stopwatch () {
  let tickRef; //클래스에서는 속성, 펑션에서는 변수로 따로 선언.
  const [isRunning, setIsRunning] = useState(false);
  // 속성, 함수, = 초기값 한번에 속성 하나 정의
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    //DOM 이 렌더링 된 후  side effect 호출되는 펑션을 여기에 적어라
    this.tickRef = setInterval(this.tick, 1000);
    return () => {
      clearInterval(this.tickRef)
    }
  },[]);

  function handleStopwatch() {
    this.setState(prevState => ({isRunning: !prevState.isRunning}))
  }

  function tick() {
    if (this.state.isRunning) {
      this.setState(prevState => ({timer: prevState.timer + 1}));
    }
  }

  return (
    <div className="stopwatch">
      <h1 className="h1">Stopwatch</h1>
      <span className="stopwatch-time">{this.state.timer}</span>
      <button onClick={this.handleStopwatch.bind(this)}>{this.state.isRunning ? 'Stop' : 'Start'}</button>
      <button onClick={() => {
        this.setState({timer: 0})
      }}>Reset
      </button>
    </div>
  );
}