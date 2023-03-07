import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const CURRENT_TIME = 'videoplayer-current-time';

const currentaTime = function (data) {
  localStorage.setItem(CURRENT_TIME, JSON.stringify(data.seconds));

  let time = localStorage.getItem(CURRENT_TIME);
  console.log(time);
};

player.on('timeupdate', throttle(currentaTime, 1000));

player.setCurrentTime(localStorage.getItem(CURRENT_TIME));
