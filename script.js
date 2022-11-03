let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountainsfront = document.getElementById('mountains front');
let mountainsbehind = document.getElementById('mountains behind');
let text = document.getElementById('text');
let btn = document.getElementById('btn');
let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    stars.style.left = value * 0.25 + 'px';
    moon.style.top = value * 1 + 'px';
    mountainsbehind.style.top = value * 0.5 + 'px';
    mountainsfront.style.top = value * 0 + 'px';
    text.style.marginRight = value * 2 + 'px';
    text.style.marginTop = value * .8 + 'px';
    btn.style.marginTop = value * .8 + 'px';
    header.style.top = value * .6 + 'px';
});