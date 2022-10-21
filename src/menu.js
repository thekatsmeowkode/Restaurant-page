import { createTabs } from './tabs.js'

export function createMenu () {
  const body = document.querySelector('#body')
  createTabs(body)

  const container = document.createElement('div')
  container.classList.add('menu-container')
  body.appendChild(container)

  const mainMenuItems = document.createElement('div')
  mainMenuItems.classList.add('menu-items')
  container.appendChild(mainMenuItems)
  const pictureTags = document.createElement('div')
  pictureTags.classList.add('pic-tags')
  container.appendChild(pictureTags)
  
  const menuImages = ['../minimalist-still-life-asian-tea (4).jpg', '../minimalist-still-life-asian-tea (1).jpg', '../minimalist-still-life-asian-tea (2).jpg', '../minimalist-still-life-asian-tea (3).jpg']
  for (let i = 0; i < (menuImages.length); i++) {
    const pic = document.createElement('img')
    pic.src = menuImages[i]
    pic.alt = 'Image of cup with bubble tea'
    pic.classList.add('menu-pics')
    mainMenuItems.appendChild(pic)
  }

  const menuDescriptions = ['oolong', 'mango', 'rose', 'milk']
  for (let item of menuDescriptions) {
    let description = document.createElement('p')
    pictureTags.appendChild(description)
    if (item === 'oolong') { description.textContent = 'Oolong Tea : Oolong tea is made from the Camellia sinensis plant. Its dried leaves and leaf buds are used to make several different teas, including black and green teas. Oolong tea is fermented for longer than green tea, but less than black tea. It contains caffeine which affects thinking and alertness.'}
    if (item === 'mango') { description.textContent = 'Mango Tea : Sweet, ripened mangoes are pureed and combined with a homemade simple syrup and then shaken with freshly brewed tea over ice. '}
    if (item === 'rose') { description.textContent = 'Rose Tea : A cup of rose tea can help to soothe anxiety and reduce stress. Studies show that rose petals can have a relaxing effect.  Rose tea is made by infusing hot water with the whole flower, which releases a wide variety of antioxidants and vitamin C.' }
    if (item === 'milk') { description.textContent = 'Milk Tea : Made with sweetened black tea, milk, and add-ons of choice, this classic milk tea recipe is sweet, creamy, and delicious.  Brewed with whole milk, 2% or skim.' }
}

  const sideBarItems = document.createElement('div')
  sideBarItems.classList.add('sidebar-items')
  container.appendChild(sideBarItems)

  const addOnMenu = document.createElement('div')
  addOnMenu.classList.add('add-ons')
  sideBarItems.appendChild(addOnMenu)

  for (let j = 0; j < 6; j++) {
    const para = document.createElement('p')
    addOnMenu.appendChild(para)
  }
  
}
