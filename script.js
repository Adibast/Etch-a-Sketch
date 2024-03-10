const container = document.querySelector('#container');
const gridScreen = document.querySelector('#screeenContainer');
const inputNumber = document.querySelector('.numInput');
const styleButtonMenu = document.querySelector('#styleButtons');
const sendButton = document.querySelector('.numSendButton');
const blackColorButton = document.querySelector('.blackColorButton');
const pastelColorsButton = document.querySelector('.pastelColorsButton');
const rainbowButton = document.querySelector('.rainbowButton');
const eraserButton = document.querySelector('.eraserButton');
const creditButton = document.querySelector('.credit');

function addDivs(num) {
    const selectedEvent = 'mouseenter';
    const selectedColor = 'black';
    const randomColor = () => {
        let r, g, b;
        r = Math.floor(Math.random() * 256);
        g = Math.floor(Math.random() * 256);
        b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`
    };
    const pastelColor = () => {
        return `hsla(${~~(360 * Math.random())}, 70%,  72%, 0.8)`
    };
    function secondaryEvent(objective, selectedEvent, selectedColor){
        objective.addEventListener(selectedEvent, () => {
            objective.style.backgroundColor = selectedColor
        })
    };
    for(let i =0; i < num; i++){
        let column = document.createElement('div');
        column.setAttribute('style', 'display: flex; flex: 1;');
        for(let i = 1; i <= num; i++){
            let row = document.createElement('div');
            row.setAttribute('style', 'display: flex; flex: 1;');
        blackColorButton.addEventListener('click', () => {secondaryEvent(row, selectedEvent, selectedColor)});
        pastelColorsButton.addEventListener('click', () => {secondaryEvent(row, selectedEvent, pastelColor())});
        rainbowButton.addEventListener('click', () => {secondaryEvent(row, selectedEvent, randomColor())});
        eraserButton.addEventListener('click', () => {secondaryEvent(row,selectedEvent, 'white')})
        column.appendChild(row)
        };
    gridScreen.appendChild(column);
    sendButton.addEventListener('click', () => {
        gridScreen.removeChild(column);
    })
};
};

styleButtonMenu.classList.add('disableDisplay')

sendButton.addEventListener('click', () => {
    let inputValue = +inputNumber.value
    if (inputValue <= 0){
        alert('minimum allowed: 1')
    } else if (inputValue >= 101){
        alert('maximum allowed: 100')
    } else {
    styleButtonMenu.classList.remove('disableDisplay')
    addDivs(inputValue)
    }
});

creditButton.addEventListener('click', () => {
    window.open('https://github.com/Adibast','_blank')
})