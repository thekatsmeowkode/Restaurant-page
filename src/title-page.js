import { createTabs } from './tabs.js'

export function domLoader () {
  const body = document.querySelector('#body')

  createTabs(body)

  const container = document.createElement('div')
  body.appendChild(container)
  container.classList.add('main-container')

  const header = document.createElement('h1')
  header.textContent = 'The Boba Lounge'
  header.classList.add('header')
  container.appendChild(header)

  const mainImage = document.createElement('img')
  mainImage.src = '../minimalist-still-life-asian-tea.jpg'
  mainImage.classList.add('.main-image')
  container.appendChild(mainImage)

  const copyPara = document.createElement('p')
  copyPara.textContent = 'Cast your worries aside in the Boba Lounge.  Enjoy a refreshing and fun beverage in calm, minimalist surroundings. Sip on a milk tea with friends or in our solo dining booths, designed for those who want to escape the noise of the modern world.  And everyone, and everything.'
  copyPara.classList.add('para')
  container.appendChild(copyPara)
}
