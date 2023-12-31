import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const currentTime = localStorage.getItem('videoplayer-current-time');

player.on(
  'timeupdate',
  throttle(({ duration, percent, seconds }) => {
    localStorage.setItem('videoplayer-current-time', seconds);
  }, 1000)
);

player.setCurrentTime(currentTime);
