const squares = document.getElementsByClassName('square');
const allElements = document.querySelectorAll('div');

allElements.forEach((element, i) => {
    anime({
        targets: element,
        left: 300 + (i * 50),
    });
})