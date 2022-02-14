'use strict';

const errorDiv = document.querySelector('.error'),
      button = document.querySelector('.container_button'),
      resultDiv1 = document.querySelector('.time1'),
      resultDiv2 = document.querySelector('.time2');
      

let check,
    randArr = [],
    startTime,
    endTime;

let numCheck = (elem) => {
  if (isNaN(elem) == false && elem !== '') {
    console.log(elem + ' Good!');
    check = 1;
  } else {
    errorDiv.textContent = 'Нужно писать число!';
    errorDiv.style.display = 'block';
    check = 0;
  }
}
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
const arrCreate = (elem) => {
  let i = 0;
  while (i <= elem) {
    randArr.push(getRandomInt(9999));
    i++;
  }
}
const insertionSort = arr => { 

  for (let i = 1, l = arr.length; i < l; i++) {
    const current = arr[i];
    let j = i;
    
    while (j > 0 && arr[j - 1] > current) {
      arr[j] = arr[j - 1];
      j--;
    }        
    arr[j] = current;
    }    
  resultDiv1.textContent = 'insertionSort completed. Using ' + time1 + ' steps!';
  return arr;

};
function shellSort(arr) {
    let n = arr.length;

    for (let gap = Math.floor(n/2); gap > 0; gap = Math.floor(gap/2))	{

    for (let i = gap; i < n; i++)  {
        let temp = arr[i];
			
	let j;
	for (j = i; j >= gap && arr[j-gap] > temp; j-=gap)  {
            arr[j] = arr[j-gap];
	}

	arr[j] = temp;
        }
    }
  return arr;
}
button.addEventListener('click', event => {
  const n = document.querySelector('.container_input').value;
  randArr = [];

  errorDiv.style.display = 'none';
  numCheck(n);

  if (check) {
    arrCreate(n);

    console.log(randArr);

    startTime = performance.now();
    console.log(insertionSort(randArr));
    endTime = performance.now();
    resultDiv1.textContent = `InsertionSort completed in ${endTime - startTime} milliseconds`;

    startTime = performance.now();
    console.log(shellSort(randArr));
    endTime = performance.now();
    resultDiv2.textContent = `ShellSort completed in ${endTime - startTime} milliseconds`;

  }
})
