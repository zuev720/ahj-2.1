export default class Controller {
  constructor(main) {
    this.board = main;
  }

  init() {
    setInterval(() => {
      this.board.drawUi();
      this.board.redrawPositions(Math.trunc(Math.random() * this.board.cells.length));
    }, 800);
  }
}
