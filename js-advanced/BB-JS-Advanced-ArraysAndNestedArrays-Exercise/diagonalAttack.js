function diagonalAttack(givenArray) {
    let principalDiagonal = [];
    let secondaryDiagonal = [];

    let matrix = [];

    givenArray.forEach(r => {
        matrix.push(r.split(' '));
    })

    for (let r = 0; r < matrix.length; r++) {
        for (let c = 0; c < matrix[r].length; c++) {
            if (r == c) {
                principalDiagonal.push(matrix[r][c]);
            }
            if ((r + c) == matrix.length - 1) {
                secondaryDiagonal.push(matrix[r][c]);
            }
        }
    }

    let principalSum = principalDiagonal.map(e => Number(e)).reduce((a, b) => a + b, 0);
    let secondarySum = secondaryDiagonal.map(e => Number(e)).reduce((a, b) => a + b, 0);

    if (principalSum !== secondarySum) {
        givenArray.forEach(r => {
            console.log(r);
        })
    } else {
        for (let r = 0; r < matrix.length; r++) {
            for (let c = 0; c < matrix[r].length; c++) {
                if (r == c) {
                    continue;
                }
                if ((r + c) == matrix.length - 1) {
                    continue;
                }
                matrix[r][c] = principalSum;
            }
        }

        matrix.forEach(r => {
            console.log(r.join(' '));
        })
    }
    
}

// diagonalAttack(
//     [
//         '5 3 12 3 1',
//         '11 4 23 2 5',
//         '101 12 3 21 10',
//         '1 4 5 2 2',
//         '5 22 33 11 1'
//     ])

diagonalAttack(
    ['1 1 1',
'1 1 1',
'1 1 0']
)