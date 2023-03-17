import CardGame from './CardGame'
import { useCards } from '../context/GameContext'

export default function BoardGame () {
// Este componente sería el encargado de crear y manejar el tablero del juego. Se encargaría de hacer la llamada a la API para obtener las cartas, de crear las tarjetas y de mezclarlas. También tendría la lógica para verificar si se encontró una pareja, actualizar la puntuación y el número de intentos, y pasar al siguiente nivel.

  const { cardsGame } = useCards()
  return (
    <div >
    {/* {
      cards?.map(card => (
        <CardGame card={card} key={card.id}/>
      ))
    } */}
    <h1>Board</h1>

    {/* <CardGame></CardGame>
    <CardGame></CardGame> */}
    </div>
  )
}

// BoardGame.propTypes = {
//   cards: PropTypes.object.isRequired
// }
