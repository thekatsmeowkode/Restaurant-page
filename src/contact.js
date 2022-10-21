export function createContacts () {
  const body = document.querySelector('#body')

  const container = document.createElement('div')
  container.classList.add('basket')
  body.appendChild(container)

  const leftSide = document.createElement('div')
  leftSide.classList.add('contact-info')
  container.appendChild(leftSide)

  const rightSide = document.createElement('div')
  rightSide.classList.add('input-form')
  container.appendChild(rightSide)

  const contacts = document.createElement('p')
  contacts.innerHTML = 'The Boba Lounge <br> 1200 N Sails Drive <br> Amanosa, IA 52043 <br> 555-867-5309 <br> boba@thespot.com'
  leftSide.appendChild(contacts)
}