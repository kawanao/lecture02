function sigmoid (a,x) {
  var minusax = multiply(multiply(a,x),-1);
  return devide(1,add(1,Math.exp(minusax)));
}
