const cardsArray = [{
    'name': 'ane',
    'img' : 'img/anehihan.jpg',
}, {
    'name': 'chat',
    'img' : 'img/chatminou.jpg',
}, {
    'name': 'chien',
    'img' : 'img/chientoutou.jpg',
}, {
    'name': 'lama',
    'img' : 'img/lamacrachat.jpg',
}, {
    'name': 'lapin',
    'img' : 'img/lapinscrottes.jpg',
}, {
    'name': 'lionne',
    'img' : 'img/lionnegraou.jpg',
}, {
    'name': 'ours',
    'img' : 'img/oursbaby.jpg',
}];

const game = document.getElementById('game');
const grid = document.createElement('section');

grid.setAttribute('class', 'grid');
game.appendChild(grid);

// Duplique le tableau d'image pour avoir deux fois les images
let gameGrid = cardsArray.concat(cardsArray);

// Trie le tableau dans un ordre alétoire
gameGrid.sort(() => 0.5 - Math.random());

gameGrid.forEach(item => {
  // Create card element with the name dataset
  const card = document.createElement('div');
  card.classList.add('card');
  card.dataset.name = item.name;

  // Create front of card
  const front = document.createElement('div');
  front.classList.add('front');

  // Create back of card, which contains 
  const back = document.createElement('div');
  back.classList.add('back');
  back.style.backgroundImage = `url(${item.img})`;

  // Append card to grid, and front and back to each card
  grid.appendChild(card);
  card.appendChild(front);
  card.appendChild(back);
});

let firstGuess = '';
let secondGuess = '';
let count = 0;
let previousTarget = null;
let delay = 500;
let paire = 0;
// Add event listener to grid
grid.addEventListener('click', function (event) {
  // The event target is our clicked item
  let clicked = event.target;

  // Do not allow the grid section itself to be selected; only select divs inside the grid
  if (clicked.nodeName === 'SECTION' || clicked === previousTarget ||
  clicked.parentNode.classList.contains('match')) { return; }
  
    if (count < 2) {
        count++;
        if (count === 1) {
            // Assign first guess
            firstGuess = clicked.parentNode.dataset.name;
            console.log(firstGuess);
            clicked.parentNode.classList.add('selected');
        } else {
            // Assign second guess
            secondGuess = clicked.parentNode.dataset.name;
            console.log(secondGuess);
            clicked.parentNode.classList.add('selected');
        }
        // If both guesses are not empty...
        if (firstGuess !== '' && secondGuess !== '') {
            // and the first guess matches the second match...
            if (firstGuess === secondGuess) {
                // run the match function
                setTimeout(match, delay);
                setTimeout(resetGuesses, delay);
                setTimeout(gagne, 1500);
                paire++;
            } else{
                setTimeout(resetGuesses, delay);
                setTimeout(wrongPair, delay);
            }
        }
        previousTarget = clicked; 
    }
 });

// Add match CSS
const match = () => {
  var selected = document.querySelectorAll('.selected');
  selected.forEach(card => {
    card.classList.add('match');
  });
}

const resetGuesses = () => {
  firstGuess = '';
  secondGuess = '';
  count = 0;

  var selected = document.querySelectorAll('.selected');
  selected.forEach(card => {
    card.classList.remove('selected');
  });
};

let gagne = () => {
    if(paire == cardsArray.length){
        alert("FELICITATIONS !");
        location.reload();
    }    
}

let wrongPair = () =>{
    alert('pas la bonne paire !');
}




