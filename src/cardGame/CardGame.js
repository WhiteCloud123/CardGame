//CardGame.js
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import SingleCard from './SingleCard'
import './Card.css'

const cardImages = [
  {"src": "/img/card1.png", "matched": false},
  {"src": "/img/card2.png", "matched": false},
  {"src": "/img/card3.png", "matched": false},
  {"src": "/img/card4.png", "matched": false},
  {"src": "/img/card5.png", "matched": false},
  {"src": "/img/card6.png", "matched": false},
  {"src": "/img/card7.png", "matched": false},
  {"src": "/img/card8.png", "matched": false},
  {"src": "/img/card9.png", "matched": false},
  {"src": "/img/card10.png", "matched": false},
  {"src": "/img/card11.png", "matched": false},
  {"src": "/img/card12.png", "matched": false},
]

function CardGame({turn,cardNum,getTurn,getCardNum,size}) {
  let CardNum=cardNum/2;
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(turn)
  const [match, setMatch] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)  
  const [choiceTwo, setChoiceTwo] = useState(null)  

  

  const cardImagesNum=cardImages.slice(0,CardNum);
  
  //카드 섞기
  const shuffleCard = () => {
    const shuffled = [...cardImagesNum, ...cardImagesNum]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({...card, id: Math.random()}))
    setCards(shuffled)
    setTurns(turn)
    setMatch(0)
    setChoiceOne(null)
    setChoiceTwo(null)
  }
  //console.log(cards, turns)
  
  //카드 뒷면 클릭했을 때 선택한 카드 정보 업데이트
  const handleChoice = (card) => {
    choiceOne === null ? setChoiceOne(card) : setChoiceTwo(card)
  }
  
  // 선택된 2장의 카드를 src를 비교해서 matched 속성을 변경
  useEffect(() => {
    if(choiceOne && choiceTwo) {      
      if(choiceOne.src === choiceTwo.src) {
        //console.log('match')
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if(card.src === choiceOne.src) {
              return {...card, matched: true}
            } else {
              return card
            }
          })
        })
        setChoiceOne(null)
        setChoiceTwo(null)
        setMatch(match+1)
      } else { //src가 다를때
        //console.log('not')
        setTimeout(resetTurn,500)
      }
    }
  }, [choiceOne, choiceTwo])
  
  const resetTurn=()=>{
    //chioce값을 초기화, turn 값을 감소  
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(turns - 1)
  }
  
  useEffect(() => {
    shuffleCard()
  }, [])

  const navigate=useNavigate();
  const home=()=>{
    getTurn(8)
    getCardNum(12)
    navigate("/");
  }

  return(
    <div className="board">
      <header>
        <div>
          <button onClick={shuffleCard}>다시 하기</button>
          <button onClick={home}>홈으로</button>
          <p>생명 : {turns} </p>
          <p>맞춘 수 : {match}</p>
        </div>
      </header>
      {
        turns===0 ? 
          <div>
            <p className='failText'>실패</p>
          </div>: ''
      }
      {
        match===CardNum ? 
        <div>
          <p className='succesText'>성공</p>
        </div>
        : ''
      }
      <div className={"card_wrap " + size}>
        {cards.map((card) => (
          <SingleCard 
            key={card.id} 
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
          />
        ))}
      </div>
    </div>
  )
}
export default CardGame