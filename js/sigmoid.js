function sigmoid (a,x) {
  var a = multiply(a, -1);
  var x = multiply(x, a);
  return devide(1,add(1,Math.exp(x)));
}
