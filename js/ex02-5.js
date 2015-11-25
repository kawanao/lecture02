function ex02_5 (a,b,c) {
 var a = Math.max(a,b);
 var b = Math.max(b,c);
 return multiply(multiply(Math.max(a,b),Math.max(a,b)),Math.PI);
}
