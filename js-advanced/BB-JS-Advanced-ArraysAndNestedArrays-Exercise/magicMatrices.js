function magicMatrices(givenMatrix) {

    let magic = givenMatrix[0].reduce((a, b) => a + b, 0);

    let rowMagic = givenMatrix.every(row => row.reduce((a, b) => a + b, 0) === magic);

    let columnSums = givenMatrix.reduce((r, a) => {
        a.forEach((b, i) => {
            r[i] = (r[i] || 0) + b;
        });
        return r;
    }, [])

    let columnMagic = columnSums.every(element => element === magic);

    if (rowMagic) {
        console.log(columnMagic);
    } else {
        console.log(rowMagic);
    }
}

magicMatrices([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]
)

magicMatrices([[11, 32, 45],
[21, 0, 1],
[21, 1, 1]]
)