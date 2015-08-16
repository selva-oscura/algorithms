// Problem: report back location of all instances of n in an array
// console.log's provide chatty response for use; the return provides the actual data

var findNinArr = function(n, arr){
    var loc = [];
    console.log('n =', n+'; arr =', arr);
    for(var i = 0; i<arr.length;i++){
        if(arr[i]===n){
            loc.push(i);
        }
    }
    if(loc.length>0){
        console.log(n+' is at positions '+loc);
    }else{
        console.log('no', n, 'found');
    }
    return loc;
}

var array = [2,4,7,3,2,3,6,4,78,4];
console.log(findNinArr(2,array));
console.log(findNinArr(-3.14159,array));



// Problem: prune all instances of n from an array; retain array's order
// Constraint: keep excess memory useage to a minimum
// Naive solution would to be to create a new array and only copy the desired variables into the new array which would then be returned, but this gives us an O of n space complexity
// By pushing and shifting, the space complexity is constant (add i, initialLength, and increase the size of arr by no more than 1 and on a temporary basis....not a problem for JS though languages with set array lengths would want to use a temp variable rather than pushing than shifting.  Same overhead of space being used, just different language constraints)


function pruneNfromArray(n, arr){
    // can not simply use arr.length in the for loop because arr will be shrinking and the looped behaviour would stop before we were done; therefore we need to capture the intialLength of the array
    console.log('pruning', n, 'from array:', arr)
    var initialLength = arr.length;
    for(var i=0; i<initialLength; i++){
        if(arr[0]!=n){
            arr.push(arr[0]);
        }
        arr.shift();
    }
    return arr;
}

console.log(pruneNfromArray(3,array));
console.log(pruneNfromArray(2,array));
console.log(pruneNfromArray(432,array));
console.log(pruneNfromArray(4,array));
