function printSquare(a) {
  let length = a % 2 !== 0 ? a : a - 1;
  let count = (2 * a - 4) / 2;
  let middle = Math.ceil(length / 2);
  for (let i = 1; i <= length; i++) {
    if (i == 1 || i == middle || i == length) {
      console.log(`*${"-".repeat(count)}+${"-".repeat(count)}*`);
    } else {
      console.log(`|${" ".repeat(count)}|${" ".repeat(count)}|`);
    }
  }
}

printSquare(10);
