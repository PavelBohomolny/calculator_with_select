function calc() {
  let n1 = Math.round(document.getElementById("n1").value);
  let n2 = Math.round(document.getElementById("n2").value);

  let oper = document.getElementById("operators").value;

  if (oper === "+") {
    document.getElementById("result").value = n1 + n2;
  }

  if (oper === "-") {
    document.getElementById("result").value = n1 - n2;
  }

  if (oper === "/") {
    document.getElementById("result").value = n1 / n2;
  }

  if (oper === "x") {
    document.getElementById("result").value = n1 * n2;
  }
}
