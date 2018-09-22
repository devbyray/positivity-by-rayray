import moment from 'moment';
//
export default function(playerWrapper) {
  const PodcastPlayer = document.querySelector(playerWrapper);
  const PodcastPlayerAudioLink = PodcastPlayer.dataset.audio;

  const PODCAST_AUDIO = document.createElement("AUDIO");
  const PODCAST_AUDIOSource = document.createElement("SOURCE");
  const PodcastCustomPlayer = document.createElement("DIV");

  const CAP_CONTROLS = document.createElement("DIV");
  const CAP_CONTROL_PLAY = document.createElement("BUTTON");
  const CAP_CONTROL_PAUSE = document.createElement("BUTTON");

  const CAP_DURATION = document.createElement("DIV");
  const CAP_DURATION_CURRENT = document.createElement("SPAN");
  const CAP_DURATION_TOTAL = document.createElement("SPAN");

  const CAP_PLAY_CLASS = 'cap-button--play';
  const CAP_PAUSE_CLASS = 'cap-button--pause';

  CAP_CONTROL_PLAY.innerHTML = '<i class="fas fa-play"></i>';
  CAP_CONTROL_PAUSE.innerHTML = '<i class="fas fa-pause"></i>';

  CAP_CONTROL_PLAY.classList.add(CAP_PLAY_CLASS);
  CAP_CONTROL_PAUSE.classList.add(CAP_PAUSE_CLASS);

  CAP_DURATION.classList.add("cap-duration");
  CAP_DURATION_CURRENT.classList.add("cap-duration--current");
  CAP_DURATION_TOTAL.classList.add("cap-duration--total");

  PodcastCustomPlayer.classList.add("custom-audio-player");

  PODCAST_AUDIO.controls = "controls";
  PODCAST_AUDIOSource.type = "audio/mp4";
  PODCAST_AUDIOSource.src = PodcastPlayerAudioLink;


  CAP_CONTROL_PLAY.addEventListener("click", (event) => {
    PODCAST_AUDIO.play();
  });

  CAP_CONTROL_PAUSE.addEventListener("click", (event) => {
    PODCAST_AUDIO.play();
  });

  CAP_DURATION.appendChild(CAP_DURATION_CURRENT);
  CAP_DURATION.appendChild(CAP_DURATION_TOTAL);

  CAP_CONTROLS.appendChild(CAP_CONTROL_PLAY);
  CAP_CONTROLS.appendChild(CAP_CONTROL_PAUSE);
  CAP_CONTROLS.appendChild(CAP_DURATION);


  PODCAST_AUDIO.appendChild(PODCAST_AUDIOSource);
  PodcastPlayer.appendChild(PODCAST_AUDIO);
  PodcastPlayer.appendChild(CAP_CONTROLS);
  PodcastPlayer.appendChild(PodcastCustomPlayer);

  const CAP_DURATION_CURRENT_EL = document.querySelector('.cap-duration--current');
  const CAP_DURATION_TOTAL_EL = document.querySelector('.cap-duration--total');

  PODCAST_AUDIO.ontimeupdate = function(event) {
    //update something related to playback progress
    console.log('event: ', Math.round(event.target.currentTime));
    CAP_DURATION_CURRENT_EL.innerHTML = getTimeStamp(event.target.currentTime);
  };

  PODCAST_AUDIO.oncanplay = function() {
    CAP_DURATION_CURRENT_EL.innerHTML = getStartTimeStamp();
    CAP_DURATION_TOTAL_EL.innerHTML = getTotalTimeStamp();
  };

  function getTimeStamp(timeStamp) {
    return moment(timeStamp).format('mm:ss')
  }
  function getTotalTimeStamp(inputTimeStamp) {
    const TIME = getTimeStamp(inputTimeStamp ? inputTimeStamp : PODCAST_AUDIO.duration);
    return ` / ${TIME}`;
  }
  function getStartTimeStamp() {
    return '00:00';
  }
  console.dir(PODCAST_AUDIO);
};
