//SingleCard.js
import './Card.css'

function SingleCard({card,handleChoice,flipped}) {

  const onClick = () => {
    handleChoice(card)
    //CardGame 컴포넌트에서 선택한 2장의 카드를 처리하는 함수 handleChoice에 현재 선택된 카드 정보 전달
  }
  
  return(
    <div className='card'>
      <div className={flipped ? 'flipped' : ''}>
        <img className='front' src={card.src} alt='앞면' />
        <img className='back' src='/img/back.jpg' onClick={onClick} alt='뒷면' />
      </div>
    </div>
  )
}
export default SingleCard