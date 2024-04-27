import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

// Obținem elementul iframe
const iframe = document.querySelector('iframe');

// Creăm o instanță de player Vimeo folosind iframe-ul
const player = new Player(iframe);

// Adăugăm un event listener pentru evenimentul 'play'
player.on('play', function () {
  console.log('played the video!');
});

// Adăugăm un event listener pentru evenimentul 'timeupdate' pentru a actualiza și salva timpul de redare în local storage
player.on('timeupdate', function (data) {
  const currentTime = data.seconds;
  localStorage.setItem('videoplayer-current-time', currentTime);
  console.log('current time:', currentTime);
});

// Obținem timpul salvat din local storage la reîncărcarea paginii și setăm timpul de redare al player-ului
window.addEventListener('load', function () {
  const savedTime = localStorage.getItem('videoplayer-current-time');
  if (savedTime) {
    player.setCurrentTime(parseFloat(savedTime));
  }
});

// Obținem titlul videoclipului folosind metoda 'getVideoTitle()'
player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
