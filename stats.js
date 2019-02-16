window.onload = main;

// global variables
let number = 0;

// main funtion called on window load
function main() {
    buttonClick();
    downloadClick();
}

function buttonClick() {
    let button = document.getElementById('001');
    button.addEventListener('click', increment);
}

function dateStamp() {
    let timeStamp = " ";
    var date = new Date();

    var day = date.getDay();
    var month = date.getMonth();
    var year = date.getFullYear();

    timeStamp = day + '/' + month + '/' + year;

    return timeStamp;
}

function increment() {

    let value = document.getElementById('u-001');
    number = parseInt(value.getAttribute('value'), 10)+1;
    value.setAttribute('value', number);
    value.innerHTML = number;
}

function setDownload() {
  let stamp = dateStamp();
  let data = stamp + '.txt';
  download(number, data, 'text/plain');
}

function downloadClick() {
    let down = document.getElementById('f-001');
    down.addEventListener('click', setDownload);
}


function download(text, name, type) {
    let input = document.getElementById('f-001');
    let file = new Blob([text], {type: type});
    input.href = URL.createObjectURL(file);
    input.download = name;
}
