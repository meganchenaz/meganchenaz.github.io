const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')

const birds = document.getElementById('birds')
const sun = document.getElementById('sun')
const cloudOne = document.getElementById('cloud-one')
const cloudTwo = document.getElementById('cloud-two')
const cloudThree = document.getElementById('cloud-three')
const cloudFour = document.getElementById('cloud-four')
const cloudFive = document.getElementById('cloud-five')
const cloudSix = document.getElementById('cloud-six')
const cloudSeven = document.getElementById('cloud-seven')
const cloudEight = document.getElementById('cloud-eight')
const cloudNine= document.getElementById('cloud-nine')

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function move() {
    const incrementer = window.scrollY
    
    // the '70' refers to the height specified in the css file
    birds.style.bottom = 70 + incrementer * 0.06 + '%'
    birds.style.left = 1 + incrementer * -0.06 + '%'

    sun.style.bottom = 60 + incrementer * 0.02 + '%'
    sun.style.left = 75 + incrementer * 0.06 + '%'

    cloudOne.style.bottom = 50 + incrementer * 0.05 + '%'
    cloudOne.style.left = 1 + incrementer * -0.06 + '%'

    cloudTwo.style.bottom = 20 + incrementer * 0.05 + '%'
    cloudTwo.style.left = 10 + incrementer * -0.06 + '%'
    
    cloudThree.style.bottom = 40 + incrementer * 0.05 + '%'
    cloudThree.style.left = 22 + incrementer * -0.06 + '%'

    cloudFour.style.bottom = 80 + incrementer * 0.05 + '%'
    cloudFour.style.left = 18 + incrementer * -0.06 + '%'

    cloudFive.style.bottom = 25 + incrementer * 0.05 + '%'
    cloudFive.style.left = 45 + incrementer * -0.06 + '%'

    cloudSix.style.bottom = 20 + incrementer * 0.05 + '%'
    cloudSix.style.left = 65 + incrementer * 0.06 + '%'

    cloudSeven.style.bottom = 85 + incrementer * 0.05 + '%'
    cloudSeven.style.left = 65 + incrementer * 0.06 + '%'

    cloudEight.style.bottom = 45 + incrementer * 0.05 + '%'
    cloudEight.style.left = 70 + incrementer * 0.06 + '%'

    cloudNine.style.bottom = 27 + incrementer * 0.05 + '%'
    cloudNine.style.left = 90 + incrementer * 0.06 + '%'
}

hamburgerButton.addEventListener('click', toggleButton)

window.addEventListener('scroll', move)
