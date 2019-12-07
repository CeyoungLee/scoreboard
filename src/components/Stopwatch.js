import React,{useState, useEffect, useRef} from 'react';

export function Stopwatch () {
  let tickRef; //클래스에서는 속성, 펑션에서는 변수로 따로 선언.
  const [isRunning, setIsRunning] = useState(false);
  // 속성, 함수, = 초기값 한번에 속성 하나 정의
  const [timer, setTimer] = useState(0);

  useInterval(()=>{
    if (isRunning) {
      setTimer(timer+1);
    }
  },1000);


  return (
    <div className="stopwatch">
      <h1 className="h1">Stopwatch</h1>
      <span className="stopwatch-time">{timer}</span>
      <button onClick= {() => setIsRunning(!isRunning)}>{isRunning ? 'Stop' : 'Start'}</button>
      <button onClick={() => {
        setTimer(0)}}>
        Reset
      </button>
    </div>
  );
}

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}