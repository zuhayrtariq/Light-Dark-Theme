const toggleSwitch = document.querySelector("#toggle-button");
const themeText = document.querySelector('.theme-text');
const themeIcon = document.querySelector('.theme-icon');
const nav = document.querySelector('nav');
const image1 = document.querySelector("#image1");
const image2 = document.querySelector("#image2");
const image3 = document.querySelector("#image3");
const paragraph = document.querySelector('.project-para');


const currentTheme = localStorage.getItem('theme');
console.log(currentTheme);
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme == 'dark') {
        toggleSwitch.checked = true;
        darkMode();
    } else
        lightMode();
}

// document.querySelector('.theme-text');
function darkMode() {
    themeText.innerHTML = 'Dark Mode';
    nav.style.backgroundColor = 'rgb(0 0 0 /50%)';
    themeIcon.src = 'moon.png';
    paragraph.style.backgroundColor = 'rgb(255 255 255 /50%)';

    image1.src = 'WebDevDark.svg';
    image2.src = 'LogoDesignDark.svg';
    image3.src = 'ContentCreatorDark.svg';
}

function lightMode() {
    themeText.innerHTML = 'Light Mode';
    nav.style.backgroundColor = 'rgb(255 255 255 /50%)';
    themeIcon.src = 'sun.png';
    paragraph.style.backgroundColor = 'rgb(0 0 0 / 50%)';


    image1.src = 'WebDevLight.svg';
    image2.src = 'LogoDesignLight.svg';
    image3.src = 'ContentCreatorLight.svg';

}
toggleSwitch.addEventListener('change', function() {

    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        darkMode();
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        lightMode();
    }

})