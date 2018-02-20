function decypherPhrase(obj, str) {
    let newObj = {};
    for (var key in obj) {
        newObj[obj[key]] = key;
    }
    return cypherPhrase(newObj, str);
}