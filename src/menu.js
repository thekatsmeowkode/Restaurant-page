import { createTabs } from './tabs.js'

export function createMenu () {
  const body = document.querySelector('#body')
  createTabs(body)

  const container = document.createElement('div')
  container.classList.add('menuContainer')
  body.appendChild(container)

  const mainMenuItems = document.createElement('div')
  mainMenuItems.classList.add('menu-items')
  container.appendChild(mainMenuItems)

  const sideBarItems = document.createElement('div')
  sideBarItems.classList.add('sidebar-items')
  container.appendChild(sideBarItems)
}
