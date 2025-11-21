import Icons from './utils/Icons.js';
// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';

class Main {
  constructor() {
    this.init();
  }

  init() {
    Icons.load();
  }
}
new Main();
