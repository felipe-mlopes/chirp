const elements = {
  menuIcon: document.querySelector('.menu'),
  menu: document.querySelector('header .container'),
  closeMenu: document.querySelector('.close'),
  itemsMenu: document.querySelectorAll('.menu-open')
}

elements.menuIcon.addEventListener('click', () => {
  elements.menu.classList.toggle('show')
})

elements.closeMenu.addEventListener('click', removeShow)

for (let element of elements.itemsMenu) {
  element.addEventListener('click', removeShow)
}

function removeShow() {
  elements.menu.classList.remove('show')
}
