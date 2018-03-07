let tablica = [1,2,3,33,3,4,5];

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

console.log(lastEl(tablica)); 

