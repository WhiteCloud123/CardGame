import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import {useState} from 'react';
import Start from './cardGame/Start';
import CardGame from './cardGame/CardGame';

function App() {
  const [turn,setTurn]=useState(8)
  const [cardNum,setCardNum]=useState(12)
  const [size,setSize]=useState();
  const getTurn=num=>{
    setTurn(num)
  }
  const getCardNum=num=>{
    setCardNum(num)
  }
  const getSize=(e)=>{
    setSize(e);
  }
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Start getTurn={getTurn} getCardNum={getCardNum} getSize={getSize}/>}/>
        <Route path="/CardGame" element={<CardGame turn={turn} cardNum={cardNum} getTurn={getTurn} getCardNum={getCardNum} size={size}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
