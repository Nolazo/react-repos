import { Square } from "./Square"
import Confetti from 'react-confetti'

export const WinnerModal = ({winner, resetGame}) => {
  if(winner === null) return null
  const winnerText = winner === false ? 'Empate' : `Ganador: ${winner}`

  return (
    <section className='winner'>
      <Confetti width={window.innerWidth} height={window.innerHeight} />
      <div className='text'>
        <h2>
          {winnerText}
        </h2>
        <header className='win'>
          {winner && <Square>{winner}</Square>}
        </header>
        <footer>
          <button onClick={resetGame}>Play again</button>
        </footer>
      </div>
    </section>
  )
}
