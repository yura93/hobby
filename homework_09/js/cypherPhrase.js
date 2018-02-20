function cypherPhrase(obj, str) {
    let strArr = str.split('');
    let finshedArr = getTransformedArray(strArr, function(letter) {
        return letter = obj[letter] || letter;
    });
    return finshedArr.join("");
}