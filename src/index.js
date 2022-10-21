import { domLoader } from './title-page.js'
import { createMenu } from './menu.js'
import { createTabs } from './tabs.js'

domLoader()

// const menuLink1 = document.querySelector('.a1')
// menuLink1.addEventListener('click', function () {
//   // const content = document.querySelector('#content')
//   const body = document.querySelector('#body')
//   domDeleter(body)
//   createMenu()
// })

// const homeLink = document.querySelector('.a3')
// homeLink.addEventListener('click', function () {
//   const body = document.querySelector('#body')
//   domDeleter(body)
//   domLoader()
// })

export function domDeleter (parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild) }
}
