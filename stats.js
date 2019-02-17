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

    timeStamp = "Recorded on: " + date;
    return timeStamp;
}

function stringDateStamp() {
    let fileStamp = " ";
    var date = new Date();

    var month = date.getMonth()+1;
    var day = date.getDate().toString();
    var year = date.getFullYear().toString().substr(-2);
    var mil = date.getMilliseconds().toString();


    fileStamp = "Ticket Export " + day + "-" + month.toString() + "-" + year + "  " + mil;

    return fileStamp;
}


function increment() {

    let value = document.getElementById('u-001');
    number = parseInt(value.getAttribute('value'), 10)+1;
    value.setAttribute('value', number);
    value.innerHTML = number;
}

function setDownload() {
  let stamp = dateStamp();
  let file = stringDateStamp();

  let data = file + '.txt';

  var array = "Number of tickets updated\n" + number + "\n" + stamp;
  download(array, data, 'text/plain');
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
