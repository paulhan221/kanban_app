// random file to test es6 features
class Arrow {
  constructor(waka, flaka) {
    this.waka = waka;
    this.flaka = flaka;
  }

  hello() {
    () => console.log('word')
  }
}

var arrow = new Arrow('waka', 'flaka');

var arr = [1,2,3,4,5];

console.log(arr.filter((a) => a > 1));