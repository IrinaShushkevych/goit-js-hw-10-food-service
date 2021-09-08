import menu from './menu.json'
import menuTpl from './menutpl.hbs'

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
}

const menuEl = document.querySelector('.js-menu')
const checkEl = document.querySelector('.theme-switch__toggle')
const body = document.querySelector('body')

const menuMarkup = menu.map((el) => menuTpl(el)).join('')

menuEl.innerHTML = menuMarkup

let themePage = Theme[localStorage.getItem('theme')]
console.log(localStorage.getItem('theme'))
console.log(themePage)
if (themePage) {
  body.classList.add(Theme[localStorage.getItem('theme')])
  if (localStorage.getItem('theme') == 'LIGHT') {
    checkEl.checked = false
  } else {
    checkEl.checked = true
  }
} else {
  body.classList.add(Theme[0])
  localStorage.setItem('theme', Theme[0])
}

checkEl.addEventListener('change', setTheme)

function setTheme() {
  if (body.classList.contains('light-theme')) {
    body.classList.replace('light-theme', 'dark-theme')
    localStorage.setItem('theme', 'DARK')
  } else {
    body.classList.replace('dark-theme', 'light-theme')
    localStorage.setItem('theme', 'LIGHT')
  }
}
