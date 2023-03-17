/* eslint-disable no-unused-vars */
// El componente principal que contendrá todos los demás componentes y manejará el estado del juego.
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BoardGame from '../components/BoardGame'
import CardBoard from '../components/CardBoard'
<<<<<<< HEAD
import { useCards } from '../context/GameContext'
=======
>>>>>>> cc00a1939a8ccd1638a9647500f86b66c9175033

export default function GamePage () {
  const params = useParams()

<<<<<<< HEAD
  // const [canPlay, setCanPlay] = useState(false)
  // const [card1, setCard1] = useState(null)
  // const [card2, setCard2] = useState(null)
  // const [cardsImage, setCardsImage] = useState([])
  // const [foundPairs, setFoundPairs] = useState(0)

  // const [attempts, setAttempts] = useState(0)
  // const [intervalTime, setIntervalTime] = useState(null)
  // const [timer, setTimer] = useState(0)
  const { getCardsGame, cardsGame, setCardsGame } = useCards()
  const [maxPairNumber, setMaxPairNumber] = useState('')
  const [cardsLevel, setCardsLevel] = useState([])

  //! move to global context
  const [currentLevel, setCurrentLevel] = useState(2)
  const [usedCards, setUsedCards] = useState([])
  const [avoidCards, setAvoidCards] = useState([0, 1])

  useEffect(() => {
    getCardsGame(params.gameId)
    setCurrentLevel(currentLevel)
  }, [])

  const handleClick = () => {
    console.log('cardsGame')
    console.log(cardsGame)
    console.log(cardsGame.length)
    setCardsForLevel()
  }

  const isCardAllow = (card, arr) => {
    return arr.includes(card)
  }

  const selectRandomCards = (cards, numCards) => {
    let randomCards = cards.sort(() => 0.5 - Math.random()).slice(0, numCards)
    // Check cards on usedCards or avoidCards
    while (randomCards.some(card => isCardAllow(card, usedCards) || isCardAllow(card, avoidCards))) {
      randomCards = cards.sort(() => 0.5 - Math.random()).slice(0, numCards)
    }

    return randomCards
  }

  const setCardsForLevel = () => {
    let cardsLevel
    if (cardsGame) {
      cardsLevel = selectRandomCards(cardsGame, currentLevel)
    }
    setMaxPairNumber(cardsLevel.length)

    const duplicateCards = cardsLevel.concat(cardsLevel)

    setCardsLevel(duplicateCards.map((card, index) => {
      const updateCard = { ...card, index }
      return updateCard
    }))
  }

  const renderCards = (cards) => {
    const cardElement = cards.map((card, index) => {
      return (
      <figure key={card.index}>
        <i className="fa-solid fa-question"></i>
        <div className="back"></div>
        <div className="searched-image">
          <img className="" src={card.image} alt={card.name}/>
        </div>
      </figure>
      )
    })

    return (
      <div id="cards-container">
      {cardElement}
    </div>
    )
  }
  //   buildContainersCards() {
  //     let cardsImage = [];

  //      cardsGame.map(card => {
  //       cardsImage.push(
  //         `<figure data-image="${card.id}">
  //         <i class="fa-solid fa-question"></i>
  //         <div class="back"></div>
  //         <div class="searched-image">
  //         <img class="" src="${card.url}" alt="${card.name}"/>
  //         </div>
  // </figure>`
  //       );
  //     });

  //      renderCards(cardsImage.join(''));
  //   }

  //   renderBoard() {
  //      containerBoard.classList.remove('hide');
  //   }

  //   openCards() {
  //      cardsImage = document.querySelectorAll('.card-container figure');

  //      cardsImage.forEach(card => card.classList.add('opened'));

  //     setTimeout(() => {
  //        closeCards();
  //     }, 2000);
  //   }

  //   closeCards() {
  //      cardsImage.forEach(card => card.classList.remove('opened'));
  //      addClickEvents();
  //      canPlay = true;
  //   }

  //   addClickEvents() {
  //      cardsImage.forEach(card => {
  //       card.addEventListener('click',  flipCard.bind(this));
  //     });
  //   }

  //   removeClickEvents() {
  //      cardsImage.forEach(card => card.removeEventListener('click',  flipCard));
  //   }

  //   flipCard(event) {
  //     if ( foundPairs == 0 &&  timer == 0) {
  //        counterTimer();
  //     }
  //     const clickedCard = event.target;

  //     if ( canPlay && !clickedCard.classList.contains('opened')) {
  //       clickedCard.classList.add('opened');

  //        checkPair(clickedCard.dataset.image);
  //     }
  //   }

  //   checkPair(image) {
  //     if (! card1) {
  //        card1 = image;
  //     } else {
  //        card2 = image;
  //        counterAttemps();
  //     }

  //     if ( card1 &&  card2) {
  //        canPlay = false;
  //       if ( card1 ==  card2) {
  //         setTimeout( checkIfWon.bind(this), 1000);
  //       } else {
  //         setTimeout( resetOpenedCards.bind(this), 1000);
  //       }
  //     }
  //   }

  //   counterLevel() {
  //      showLevel.innerHTML = ` <h3>Level: ${ currentLevel}</h3>`;
  //   }

  //   counterAttemps() {
  //      attempts++;
  //      showAttempts.innerHTML = `<h3>Attempts: ${ attempts}</h3>`;
  //   }

  //   counterPairs() {
  //      foundPairs++;
  //      showScore.innerHTML = ` <h3>Score: ${ foundPairs}</h3>`;
  //   }

  //   updateTimer() {
  //      timer++;

  //     let hours = Math.floor( timer / 3600);
  //     let minutes = Math.floor(( timer - (hours * 3600)) / 60);
  //     let segundos =  timer - (hours * 3600) - (minutes * 60);
  //     let timeScreen = minutes.toString().padStart(2, '0') + ':' + segundos.toString().padStart(2, '0');

  //      containerTime.innerHTML = `<h3>${timeScreen} minutes</h3>`;
  //   }

  //   counterTimer() {
  //      intervalTime = setInterval( updateTimer.bind(this), 1000);
  //   }

  //   checkIfWon() {
  //      counterPairs();

  //      card1 = null;
  //      card2 = null;
  //      canPlay = true;

  //     if ( maxPairNumber ==  foundPairs) {
  //       clearInterval( intervalTime);
  //        intervalTime = null;
  //        currentLevel++;

  //        modalContinue();
  //     }
  //   }

  //   resetOpenedCards() {
  //     const firstOpened = document.querySelector(`figure.opened[data-image='${ card1}']`);
  //     const secondOpened = document.querySelector(`figure.opened[data-image='${ card2}']`);

  //     firstOpened.classList.remove('opened');
  //     secondOpened.classList.remove('opened');

  //      card1 = null;
  //      card2 = null;
  //      canPlay = true;
  //   }

  //   resetBoard() {
  //      foundPairs = 0;
  //      attempts = 0;
  //      timer = 0;
  //      containerTime.innerHTML = '<h3> 00:00 minutes</h3>';
  //      showScore.innerHTML = '<h3>Score: 0</h3>';
  //      showAttempts.innerHTML = '<h3>Attepmts: 0</h3>';
  //   }

  //   setNewGame() {
  //     console.log('start new game');
  //      removeClickEvents();
  //      counterLevel();
  //      cardsImage.forEach(card => card.classList.remove('opened'));
  //      resetBoard();

  //     setTimeout( startGame.bind(this), 1000);
  //   }

  //   modalContinue() {
  //     //Queryselector para el modal de continuar//
  //      nextModal = document.querySelectorAll('.next')[0];
  //      modal = document.querySelectorAll('.modal')[0];
  //      modalContainer = document.querySelectorAll('.modal-container')[0];

  //      modalContainer.style.opacity = '1';
  //      modalContainer.style.visibility = 'visible';
  //      modal.classList.toggle('modal-close');

  //      nextModal.addEventListener('click', () => {
  //        modal.classList.toggle('modal-close');

  //       setTimeout(() => {
  //          modalContainer.style.opacity = '0';
  //          modalContainer.style.visibility = 'hidden';
  //       }, 1000);

  //        setNewGame();
  //     });
  //   }

  return (
    <>
      <div className="flex">
        {/* level */}
        <CardBoard data={2} />
        {/* timer */}
        <CardBoard data={'00:00 seconds'}/>
      </div>

      <BoardGame/>

<div>
      <button onClick={handleClick}>Start game</button>
      {renderCards(cardsLevel)}
    </div>
      <div className="flex">
=======
  return (
    <>
      <BoardGame/>
      
      <div className="flex w-full flex-row justify-around items-center mb-3 fixed bottom-0 left-0 bg-secondary-gradient bg-no-repeat">
        {/* level */}
        <CardBoard data={2} />
        {/* timer */}
        <CardBoard data={'00:00'}/>
>>>>>>> cc00a1939a8ccd1638a9647500f86b66c9175033
        {/* score */}
        <CardBoard data={2}/>
        {/* attempts */}
        <CardBoard data={4}/>
      </div>
<<<<<<< HEAD
</>
=======

    </>
>>>>>>> cc00a1939a8ccd1638a9647500f86b66c9175033

  )
}
