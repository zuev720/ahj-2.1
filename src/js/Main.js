export default class Main {
  constructor(element) {
    this.container = element;
    this.borderEl = null;
    this.boardSize = 4;
    this.cells = [];
  }

  drawUi() {
    this.container.innerHTML = `
      <div class="board-container">
        <div class="board"></div>
      </div>
    `;
    this.borderEl = this.container.querySelector('.board');

    for (let i = 0; i < this.boardSize ** 2; i += 1) {
      const cellEl = document.createElement('div');
      cellEl.classList.add('cell');
      this.borderEl.appendChild(cellEl);
    }
    this.cells = [...this.borderEl.children];
  }

  redrawPositions(position) {
    for (const cell of this.cells) {
      cell.classList.remove('.goblin');
    }

    const cellEl = this.borderEl.children[position];
    const goblinEl = document.createElement('div');
    goblinEl.classList.add('goblin');
    cellEl.appendChild(goblinEl);
  }
}
