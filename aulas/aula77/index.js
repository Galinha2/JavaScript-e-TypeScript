function generateCPF() {
    let arr = Array.from({ length: 9 }, (x) => Math.floor(Math.random() * 9));
    console.log(formatCPF(validateCPF(arr).join("")));
  }
   
  function validateCPF(arr, rec) {
    n =
      11 -
      (arr
        .map((e, i, a) => {
          return e * (a.length - --i);
        })
        .reduce((acm, e) => acm + e) %
        11);
    if (n > 9) {
      arr.push(0);
    } else {
      arr.push(n);
    }
    if (rec !== true) {
      validateCPF(arr, true);
    }
    return arr;
  }
   
  function formatCPF(s) {
    return (
      s.substring(0, 3) +
      "." +
      s.substring(3, 6) +
      "." +
      s.substring(6, 9) +
      "-" +
      s.substring(9, 11)
    );
  }
   
  generateCPF();