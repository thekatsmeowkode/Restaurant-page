import { domLoader } from './title-page.js'
import { createMenu } from './menu.js'
import { createTabs } from './tabs.js'
import { createContacts } from './contact.js'

domLoader()

export function domDeleter (parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild) }
}
