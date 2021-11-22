// Code your solutions in this file
const cards = [];
const cardArr = [];
function writeCards(cards) {
  for (let i = 0; i < cards.length; i++) {
    cardArr.push(`Thank you, ${cards[i]}, for the wonderful surprise gift!`);
  }

  return cardArr;
}

writeCards(cards);

function countDown(num) {
    while (num >= 0) {
        console.log(num--)
    }
}