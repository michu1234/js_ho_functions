let tablica = [31,2,3,33,3,4,5,0, false, "", "test"];

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

console.log(removeEl(tablica, 3)); 

