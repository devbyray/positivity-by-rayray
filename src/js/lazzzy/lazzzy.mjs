export default class Lazzzy {
  constructor(progressiveElement, progressiveAction) {
    this.progressiveElement = progressiveElement;
    this.action = progressiveAction;
  }


  init() {

    const intersectionObserverOptions = {
        rootMargin: '0px',
        threshold: 0.1,
    };

    const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.intersectionRatio > 0) {
                console.dir(entry.target);
                this.action(entry.target);
                io.unobserve(entry.target);
            }
        });
    }, intersectionObserverOptions);

    // console.log('forEach: ', this.progressiveElement)

    [...this.progressiveElement].forEach((progressiveImage) => {
        console.log('progressiveImage: ', this.progressiveImage);
        if(!progressiveImage.querySelector('iframe')) {
            io.observe(progressiveImage);
        }
    });
  }
}
