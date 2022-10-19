export function createMenu() {
    const body = document.querySelector('#body')

    let navbar = document.createElement('div')
    navbar.classList.add('navbar')
    body.appendChild(navbar)

    const menuLink1 = document.createElement('a')
    menuLink1.classList.add('a1')
    // menuLink1.href= ''
    menuLink1.textContent = 'Menu'
    navbar.appendChild(menuLink1)

    let menuLink2 = document.createElement('a')
    menuLink2.classList.add('a2')
    // menuLink2.href = ''
    menuLink2.textContent = 'Contact'
    navbar.appendChild(menuLink2)

    let menuLink3 = document.createElement('a')
    menuLink3.classList.add('a3')
    // menuLink3.href = ''
    menuLink3.textContent = 'Home'
    navbar.appendChild(menuLink3)

    const container = document.createElement('div')
    container.classList.add('menuContainer')
    body.appendChild(container)

    let mainMenuItems = document.createElement('div')
    mainMenuItems.classList.add('menu-items')
    container.appendChild(mainMenuItems)
    
    let sideBarItems = document.createElement('div')
    sideBarItems.classList.add('sidebar-items')
    container.appendChild(sideBarItems)

}