import { domLoader } from "./title-page.js";
import { createMenu } from "./menu.js"

domLoader()

const menuLink1 = document.querySelector('.a1')
menuLink1.addEventListener('click', function() {
    // const content = document.querySelector('#content')
    const body = document.querySelector('#body')
    domDeleter(body)
    console.log('hi')
    createMenu()
})

const homeLink = document.querySelector('.a3')
homeLink.addEventListener('click', function() {
        const body = document.querySelector('#body')
        domDeleter(body)
        console.log('hello')
        domLoader()
        
})

function domDeleter(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}


