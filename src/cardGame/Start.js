import './Card.css';
import { useNavigate } from 'react-router-dom';
import { useEffect,useState } from 'react';

function Start({getTurn,getCardNum,getSize}){
  const navigate=useNavigate();
  const [color,setColor]=useState();
  const cardgame=()=>{
    navigate("/CardGame");
  }
  
  //checked 버그 해결
  useEffect(()=>{
    const easyCheck=document.getElementById('easy');
    easyCheck.checked=true;
    getSize("")
  },[]);

  function easy(){
    getTurn(8)
    getCardNum(12)
    setColor('white');
    getSize("");
  }
  function normal(){
    getTurn(10)
    getCardNum(16)
    setColor('skyblue');
    getSize("");
  }
  function hard(){
    getTurn(15)
    getCardNum(24)
    setColor('red');
    getSize('big');
  }

  return(
    <div className="start">
      <header>
        <h1>카드 맞추기 게임</h1>
      </header>
      <main>
        <h2 className={color}>난이도</h2>
        <div className='mainDiv'>
          <div>
            <p>쉬움</p>
            <input type="radio" name="difficulty" id="easy" onChange={easy}/>
          </div>
          <div>
            <p>보통</p>
            <input type="radio" name="difficulty" id="normal" onChange={normal}/>
          </div>
          <div>
            <p>어려움</p>
            <input type="radio" name="difficulty" id="hard" onChange={hard}/>
          </div>
        </div>
        <button className='startBtn' onClick={cardgame}>게임 시작</button>
      </main>
    </div>
  )
}

export default Start;