export function domLoader() {
    const body = document.querySelector('#body')

    const container = document.querySelector('#content')
    container.classList.add('main-container')

    let navbar = document.createElement('div')
    navbar.classList.add('navbar')
    body.insertBefore(navbar, container)

    let menuLink = document.createElement('a')

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

