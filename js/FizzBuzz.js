for(var i = 0; i <= 100; i++){
    if(i%3 === 0 && i !== 0){
        if(i%5 === 0 && i !== 0){
            console.log('FizzBuzz');
        } else {
            console.log('Fizz')
        }
    } else if(i%5 === 0 && i !== 0){
        console.log('Buzz');
    } else {
        console.log(i);
    }
}

// Array
var names = [];
document.getElementById('names').innerHTML = names;
function array() {
    names.push(document.getElementById('names').value);
    names.sort();
    document.getElementById('namesArray').innerHTML = names;
}
