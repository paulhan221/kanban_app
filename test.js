// random file to test es6 features
class Arrow {
  constructor(waka, flaka) {
    this.waka = waka;
    this.flaka = flaka;
  }

  hello() {
    () => console.log('word')
  }

  objectParams({waka, flaka}) {
    console.log(waka);
    console.log('   ||     ');
    console.log(flaka);
  }
}

var arrow = new Arrow('waka', 'flaka');

var dear = {hi: 'hi'};
var beer = {bye: 'bye'};
console.log(arrow.objectParams(dear, beer));