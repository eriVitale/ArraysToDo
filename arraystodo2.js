//Reverse
//Given a numerical array, reverse the order of values, in-place. 
//The reversed array should have the same length, with existing elements 
//moved to other indices so that order of elements is reversed. 
//Working 'in-place' means that you cannot use a second array – 
//move values within the array that you are given. 
//As always, do not use built-in array functions such as splice().
function reverse(arr){
    for(var i=0; i<arr.length/2;i++){
        var temp=arr[i];
        arr[i]=arr[arr.length-i-1];
        arr[arr.length-i-1]=temp;
    }
    return arr;
}
console.log(reverse([1, 2, 3, 4, 5]))


//Rotate
//Implement rotateArr(arr, shiftBy) that accepts array and offset. 
//Shift arr's values to the right by that amount. 
//'Wrap-around' any values that shift off array's end to the other side, so that no data is lost. 
//Operate in-place: given ([1,2,3],1), change the array to [3,1,2]. Don't use built-in functions.
//Second: allow negative shiftBy (shift L, not R).
//Third: minimize memory usage. With no new array, handle arrays/shiftBys in the millions.
//Fourth: minimize the touches of each element.
function rotateArr(arr, shiftBy){
    arrcopy=[];
    for (var i=0; i<arr.length; i++){
      arrcopy[i]=arr[i];
    }
    for (var i=0; i+shiftBy<arr.length ;i++){
      arr[i+shiftBy]=arrcopy[i];
    }
    for (var i=0; i<shiftBy; i++){
      arr[i]=arrcopy[arr.length-shiftBy+i];
    }
    return (arr)
  }
  
  console.log(rotateArr([1,2,3,4,5,6],2));
  console.log(rotateArr([1,4,5,2,1],3));

//Filter Range
//Given arr and values min and max, retain only the array values between min and max.
function filterRange(arr,min,max){
    for (var i=0;i<arr.length;i++){
      var temp=arr[0];
      for (var j=0; j<arr.length-1;j++){
        arr[j]=arr[j+1];
      }
      arr[arr.length-1]=temp;
      if (temp<=min || temp>=max){
        arr.pop();
        i--;
      }
    }
    return (arr);
    }
  
  console.log(filterRange([1,2,3,4,5,6],2,5));
  
  console.log(filterRange([5,6,2,3,1,-7,5],2,6))



//Concat
function concatRep(arr1,arr2){
    arr=[];
    for (var i=0; i<arr1.length; i++){
      arr[i]=arr1[i];
    }
    for (var j=0;j<arr2.length;j++){
      arr[arr.length]=arr2[j];
    }
    return arr;
  }
  
  console.log(concatRep([1,5,6],[4,7,8]))


