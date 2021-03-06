import "../../Css/Decks/DeckListComponent.css";

function DeckListComponent(props) {
    const deck = props.deck;
    const selectedDeck = props.selectedDeck;
    const setSelectedDeck = props.setSelectedDeck;
    const setSelectedCard = props.setSelectedCard

    const apiFindByName = "https://api.scryfall.com/cards/named?fuzzy="

    function selectDeck() {
        setSelectedDeck(deck);
    }

    function selectCard(cardName) {
        fetch(apiFindByName + cardName)
            .then((res) => res.json())
            .then((data) => setSelectedCard(data))
    }

    return (
        <div>
            {selectedDeck._id === deck._id || !selectDeck ? (
                <div className="mainDeckListComponentDiv">
                    <div className="deckInfoDiv">
                        <div className="deckName">{deck.deckName}</div>
                        {deck.deckPrice && <div className="price">Price: {deck.deckPrice}€</div>}
                    </div>
                    {deck.cards ? (
                        <div>
                            <h2 className="titleCards">Cards: </h2>
                            {deck.cards.map((card) => {
                                return (
                                    <div onClick={() => {selectCard(card.cardName)}}>
                                        <span className="cardName">
                                            {card.cardQuantity !== 1
                                                ? "(x" + card.cardQuantity + ") "
                                                : ""}
                                            {card.cardName}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        <></>
                    )}
                </div>
            ) : (
                <div className="mainDeckListComponentDiv" onClick={selectDeck}>
                    <span className="deckName">{deck.deckName}</span>
                </div>
            )}
        </div>
    );
}

export default DeckListComponent;
