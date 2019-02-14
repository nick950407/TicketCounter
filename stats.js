window.onload = main;

function main() {
    buttonClick();

    const value = document.getElementById('u-001').getAttribute('value');


    download(value, 'stats.txt', 'text/plain');
}

function buttonClick() {
    let button = document.getElementById('001');
    button.addEventListener('click', increment);
}

function increment() {
    let value = document.getElementById('u-001');

    let number = parseInt(value.getAttribute('value'), 10)+1;
    value.setAttribute('value', number);
    value.innerHTML = number;
}

function download(text, name, type) {
    let input = document.getElementById('f-001');
    let file = new Blob([text], {type: type});
    input.href = URL.createObjectURL(file);
    input.download = name;
}