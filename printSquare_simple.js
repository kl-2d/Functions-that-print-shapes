function printSquare(a) {
  for (let i = 0; i < a; i++) {
    let b = "";
    for (let j = 0; j < a; j++) {
      if (j <= a / 2) {
        b += " *";
      }
      if (j >= a / 2) {
        b += " -";
      }
    }
    console.log(b);
  }
}

printSquare(10);
