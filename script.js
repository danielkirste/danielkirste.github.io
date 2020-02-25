// countdown
const thisDate = new Date();
const thisOffset = thisDate.getTimezoneOffset() / 60;

const targetDate = new Date("2020-05-08");
const targetOffset = targetDate.getTimezoneOffset() / 60;

const timeZoneOffset = targetOffset - thisOffset;

const numDays = document.querySelector(".countdown-item--days");
const numHours = document.querySelector(".countdown-item--hours");
const numMinutes = document.querySelector(".countdown-item--minutes");
const numSeconds = document.querySelector(".countdown-item--seconds");

const countdownFun = () => {
    const difference = +targetDate - +new Date();
    // + before new Date is shorthand to cast the object as an Int

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24 + timeZoneOffset);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    numDays.innerText = days;
    numHours.innerText = hours;
    numMinutes.innerText = minutes;
    numSeconds.innerText = seconds;
}

countdownFun();
setInterval(countdownFun, 1000);

// arrow
const arrow = document.querySelector(".arrow");

let hideArrow = () => {
    arrow.classList.add('hide');
    arrow.classList.remove('arrowanim');
    window.removeEventListener('scroll', hideArrow);
};

window.addEventListener('scroll', hideArrow);

// parallax
const parallax = () => {
    let parallax = document.querySelector('.parallax');
    parallax.style.setProperty('--y', `${window.scrollY}px`);
}

const parallaxObserver = new IntersectionObserver(entries => {
    let [{isIntersecting}] = entries;
    if (isIntersecting) {
        window.addEventListener('scroll', parallax, {capture: false, passive: true});
    } else {
        window.removeEventListener('scroll', parallax, {capture: false, passive: true});
    }
});

const paralaxReverence = document.querySelector('.parallax-reference');
parallaxObserver.observe(paralaxReverence);
