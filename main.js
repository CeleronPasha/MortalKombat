// Task #0 //
const player1 = {
  name: 'Liukang',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
  weapon: 'Rasengan',
  attack: function() {
    console.log(player1.name + 'fight...')
  }
}

const player2 = {
  name: 'Subzero',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
  weapon: 'stone',
  attack: function() {
    console.log(player1.name + 'fight...')
  }
}

// Task #1 //
const $arenas = document.querySelector('.arenas')

function createPlayer(player, name, hp, heroImage){
  const $player = document.createElement('div')
  const $progressbar = document.createElement('div');
  const $character = document.createElement('div');
  const $life = document.createElement('div');
  const $name = document.createElement('div');
  const $img = document.createElement('img');
  

  $player.classList.add(player);
  $progressbar.classList.add('progressbar');
  $character.classList.add('character')
  $life.style.width = hp + '%';
  $life.classList.add('life');
  $name.classList.add('name')
  $name.innerText = name;
  $img.src = heroImage;

  $arenas.appendChild($player)
  $player.appendChild($progressbar);
  $player.appendChild($character);
  $progressbar.appendChild($life);
  $progressbar.appendChild($name);
  $character.appendChild($img);

}

// Task #2 //
createPlayer('player1', player1.name, player1.hp, player1.img);
createPlayer('player2', player2.name, player2.hp, player2.img);


