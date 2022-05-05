//Push Front
//Given an array and an additional value, 
//insert this value at the beginning of the array. 
//Do this without using any built-in array methods.

function pushFront(arr, val){
    for (var i=arr.length;i>0;i--){
        arr[i]=arr[i-1];
    }
    arr[0]=val;
    return arr;
}
console.log("Push Front: " + pushFront([2, 3, 4, 5],1))




//Pop Front
//Given an array, remove and return the value 
//at the beginning of the array.
// Do this without using any built-in array methods except pop().

function popFront(arr){
    arr[arr.length]=arr[0];
    for (var i=0;i<arr.length-1;i++){
        arr[i]=arr[i+1];
    }
    return arr.pop();
}
console.log("Pop Front: " +popFront([1,2,3,4,5]))



//Insert At
//Given an array, index, and additional value, 
//insert the value into array at given index. 
//Do this without using built-in array methods. 
//You can think of pushFront(arr,val) as equivalent 
//to insertAt(arr,0,val).
function insertAt(arr, index, val){
    for (var i=arr.length;i>index;i--){
        arr[i]=arr[i-1];
    }
    arr[index]=val;
    return arr;
}
console.log("Insert At: "+insertAt([1, 2, 4, 5],2,3))


//Remove At
//Given an array and an index into array, 
//remove and return the array value at that index. 
//Do this without using built-in array methods except pop(). 
//Think of popFront(arr) as equivalent to removeAt(arr,0).
function removeAt(arr,index){
    arr[arr.length]=arr[index];
    for (var i=index;i<arr.length-1;i++){
        arr[i]=arr[i+1];
    }
    return arr.pop();
}
console.log("Remove At: " +removeAt([1,2,7,3,4,5],2))


//Swap Pairs
//Swap positions of successive pairs of values of given array. 
//If length is odd, do not change the final element. 
//For [1,2,3,4], return [2,1,4,3]. 
//For example, change input ["Brendan",true,42] to [true,"Brendan",42]. 
//As with all array challenges, do this without using any built-in array methods.
function swapPairs(arr){
    if (arr.length%2==0){
        for (var i=0; i<arr.length; i+=2){
            temp=arr[i];
            arr[i]=arr[i+1];
            arr[i+1]=temp;
        }
    }
    else{
        for (var i=0; i<arr.length-1; i+=2){
            temp=arr[i];
            arr[i]=arr[i+1];
            arr[i+1]=temp;
        }
    }
    return arr;
}
console.log("Swap Pairs: "+swapPairs([1,2,3,4]));
console.log("Swap Pairs: "+swapPairs(['Brendan',true,42]));


//Remove Duplicates
//Sara is looking to hire an awesome web developer and has received applications
//from various sources. Her assistant alphabetized them but noticed some duplicates.
//Given a sorted array, remove duplicate values.
//Because array elements are already in order, all duplicate values will be grouped together.
//As with all these array challenges, do this without using any built-in array methods.

function removeDupes(sortedArr){
    for (var i=0; i<sortedArr.length;i++){
        if (sortedArr[i]==sortedArr[i+1]){
            removeAt(sortedArr,i);
            sortedArr.pop();
        }
    }
    return sortedArr
}

console.log(removeDupes(['Peter','Brian','Brian','Wendy']));
console.log(removeDupes(['Amanda','Amanda','Banana','Carly','Dog','Dog']));