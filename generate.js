
let randnum =[];


function myfunction() {
   
    var size = Number(document.getElementById('input-size').value);

    var tr = String(document.getElementById('input-array').value);

    var str = "jhkj22ejej33";
            var matches = str.match(/(\d+)/);
              
            if (matches) {
                console.log(matches)
            }

    randnum = new Array(size)

    for (let i = 0; i < size; i++) {
        let rand = Math.random() * 100;
        randnum[i] = Math.floor(rand);
      }
      console.log(randnum);

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
  console.log(end-start)

  var time = (end-start)/1000;

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

  timeToggle(time)
}

function quickSort2(){
  let arr = randnum
  if (arr.length==0) {
    alert("No Input values")
    return;
  }
  var start = performance.now();
  
  quickSort2(arr)

  var end = performance.now();
  var time = end - start;

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
  
  timeToggle(time)
}

function timeToggle(time){
  document.getElementById("time").style.visibility="visible";
  document.getElementById("time-label").style.display="block";
  document.getElementById("time").innerHTML = time+" seconds";
}

