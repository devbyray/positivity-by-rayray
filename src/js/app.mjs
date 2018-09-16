import 'intersection-observer';
import Lazzzy from "./lazzzy/lazzzy.mjs";

window.onload = () => {
  // JS Goes here - ES6 supported
  // Say hello
  // const PODCAST_PLAYER = ".podcast__player";
  const IFRAME_ELEMENTS = document.querySelectorAll(".progressive-iframe");
  // if (document.querySelector(PODCAST_PLAYER)) {
  //   new CustomAudioPlayer(PODCAST_PLAYER);
  // }

  const PROGRESSIVE_IFRAME = (element) => {
    console.log('element: ', element);
    console.log('element: ', element.childeren);
    if(element.querySelector('iframe')) {
      return;
    }
    // Create an iframe:
    const iframe = document.createElement("iframe");

    // Put it in the document (but hidden):
    iframe.style.visibility = "hidden";
    iframe.frameborder = 0;
    iframe.scrolling = 'no';
    iframe.src = element.dataset.src;
    iframe.width = '100%';
    iframe.height = '102px';
    iframe.style.visibility = "visible";

    element.appendChild(iframe);
  };
  console.log("iframe!", IFRAME_ELEMENTS);

  if (IFRAME_ELEMENTS.length > 0) {
    // console.log("iframe!", IFRAME_ELEMENTS);
    const progressiveIframe = new Lazzzy(IFRAME_ELEMENTS, PROGRESSIVE_IFRAME);
    progressiveIframe.init();
  }
};
