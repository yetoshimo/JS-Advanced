function orbit([column, row, x, y]) {

    // let matrix = Array(row).fill(Array(column));
    let matrix = [];

    for (let r = 0; r < row; r++) {
        matrix.push([]);
        for (let c = 0; c < column; c++) {
            matrix[r].push(false);
        }
    }

    let star = 1;

    matrix[x][y] = star;

    for (let r = 0; r < row; r++) {
        for (let c = 0; c < column; c++) {
            if (!matrix[r][c]) {
                matrix[r][c] = Math.max(Math.abs(r - x), Math.abs(c - y)) + 1;
            }
        }
    }

    matrix.forEach(row => {
        console.log(row.join(' '));
    })

}

// orbit([4, 4, 0, 0])

// orbit([5, 5, 2, 2])

// orbit([3, 3, 2, 2])

// orbit([0,0,0,0])