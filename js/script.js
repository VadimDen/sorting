'use strict';
/*
const errorDiv = document.querySelector('.error'),
      button = document.querySelector('.container_button'),
      resultDiv1 = document.querySelector('.time1'),
      resultDiv2 = document.querySelector('.time2');
      

let check,
    randArr = [],
    time1 = 0,
    time2 = 0,
    time3 = 0,
    milisec = 0;

function mili() {
  milisec++;
}

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
    randArr.push(getRandomInt(10000));
    i++;
  }
}
const insertionSort = arr => { 

  for (let i = 1, l = arr.length; i < l; i++) {
    const current = arr[i];
    let j = i;
    time1++;
    
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
		time2++;

    for (let i = gap; i < n; i += 1)  {
			time3++;
      
      let temp = arr[i];
			
			let j;
			for (j = i; j >= gap && arr[j-gap] > temp; j-=gap)  {
				arr[j] = arr[j-gap];
			}

			arr[j] = temp;
		}
	}

	resultDiv2.textContent = 'shellSort completed. Using ' + (time2 + time3) + ' steps!';
  return arr;
}
button.addEventListener('click', event => {
  time1 = 0;
  time2 = 0;
  time3 = 0;
  const n = document.querySelector('.container_input').value;
  randArr = [];

  errorDiv.style.display = 'none';
  numCheck(n);

  if (check) {
    arrCreate(n);

    console.log(randArr);
    console.log(insertionSort(randArr));
    console.log(shellSort(randArr));
  }
})*/

const errorDiv = document.querySelector('.error'),
      button = document.querySelector('.container_button'),
      resultDiv1 = document.querySelector('.time1'),
      resultDiv2 = document.querySelector('.time2'),
      input = document.querySelector('input'),
      comp1Before = document.querySelector('sort1_before');     
let check,
    randArr = [],
    randArr2,
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
    randArr.push(getRandomInt(999));
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
function copy(mainObj) {
  let objCopy = [];

  let key;
  for (key in mainObj) {
    objCopy[key] = mainObj[key];
  }
  return objCopy;
}
input.addEventListener('focus', event => {
  errorDiv.innerHTML = '!ВНИМАНИЕ! <br> Не передавайте значения больше 100,000 в случае сортировки перестановкой. <br>Влияет на производительность.';
  errorDiv.style.display = 'block';
})
input.addEventListener('blur', event => {
  errorDiv.innerHTML = '';
  errorDiv.style.display = 'none';
})
button.addEventListener('click', event => {
  const n = document.querySelector('.container_input').value;
  randArr = [];

  errorDiv.style.display = 'none';
  numCheck(n);

  if (check) {
    arrCreate(n)
    randArr2 = copy(randArr);

    console.log(randArr);
    startTime = performance.now();
    console.log(insertionSort(randArr));
    endTime = performance.now();
    resultDiv1.textContent = `InsertionSort completed in ${endTime - startTime} milliseconds`;

    console.log(randArr2);
    startTime = performance.now();
    console.log(shellSort(randArr2));
    endTime = performance.now();
    resultDiv2.textContent = `ShellSort completed in ${endTime - startTime} milliseconds`;
  }
})