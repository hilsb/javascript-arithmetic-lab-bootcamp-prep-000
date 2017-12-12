function add(x, y){
  var z = x + y;
    return z;
}

function subtract(x, y){
  var z = x - y;
    return z;
}

function multiply(x, y){
  var z = x * y;
    return z;
}

function divide(x, y){
  var z = x / y;
    return z;
}

function dec(n){
  var a = n;
    return a -+ 1;
}

function inc(n){
  var a = n;
    return a += 1;
}

function makeInt(n){
  parseInt(n, 0);
    return n;
}

function preserveDecimal(n){
  parseInt('2.222', 10);
    return n;
}

function preserveDecimal(n){
  parseFloat('2.222');
    return n;
}
