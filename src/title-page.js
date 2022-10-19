export function domLoader() {
    const body = document.querySelector('#body')

    const container = document.querySelector('#content')
    container.classList.add('main-container')

    let navbar = document.createElement('div')
    navbar.classList.add('navbar')
    body.insertBefore(navbar, container)

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

    let header = document.createElement('h1')
    header.textContent = 'The Boba Lounge'
    header.classList.add('header')
    container.appendChild(header)

    let mainImage = document.createElement('img')
    mainImage.src = "../minimalist-still-life-asian-tea.jpg"
    mainImage.classList.add('.main-image')
    container.appendChild(mainImage)

    let copyPara = document.createElement('p')
    copyPara.textContent = "Cast your worries aside in the Boba Lounge.  Enjoy a refreshing and fun beverage in calm, minimalist surroundings. Sip on a milk tea with friends or in our solo dining booths, designed for those who want to escape the noise of the modern world.  And everyone, and everything."
    copyPara.classList.add('para')
    container.appendChild(copyPara)
}

