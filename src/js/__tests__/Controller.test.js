import Main from '../Main';
import Controller from '../Controller';

test('Должен успешно создаваться экземпляр класса', () => {
  const main = new Main(document.querySelector('.container'));
  expect(new Controller(main)).toEqual({
    board: {
      container: null, borderEl: null, boardSize: 4, cells: [],
    },
  });
});
