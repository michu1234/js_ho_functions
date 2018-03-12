let tablica = [1,2,3,33,3,4,5,0, false, "", "test"];

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
   let el = arr.slice(-1)[0];
   return el;
}

// remove falsy values from array

function removeFalse(arr){
    return arr.filter(v=>v);
}

console.log(removeFalse(tablica)); 

