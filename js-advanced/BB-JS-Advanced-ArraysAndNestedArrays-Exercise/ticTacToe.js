function ticTacToe(coordinates) {
    let gameBoard = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ]

    let isFirstPlayer = true;

    for (let coordinate of coordinates) {

        let [row, column] = coordinate.split(' ');

        let marker = isFirstPlayer ? 'X' : 'O';
        
        if (gameBoard[row][column]) {
            console.log('This place is already taken. Please choose another!');
            continue;
        }

        gameBoard[row][column] = marker;

        if (!checkFreeSpace(gameBoard)) {
            console.log('The game ended! Nobody wins :(');
            printBoard(gameBoard);
            return;
        }

        if (checkWin(gameBoard, marker)) {
            console.log(`Player ${marker} wins!`);
            printBoard(gameBoard);
            return;
        }

        isFirstPlayer = !isFirstPlayer;
        
    }

    function printBoard(gameBoard) {
        return gameBoard.forEach(r => {
            console.log(r.join('\t'));
        });
    }

    function checkFreeSpace(gameBoard) {
        for (let r = 0; r < gameBoard.length; r++) {
            for (let c = 0; c < gameBoard[r].length; c++) {
                if (!gameBoard[r][c]) {
                    return true;
                }
            }
        }
        return false;
    }

    function checkWin(gameBoard, marker) {
        for (let r = 0; r < gameBoard.length; r++) {
            if (gameBoard[r][0] === marker &&
                gameBoard[r][1] === marker &&
                gameBoard[r][2] === marker) {
                    return true;
                }
        }
        for (let c = 0; c < gameBoard.length; c++) {
            if (gameBoard[0][c] === marker &&
                gameBoard[1][c] === marker &&
                gameBoard[2][c] === marker) {
                    return true;
                }
        }
        for (let r = 0; r < gameBoard.length; r++) {
            if (gameBoard[0][0] === marker &&
                gameBoard[1][1] === marker &&
                gameBoard[2][2] === marker) {
                    return true;
                } else if (
                    gameBoard[0][2] === marker &&
                    gameBoard[1][1] === marker &&
                    gameBoard[2][0] === marker
                ) {
                    return true;
                }
        }
    }
}


// ticTacToe(
//     ["0 1",
//  "0 0",
//  "0 2", 
//  "2 0",
//  "1 0",
//  "1 1",
//  "1 2",
//  "2 2",
//  "2 1",
//  "0 0"]
// )

// ticTacToe(
//     ["0 0",
//  "0 0",
//  "1 1",
//  "0 1",
//  "1 2",
//  "0 2",
//  "2 2",
//  "1 2",
//  "2 2",
//  "2 1"]
// )

ticTacToe(
    ["0 1",
 "0 0",
 "0 2",
 "2 0",
 "1 0",
 "1 2",
 "1 1",
 "2 1",
 "2 2",
 "0 0"]

)