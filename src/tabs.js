import { domDeleter } from './index.js'
import { domLoader } from './title-page.js'
import { createMenu } from './menu.js'

export function createTabs (div) {
  const body = document.querySelector('#body')
  const navbar = document.createElement('div')
  navbar.classList.add('navbar')
  body.appendChild(navbar)

  const menuLink1 = document.createElement('a')
  menuLink1.classList.add('a1')
  menuLink1.textContent = 'Menu'
  navbar.appendChild(menuLink1)

  const menuLink2 = document.createElement('a')
  menuLink2.classList.add('a2')
  menuLink2.textContent = 'Contact'
  navbar.appendChild(menuLink2)

  const menuLink3 = document.createElement('a')
  menuLink3.classList.add('a3')
  menuLink3.textContent = 'Home'
  navbar.appendChild(menuLink3)

  menuLink3.addEventListener('click', function () {
    const body = document.querySelector('#body')
    domDeleter(body)
    domLoader()
  })

  menuLink1.addEventListener('click', function () {
    const body = document.querySelector('#body')
    domDeleter(body)
    createMenu()
  })
}
