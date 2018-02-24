 function debounce (fn,delay){
    let timeoutId;
    return function debounce(){
        if(timeoutId){
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(fn.bind(this),delay,arguments);
    }
}

let iterator = 0;

function increaseIteratorBy1() {
 iterator++;
 printIteratorValue();
}

function printIteratorValue() {
 console.log('Iterator value ', iterator);
}

var increaseIterator = debounce(increaseIteratorBy1, 1000);
