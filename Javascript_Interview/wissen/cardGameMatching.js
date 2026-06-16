/**
 * Card Matching Memory Game
 *
 * Rules:
 * 1. Cards are shuffled at the start of the game.
 * 2. All cards are initially hidden and displayed as '?'.
 * 3. Player can reveal two cards at a time.
 * 4. If both cards match:
 *      - They remain visible.
 *      - Player can continue matching the remaining pairs.
 * 5. If any pair does not match:
 *      - The entire game resets.
 *      - All previously matched pairs are cleared.
 *      - Cards are shuffled again.
 * 6. The goal is to match all pairs consecutively without making a single mistake.
 *
 **/

import { useEffect, useState } from "react";

const initialCards = [1, 1, 2, 2, 3, 3, 4, 4];

function shuffleCards(cards) {
  return [...cards]
    .sort(() => Math.random() - 0.5)
    .map((value, index) => ({
      id: `${value}-${index}-${Math.random()}`,
      value,
    }));
}

export default function App() {
  const [cards, setCards] = useState([]);
  const [pickedCards, setPickedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [isChecking, setIsChecking] = useState(false);

  useEffect(() => {
    restartGame();
  }, []);

  function restartGame() {
    setCards(shuffleCards(initialCards));
    setPickedCards([]);
    setMatchedCards([]);
    setIsChecking(false);
  }

  function handleCardClick(card) {
    if (isChecking) return;

    const alreadyPicked = pickedCards.some(
      (picked) => picked.id === card.id
    );

    const alreadyMatched = matchedCards.some(
      (matched) => matched.id === card.id
    );

    if (alreadyPicked || alreadyMatched) return;

    const newPickedCards = [...pickedCards, card];

    setPickedCards(newPickedCards);

    if (newPickedCards.length === 2) {
      setIsChecking(true);

      const [first, second] = newPickedCards;

      if (first.value === second.value) {
        setMatchedCards((prev) => [
          ...prev,
          first,
          second,
        ]);

        setPickedCards([]);
        setIsChecking(false);
      } else {
        setTimeout(() => {
          restartGame();
        }, 800);
      }
    }
  }

  function shouldShowCard(card) {
    return (
      pickedCards.some((picked) => picked.id === card.id) ||
      matchedCards.some((matched) => matched.id === card.id)
    );
  }

  return (
    <div>
      <h2>Card Matching Game</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 80px)",
          gap: "10px",
        }}
      >
        {cards.map((card) => (
          <button
            key={card.id}
            onClick={() => handleCardClick(card)}
            style={{
              height: "80px",
              fontSize: "24px",
              cursor: "pointer",
            }}
          >
            {shouldShowCard(card) ? card.value : "?"}
          </button>
        ))}
      </div>
    </div>
  );
}
