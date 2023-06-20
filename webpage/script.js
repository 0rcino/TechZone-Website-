// for Tabs to message you to comeback
let docTitle = document.title;
window.addEventListener('blur', () => {
    document.title = 'Come Back to TechZone :(';
});

window.addEventListener('focus', () => {
    document.title = docTitle;
});

// ALert box for button to order
function add(add) {
    alert('Sucessful Buy ' + add + ' Add to Chart');
}
// Alert box for Contact submit
function con(con) {
    alert('Submit ' + con + ' Contact');
}

// Alert box for submit Order
function or(or) {
    alert('Submit ' + or + ' your Order');
}

// arrow up click auto to back to top
const toTop = document.querySelector('.to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add('active');
    } else {
        toTop.classList.remove('active');
    }
});

// for Tabs to message you to comeback
/*let docTitle = document.title;
window.addEventListener('blur', () => {
    document.title = 'Come Back to TechZone :(';
});

window.addEventListener('focus', () => {
    document.title = docTitle;
});
*/
// ALert box for button to order
function add(add) {
    alert('Sucessful Buy ' + add + ' Add to Chart');
}
// Alert box for Contact submit
function con(con) {
    alert('Submit ' + con + ' Contact');
}

// Alert box for submit Order
function or(or) {
    alert('Submit ' + or + ' your Order');
}

