import React from 'react';
import {addPlayer} from "../redux/actions";
import {connect} from "react-redux";

export class AddPlayerForm extends React.Component {
  handleSubmit(e) {
    e.preventDefault();

    //유효성체크
    const playNode = document.getElementById('player');
    console.log(playNode.validity.valid);
    if(!playNode.validity.valid){
      //isNameValid =true;
      return;
    }
    //this.props.addPlayer(this.state.value);

    this.props.addPlayer(playNode.value);
    //폼초기화
   // this.setState({value: ''});
    playNode.value = '';
  }


  render() {

    return (
      <div>
        <form action="" className="form" onSubmit={this.handleSubmit.bind(this)} noValidate>
          <input id="player" type="text" className="input"
                 placeholder="Enter a player's name" required/>
          <input type="submit" className="input" value="Add Player"/>
        </form>
      </div>
    );
  }
}

// (액션을 디스패치하는) function 을 props로 매핑.
const mapActionToProps = (dispatch) => ({
  //왼: props, 오: fx
  addPlayer : (name) => dispatch(addPlayer(name))//액션을 디스패치한다.
});

//문법: 커링, 개념: HoC 입력 파라미터에 컴포를 넣어서 새로운 기능의 컴포를 리턴하는 펑션
export default connect(null,mapActionToProps)(AddPlayerForm);