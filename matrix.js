//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(matrixString) {
    this.matrixRows = this.setMatrixRows(matrixString);
    this.matrixColumns = this.setMatrixColumns();
  }


  get rows() {
    return this.matrixRows;
  }

  get columns() {
    return this.matrixColumns;
  }

  setMatrixRows(matrixString) {
    // split input matrix string at new line
    const matrixLines = matrixString.split("\n");
    const matrix={};
    // split each line of matrix row into individual number for form an array
    for (let i=0; i < matrixLines.length; i++) {
      matrix[i] = matrixLines[i].split(" ").map(num => parseInt(num));
    }
    return matrix;
  }

  setMatrixColumns() {
    const matrix={};
    for (let i=0; i in this.matrixRows; i++) {
      // for each rows of the number, push each number element into its column
      for (let j=0; j < this.matrixRows[i].length; j++) {
        if (j in matrix) {
          matrix[j].push(this.matrixRows[i][j]);
        } else {
          matrix[j] = [this.matrixRows[i][j]];
        }
      }
    }
    return matrix;
  }
}
