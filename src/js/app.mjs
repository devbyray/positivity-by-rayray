// JS Goes here - ES6 supported
import CustomAudioPlayer from "./audio-player/index.mjs";
// Say hello
const PODCAST_PLAYER = ".podcast__player";
if (document.querySelector(PODCAST_PLAYER)) {
  new CustomAudioPlayer(PODCAST_PLAYER);
}
