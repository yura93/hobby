  let str = "";
  var n = +prompt("enter natural number from 0 to 20 inclusive");
  if (Number.isInteger(n) && n >0 && n <= 20){


  for(var i=1; i<=n; i++) {
    for(var j=1; j<=n-i; j++) {
      str += "   ";
    }
    for(var k=n-i+1; k<n+i; k++) {
      str += "[~]";
    }
    
   str += "\n";
  }
console.log(str);
}
else{
  console.log("Incorrect!");
}