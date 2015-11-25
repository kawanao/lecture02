function ex02_5 (a,b,c) {
 var d = Math.max(a,b);
 var e = Math.max(b,c);
 return multiply(multiply(Math.max(d,e),Math.max(d,e)),Math.PI);
}
