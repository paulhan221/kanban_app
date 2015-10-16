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

console.log(arrow.hello);