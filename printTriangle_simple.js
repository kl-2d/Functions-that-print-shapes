function printTriangle(a) {
  let b = "";
  let c = "";
  for (let i = 0; i < a; i++) {
    if (i <= a / 2) {
      b += " *";
      c += " -";

      console.log(b);
    }
    if (i >= a / 2) {
      c += " -";
      console.log(c);
    }
  }
}

printTriangle(10);
