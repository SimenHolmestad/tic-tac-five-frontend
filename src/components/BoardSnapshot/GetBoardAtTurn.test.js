import { getBoardAtTurn } from './BoardTransformFunctions';

describe('getBoardAtTurn tests', () => {
  test('Empty history returns empty board', () => {
    expect(getBoardAtTurn([], 0, 5, 5)).toEqual(
      [["-", "-", "-", "-", "-"],
       ["-", "-", "-", "-", "-"],
       ["-", "-", "-", "-", "-"],
       ["-", "-", "-", "-", "-"],
       ["-", "-", "-", "-", "-"]]
    );
  });

  test('Horizontal line at 5x5 board', () => {
    const history = [[2, 0, "X"],
                     [2, 1, "O"],
                     [2, 2, "X"],
                     [2, 3, "O"],
                     [2, 4, "X"]];

    expect(getBoardAtTurn(history, 5, 5, 5)).toEqual(
      [["-", "-", "-", "-", "-"],
       ["-", "-", "-", "-", "-"],
       ["X", "O", "X", "O", "X"],
       ["-", "-", "-", "-", "-"],
       ["-", "-", "-", "-", "-"]]
    );

    expect(getBoardAtTurn(history, 1, 5, 5)).toEqual(
      [["-", "-", "-", "-", "-"],
       ["-", "-", "-", "-", "-"],
       ["X", "-", "-", "-", "-"],
       ["-", "-", "-", "-", "-"],
       ["-", "-", "-", "-", "-"]]
    );

    expect(getBoardAtTurn(history, 3, 5, 5)).toEqual(
      [["-", "-", "-", "-", "-"],
       ["-", "-", "-", "-", "-"],
       ["X", "O", "X", "-", "-"],
       ["-", "-", "-", "-", "-"],
       ["-", "-", "-", "-", "-"]]
    );
  });

  test('Vertical line at 5x5 board', () => {
    const history = [[0, 2, "X"],
                     [1, 2, "O"],
                     [2, 2, "X"],
                     [3, 2, "O"],
                     [4, 2, "X"]];

    expect(getBoardAtTurn(history, 5, 5, 5)).toEqual(
      [["-", "-", "X", "-", "-"],
       ["-", "-", "O", "-", "-"],
       ["-", "-", "X", "-", "-"],
       ["-", "-", "O", "-", "-"],
       ["-", "-", "X", "-", "-"]]
    );

    expect(getBoardAtTurn(history, 1, 5, 5)).toEqual(
      [["-", "-", "X", "-", "-"],
       ["-", "-", "-", "-", "-"],
       ["-", "-", "-", "-", "-"],
       ["-", "-", "-", "-", "-"],
       ["-", "-", "-", "-", "-"]]
    );

    expect(getBoardAtTurn(history, 3, 5, 5)).toEqual(
      [["-", "-", "X", "-", "-"],
       ["-", "-", "O", "-", "-"],
       ["-", "-", "X", "-", "-"],
       ["-", "-", "-", "-", "-"],
       ["-", "-", "-", "-", "-"]]
    );
  });

  test('Diagonal line at 5x5 board', () => {
    const history = [[0, 0, "X"],
                     [1, 1, "O"],
                     [2, 2, "X"],
                     [3, 3, "O"],
                     [4, 4, "X"]];

    expect(getBoardAtTurn(history, 5, 5, 5)).toEqual(
      [["X", "-", "-", "-", "-"],
       ["-", "O", "-", "-", "-"],
       ["-", "-", "X", "-", "-"],
       ["-", "-", "-", "O", "-"],
       ["-", "-", "-", "-", "X"]]
    );

    expect(getBoardAtTurn(history, 1, 5, 5)).toEqual(
      [["X", "-", "-", "-", "-"],
       ["-", "-", "-", "-", "-"],
       ["-", "-", "-", "-", "-"],
       ["-", "-", "-", "-", "-"],
       ["-", "-", "-", "-", "-"]]
    );

    expect(getBoardAtTurn(history, 3, 5, 5)).toEqual(
      [["X", "-", "-", "-", "-"],
       ["-", "O", "-", "-", "-"],
       ["-", "-", "X", "-", "-"],
       ["-", "-", "-", "-", "-"],
       ["-", "-", "-", "-", "-"]]
    );
  });

  test('Random moves at 21x21 board', () => {
    const history = [[10, 10, 'X'],
                     [8, 10, 'O'],
                     [9, 6, 'X'],
                     [12, 7, 'O'],
                     [13, 18, 'X'],
                     [9, 16, 'O'],
                     [7, 18, 'X']]

    expect(getBoardAtTurn(history, 7, 21, 21)).toEqual(
      [['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
       ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
       ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
       ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
       ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
       ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
       ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
       ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'X', '-', '-'],
       ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'O', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
       ['-', '-', '-', '-', '-', '-', 'X', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'O', '-', '-', '-', '-'],
       ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'X', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
       ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
       ['-', '-', '-', '-', '-', '-', '-', 'O', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
       ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'X', '-', '-'],
       ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
       ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
       ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
       ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
       ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
       ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
       ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-']]
    );

    expect(getBoardAtTurn(history, 5, 21, 21)).toEqual(
      [['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
       ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
       ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
       ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
       ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
       ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
       ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
       ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
       ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'O', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
       ['-', '-', '-', '-', '-', '-', 'X', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
       ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'X', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
       ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
       ['-', '-', '-', '-', '-', '-', '-', 'O', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
       ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'X', '-', '-'],
       ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
       ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
       ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
       ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
       ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
       ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
       ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-']]
    );
  });
});
