function bubbleSortFunc(arr) {
 
 for(var i = 0; i < arr.length; i++){
     
    // Last i elements are already in place  
    for(var j = 0; j < ( arr.length - i -1 ); j++){
        
      // Checking if the item at present iteration 
      // is greater than the next iteration
      if(arr[j] > arr[j+1]){
          
        // If the condition is true then swap them
        var temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j+1] = temp
      }
    }
  }
  outputToggle(arr)
}

//mergesort

// l is for left index and r is
// right index of the sub-array
// of arr to be sorted */
function mergeSortFunc(arr,l, r){
  if(l>=r){
      return;//returns recursively
  }
  var m =l+ parseInt((r-l)/2);
  mergeSortFunc(arr,l,m);
  mergeSortFunc(arr,m+1,r);
  merge(arr,l,m,r);
  
  outputToggle(arr)
}

function merge(arr, l, m, r)
{
    var n1 = m - l + 1;
    var n2 = r - m;
  
    // Create temp arrays
    var L = new Array(n1); 
    var R = new Array(n2);
  
    // Copy data to temp arrays L[] and R[]
    for (var i = 0; i < n1; i++)
        L[i] = arr[l + i];
    for (var j = 0; j < n2; j++)
        R[j] = arr[m + 1 + j];
  
    // Merge the temp arrays back into arr[l..r]
  
    // Initial index of first subarray
    var i = 0;
  
    // Initial index of second subarray
    var j = 0;
  
    // Initial index of merged subarray
    var k = l;
  
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        }
        else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }
  
    // Copy the remaining elements of
    // L[], if there are any
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }
  
    // Copy the remaining elements of
    // R[], if there are any
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}

//mergesort end

function heapSortFunc(arr) {
    var n = arr.length;
 
    // Build heap (rearrange array)
    for (var i = Math.floor(n / 2) - 1; i >= 0; i--)
        heapify(arr, n, i);

    // One by one extract an element from heap
    for (var i = n - 1; i > 0; i--) {
        // Move current root to end
        var temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;

        // call max heapify on the reduced heap
        heapify(arr, i, 0);
    }
}



    // To heapify a subtree rooted with node i which is
    // an index in arr[]. n is size of heap
function heapify(arr, n, i)
{
        var largest = i; // Initialize largest as root
        var l = 2 * i + 1; // left = 2*i + 1
        var r = 2 * i + 2; // right = 2*i + 2
 
        // If left child is larger than root
        if (l < n && arr[l] > arr[largest])
            largest = l;
 
        // If right child is larger than largest so far
        if (r < n && arr[r] > arr[largest])
            largest = r;
 
        // If largest is not root
        if (largest != i) {
            var swap = arr[i];
            arr[i] = arr[largest];
            arr[largest] = swap;
 
            // Recursively heapify the affected sub-tree
            heapify(arr, n, largest);
        }
    outputToggle(arr)}

function insertionSortFunc(arr) 
{ 
    let n=arr.length
    let i, key, j; 
    for (i = 1; i < n; i++)
    { 
        key = arr[i]; 
        j = i - 1; 
   
        /* Move elements of arr[0..i-1], that are 
        greater than key, to one position ahead 
        of their current position */
        while (j >= 0 && arr[j] > key)
        { 
            arr[j + 1] = arr[j]; 
            j = j - 1; 
        } 
        arr[j + 1] = key; 
    } 
outputToggle(arr)} 

function selectionSortFunc(arr){
    var i, j, min_idx;
    let n = arr.length
    // One by one move boundary of unsorted subarray
    for (i = 0; i < n-1; i++)
    {
        // Find the minimum element in unsorted array
        min_idx = i;
        for (j = i + 1; j < n; j++)
        if (arr[j] < arr[min_idx])
            min_idx = j;
 
        // Swap the found minimum element with the first element
        swap(arr,min_idx, i);
    }
outputToggle(arr)}

function swap(arr,i, j)
{
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function quickSortFunc(arr, low, high){
    if (low < high) 
    {
          
        // pi is partitioning index, arr[p]
        // is now at right place 
        var pi = partition(arr, low, high)
  
        // Separately sort elements before
        // partition and after partition
        quickSortFunc(arr, low, pi - 1)
        quickSortFunc(arr, pi + 1, high)
    }
outputToggle(arr)
}

function partition(arr, low, high)
{
      
    // pivot
    var pivot = arr[high]
    var j
    // Index of smaller element and
    // indicates the right position
    // of pivot found so far
    var i = (low - 1)
  
    for(j = low; j <= high - 1; j++)
    {
          
        // If current element is smaller 
        // than the pivot
        if (arr[j] < pivot) 
        {
              
            // Increment index of 
            // smaller element
            i++; 
            swap(arr, i, j);
        }
    }
    swap(arr, i + 1, high);
    return (i + 1);
}

function outputToggle(arr){

    document.getElementById("output").style.visibility="visible";
    document.getElementById("output-label").style.display="block";
    document.getElementById('output').innerHTML = arr;
}