let tablica = [31,2,3,33,3,4,5,0, false, "", "test"];
let tablica2 = [{key: 12}, {key: "abc"}, {key: false}];

// Remove duplicates from array

function duplicates(arr){
    return arr.filter(function(elem,pos){
        return arr.indexOf(elem) == pos;
    });
}

// Biggest number in array

function maxNum(arr){
    return Math.max.apply(null,arr)
}

// Last element of array

function lastEl(arr){
   return arr.slice(-1)[0];
}

// first element of array

function firstEl(arr){
    return arr.slice(0,1)
}

// first element and the rest

function firstNrest(arr){
    [first, ...rest] = arr;
    return `${first} | ${rest}`;
}

// remove falsy values from array

function removeFalse(arr){
    return arr.filter(v=>v);
}

// remove element from arr

function removeEl(arr, el){
    return arr.filter(n=>n!==el);
}

// print values

function printValues(arr) {
    let vals = [];
    for (let a of arr){
        vals.push(a.key);
    }
    return vals;
}

// print keys

function printKeys(arr){
 
}

console.log(Array.from({length: 12}, (a,i) => i)); 

