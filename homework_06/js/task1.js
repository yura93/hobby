var sideA = prompt("input one length of sides");
var sideB = prompt("input one length of sides");
var sideC = prompt("input one length of sides");
var p = (sideA + sideB + sideC)/2;
var square = Math.sqrt(p*(p-sideA)*(p-sideB)*(p-sideC));
var type ;

if(sideA == sideB && sideB == sideC){
	type = "Equilateral"}

else if(sideA == sideB || sideB == sideC || sideA ==sideC){
	type = "Isosceles"
}
else if ( Math.pow(sideA, 2) == (Math.pow(sideB, 2) + Math.pow(sideC, 2))
	||Math.pow(sideB, 2) == (Math.pow(sideA, 2) + Math.pow(sideC, 2))
	||Math.pow(sideC, 2) == (Math.pow(sideB, 2) + Math.pow(sideA, 2))){
	type = "Right triangle"
}


else{

  type = "Scalene"

}
if (sideA < 0 || sideB < 0 ||sideC < 0){
	console.log("Incorrect data")}
	else{
console.log("Type of triangle is"+" "+ type +" "+"and square is"+" " +square.toFixed(2))}




