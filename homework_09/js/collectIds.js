function collectIds(arr, callfunc) {
    let newArr = [];
    forEach(arr, function(elem) {
        if (callfunc(elem)) {
            newArr.push(arr[i].id)
        };
    });
    return newArr;
}