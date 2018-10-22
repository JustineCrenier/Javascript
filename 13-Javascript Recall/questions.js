 var selectElementsStartingWithA = function(array) {
    for(let i=0; i<array.length; i++){
        if(array[i].charAt(0) != "A"){
            array.splice(i,1);
        }
    }
    return array;
}

var selectElementsStartingWithVowel = function(array) {
    const vowels = ["a", "e", "i", "o", "u", "y"];
    let flag = 0;

    for(let i=array.length-1; i>-1; i--){
        flag = 0;
        for(let j=0; j<vowels.length; j++){
            if(array[i].charAt(0) == vowels[j]){
                flag =1;
            }
        }
        if(flag != 1){
            array.splice(i,1);
        }
    }
    return array;
}

var removeNullElements = function(array) {
    for(let i=array.length-1; i>-1; i--){
        if(array[i] == null){
            array.splice(i,1);
        }
    }
    return array;
}

var removeNullAndFalseElements = function(array) {
    for(let i=array.length-1; i>-1; i--){
        if(array[i] === null || array[i] === false){
            array.splice(i,1);
        }
    }
    return array;
}

var reverseWordsInArray = function(array) {
    for(let i=0; i<array.length; i++){
        array[i] = array[i].split('').reverse().join('');
    }
    return array;
}

var everyPossiblePair = function(array) {
    let retour = []
    function pair(arr) {
        arr.sort();
        let res = [],
        l = arr.length;
        for(let i=0; i<l; ++i)
            for(let j=i+1; j<l; ++j)
                res.push([arr[i], arr[j]]);
        return res;
    }
 
    return pair(array)    
}

var allElementsExceptFirstThree = function(array) {
    for (let i=0; i<3; i++){
        array.shift();
    }
    return array;
}

var addElementToBeginning = function(array, element) {
    let result = array.unshift(element);
    return array;
}

var sortByLastLetter = function(array) {
    for(let i=0; i<array.length; i++){
        array[i] = array[i].split('').reverse();
    }
    array.sort();
    for(let i=0; i<array.length; i++){
        array[i] = array[i].reverse().join('');
    }
    return array;
}

var getFirstHalf = function(string) {
    let i = string.length;
    if(i%2 == 0){
        let result = string.slice(0,i/2);
        return result;
    }else{
        let j= i/2;
        let result = string.slice(0, j+1);
        return result;
    }
}

var makeNegative = function(number) {
    if (number < 0){
        return number;  
    }else{
        number = -number;
        return number;
    }
}

var numberOfPalindromes = function(array) {
    let arrayCopy = array.slice();
    let count = 0;
    for(let i=0; i<arrayCopy.length; i++){
        arrayCopy[i] = arrayCopy[i].split('').reverse().join('');
        if(array[i] == arrayCopy[i]){
            count++;
        }
    }
    return count;
}

var shortestWord = function(array) {
    for(let i=0; i<array.length; i++){
        if(i+1 <= array.length){
            if(array[i].length < array[i+1].length){
                let short = array[i];
                return short
            }
        }
    }
}

var longestWord = function(array) {
    for(let i=0; i<array.length; i++){
        if(i+1 <= array.length){
            if(array[i].length > array[i+1].length){
                let long = array[i];
                return long
            }
        }
    }
}

var sumNumbers = function(array) {
    var total = array.reduce((a, b)=> a + b,0);
    return total;
}

var repeatElements = function(array) {
    let arrayCopy = array.slice();
    array = array.concat(arrayCopy);
    return array;
}

var stringToNumber = function(string) {
    let num = new Number(string);
    return num;
}

var calculateAverage = function(array) {
    var total = array.reduce((a, b)=> a + b,0);
    return total/array.length;
}

var getElementsUntilGreaterThanFive = function(array) {
    let result = array.slice(0,6);
    return result;
}

var convertArrayToObject = function(array) {
    let object = {};
    for(let i=0; i<array.length; i+=2){
        object[array[i]] = array[i+1];
    }
    return object;
}

var getAllLetters = function(array) {
    let newArray = [];
    for(let i=0; i<array.length; i++){
      newArray.concat(array[i].split(''));
    }
    return newArray;
}

var swapKeysAndValues = function(object) {
    let result = {};
    for(let key in object){
        result[object[key]] = key;
    }
    return result;
}

var sumKeysAndValues = function(object) {
    let result = 0;
    for(let key in object){
        result += Number(object[key]) + Number(key);
    }
    return result;
}

var removeCapitals = function(string) {
    let newString = string.replace(/[A-Z]/g,'');
    return newString;
}

var roundUp = function(number) {
    let newNumber =  Math.ceil(number);
    return newNumber;
}

var formatDateNicely = function(date) {
    let verif = (element) => {
        if (element.toString().length == 1) {
            return `0${element}`
        } else {
            return `${element}`
        }
    }
    
    let day = verif(date.getDay()+1);
    let month = verif(date.getMonth()+1);
    let year = date.getFullYear();

    return `${day}/${month}/${year}`
}

var getDomainName = function(string) {
    let a = string.lastIndexOf('@');
    let longueur = string.length -4;
    let result = string.substring(a+1, longueur);
    return result;
}

var titleize = function(string) {
    String.prototype.capitalize = function() {
        return this.charAt(0).toUpperCase() + this.slice(1);
    }

    String.prototype.titleize = function() {
        let string_array = this.split(' ');
        string_array = string_array.map(function(str) {
            return str.capitalize(); 
        });
    
        return string_array.join(' ');
    }

    let result = string.titleize();
    return result;
}

var checkForSpecialCharacters = function(string) {
    const regex = /[@#\$%\^\&*\)\(+=._-]/;
    if(string.match(regex)){
        return true;
    }else{
        return false;
    }
}

var squareRoot = function(number) {
    let newNumber = Math.sqrt(number);
    return newNumber;
}

var factorial = function(number) {
    let result = 1;
    for(let i=1; i<=number; i++){
        result *= i;
    }
    return result;
}

var findAnagrams = function(string) {
    if (string.length < 2) {
        return [string];
    } else {
      var allAnswers = [];
      for (let i = 0; i < string.length; i++) {
        let letter = string[i];
        let shorterWord = string.substr(0, i) + string.substr(i + 1, string.length - 1);
        let shortwordArray = findAnagrams(shorterWord);
        for (var j = 0; j < shortwordArray.length; j++) {
          allAnswers.push(letter + shortwordArray[j]);
        }
      }
      return allAnswers;
  }
}

var convertToCelsius = function(number) {
    let celsius = (number - 32)/(9/5);
    return Math.ceil(celsius);
} 

var letterPosition = function(array) {
    let alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    for(let i=0; i<array.length; i++){
        array[i] = array[i].toUpperCase();
        for(let j=0; j<alphabet.length;j++){
            if(array[i] == alphabet[j]){
                array[i]= j+1;
            }
        }
    }
    return array;
}
