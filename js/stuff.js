document.getElementsByClassName('feedback')[0].addEventListener('click', function() {
    document.getElementsByClassName('dialog')[0].className = "dialog dialog--open";
}, false);

document.getElementsByClassName('dialog__overlay')[0].addEventListener('click', function() {
    document.getElementsByClassName('dialog')[0].className = "dialog dialog--close";
}, false);
