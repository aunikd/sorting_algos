
let randnum =[];


function myfunction() {
   
    var size = Number(document.getElementById('input-size').value);
    randnum = new Array(size)

    for (let i = 0; i < size; i++) {
        let rand = Math.random() * 100;
        randnum[i] = Math.floor(rand);
      }
      if(size!=0) {
        document.getElementById("input").style.visibility="visible";
        document.getElementById("input-label").style.display="block";
        document.getElementById("input").innerHTML = randnum;
      }
      if(size==0)  {
        alert("Input Empty");
      }
        
}

function bubbleSort(){
  var arr = randnum
  if (arr.length==0) {
    alert("No Input values")
    return;
  }
  //var start = new Date().getTime();
  var start = performance.now();
  bubbleSortFunc(arr)

  //var end = new Date().getTime();
  var end = performance.now();
  var time = (end-start)/1000;

  document.getElementById("algo").style.visibility="visible";
  document.getElementById("algo-label").style.display="block";
  document.getElementById("algo").innerHTML = "Bubble Sort";

  timeToggle(time)
}

function selectionSort(){
  
  let arr = randnum
  if (arr.length==0) {
    alert("No Input values")
    return;
  }
  var start = performance.now();

  selectionSortFunc(arr)

  var end = performance.now();
  var time = end - start;  

  document.getElementById("algo").style.visibility="visible";
  document.getElementById("algo-label").style.display="block";
  document.getElementById("algo").innerHTML = "Selection Sort";
  timeToggle(time)
}

function insertionSort(){
  let arr = randnum
  if (arr.length==0) {
    alert("No Input values")
    return;
  }
  var start = performance.now();
  
  insertionSortFunc(arr)

  var end = performance.now();
  var time = end - start;

  document.getElementById("algo").style.visibility="visible";
  document.getElementById("algo-label").style.display="block";
  document.getElementById("algo").innerHTML = "Insertion Sort";
  timeToggle(time)
}

function quickSort2(){
  let arr = randnum
  if (arr.length==0) {
    alert("No Input values")
    return;
  }
  var start = performance.now();
  
  quickSort2Func(arr, 0, arr.length - 1)

  var end = performance.now();
  var time = end - start;

  document.getElementById("algo").style.visibility="visible";
  document.getElementById("algo-label").style.display="block";
  document.getElementById("algo").innerHTML = "Three Median Quick-Sort";
  timeToggle(time)
}

function quickSort(){
  let arr = randnum
  if (arr.length==0) {
    alert("No Input values")
    return;
  }
  var start = performance.now();
  
  quickSortFunc(arr, 0, arr.length - 1)

  var end = performance.now();
  var time = end - start;

  document.getElementById("algo").style.visibility="visible";
  document.getElementById("algo-label").style.display="block";
  document.getElementById("algo").innerHTML = "Quick-Sort(Last Element Pivot)";
  timeToggle(time)
}

function heapSort(){
  let arr = randnum
  if (arr.length==0) {
    alert("No Input values")
    return;
  }
  var start = performance.now();
  
  heapSortFunc(arr)

  var end = performance.now();
  var time = end - start;

  document.getElementById("algo").style.visibility="visible";
  document.getElementById("algo-label").style.display="block";
  document.getElementById("algo").innerHTML = "Heap Sort";
  timeToggle(time)
}

function mergeSort(){
  let arr = randnum
  if (arr.length==0) {
    alert("No Input values")
    return;
  }
  var start = performance.now();
  
  mergeSortFunc(arr, 0, arr.length - 1)

  var end = performance.now();
  var time = end - start;
  
  document.getElementById("algo").style.visibility="visible";
  document.getElementById("algo-label").style.display="block";
  document.getElementById("algo").innerHTML = "Merge Sort";
  timeToggle(time)
}

function compareAlgos(){
  if (randnum.length==0) {
    alert("No Input values")
    return;
  }

  let start;
  let end;
  let time;

  let perfTimes = []

  let immutable = randnum.slice(0)
  let immutable2 = randnum.slice(0)
  let immutable3 = randnum.slice(0)
  let immutable4 = randnum.slice(0)
  let immutable5 = randnum.slice(0)
  let immutable6 = randnum.slice(0)
  let immutable7 = randnum.slice(0)


  let arr = randnum
  start = performance.now();
  bubbleSortFunc(arr)
  end = performance.now();
  time = (end-start)/1000;
  perfTimes.push(time)
  randnum = immutable;
  arr = randnum



  start = performance.now();
  selectionSortFunc(arr)
  end = performance.now();
  time = (end-start)/1000;
  perfTimes.push(time)
  randnum = immutable2;
  arr = randnum;



  start = performance.now();
  insertionSortFunc(arr)
  end = performance.now();
  time = (end-start)/1000;
  perfTimes.push(time)
  randnum = immutable3;
  arr = randnum;



  start = performance.now();
  quickSortFunc(arr, 0, arr.length - 1)
  end = performance.now();
  time = (end-start)/1000;
  perfTimes.push(time)
  randnum = immutable4;
  arr = randnum;



  start = performance.now();
  quickSort2Func(arr, 0, arr.length - 1)
  end = performance.now();
  time = (end-start)/1000;
  perfTimes.push(time)
  randnum = immutable5;
  arr = randnum;


  
  start = performance.now();
  heapSortFunc(arr)
  end = performance.now();
  time = (end-start)/1000;
  perfTimes.push(time)
  randnum = immutable6;
  arr = randnum;

  
  start = performance.now();
  mergeSortFunc(arr, 0, arr.length - 1)
  end = performance.now();
  time = (end-start)/1000;
  perfTimes.push(time)
  randnum = immutable7;
  arr = randnum;



  document.getElementById("compare").style.visibility="visible";
  document.getElementById("compare-label").style.display="block";
  document.getElementById("compare").innerHTML = "Bubble Sort - "+perfTimes[0]+" seconds"+"<br>Selection Sort - "+perfTimes[1]+" seconds"+"<br>Insertion Sort - "+perfTimes[2]+" seconds"+"<br>Quick Sort - "+perfTimes[3]+" seconds"+"<br>Quick Sort 3 Median - "+perfTimes[4]+" seconds"+"<br>Heap Sort - "+perfTimes[5]+" seconds"+"<br>Merge Sort - "+perfTimes[6]+" seconds";

}

function timeToggle(time){
  document.getElementById("time").style.visibility="visible";
  document.getElementById("time-label").style.display="block";
  document.getElementById("time").innerHTML = time/1000+" seconds";
}

