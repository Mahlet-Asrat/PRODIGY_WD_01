
const navigation = document.getElementById('navigation')

const home = document.getElementById('home')

const body = document.getElementById('body')

const header = document.getElementById('header')

function myCustom(){

    navigation.classList.add('active')

}

function customClose(){

    navigation.classList.remove('active')
}

function darken(){

    body.classList.add('active')
    header.classList.add('active')

}

function lighten(){

    body.classList.remove('active')
    header.classList.remove('active')
}


gsap.from('.image', {opacity: 0, duration: 1, delay: 1, y:10})
gsap.from('.title', {opacity: 0, duration: 1, delay: 1, y:10})
gsap.from('.logo-link', {opacity: 0, duration: 1, delay: 1, y:10})
gsap.from('.navigation ', {opacity: 0, duration: 1, delay: 2.1, y:30 , stagger: 0.2})
gsap.from('.desc ', {opacity: 0, duration: 1, delay: 2.1, y:30 , stagger: 0.2})