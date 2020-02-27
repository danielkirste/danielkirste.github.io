/** countdown */
const thisDate = new Date();
const thisOffset = thisDate.getTimezoneOffset();
console.log('thisOffset =', thisOffset);

const targetDate = new Date("2020-05-08T14:00:00");
const targetOffset = targetDate.getTimezoneOffset();
console.log('targetOffset =', targetOffset);

const offset = targetOffset + -thisOffset;
const offsetInMS = offset * 60 * 1000;
console.log('offsetInMS =', offsetInMS);

const countdownDays = document.querySelector(".countdown__item--days");
const countdownHours = document.querySelector(".countdown__item--hours");
const countdownMinutes = document.querySelector(".countdown__item--minutes");
const countdownSeconds = document.querySelector(".countdown__item--seconds");

const countdownFun = () => {
    const difference = +targetDate - +new Date() + -offsetInMS;
    console.log('difference=', difference);

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24 );
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    console.log('days =', days);
    console.log('hours =', hours);
    console.log('minutes =', minutes);
    console.log('seconds =', seconds);

    countdownDays.innerText = days;
    countdownHours.innerText = hours;
    countdownMinutes.innerText = minutes;
    countdownSeconds.innerText = seconds;
}

countdownFun();
setInterval(countdownFun, 1000);

/** arrow */ 
const arrow = document.querySelector(".arrow");

let hideArrow = () => {
    arrow.classList.add('hide');
    arrow.classList.remove('arrowanim');
    window.removeEventListener('scroll', hideArrow);
};

window.addEventListener('scroll', hideArrow);

/** parallax */ 
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

const paralaxReverence = document.querySelector('.hero');
parallaxObserver.observe(paralaxReverence);
