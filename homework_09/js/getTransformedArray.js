function getTransformedArray(arr,callfunc){
	let newArr = [];
forEach(arr, function(elem) {
newArr.push(callfunc (elem))
});
return newArr;
}
