const submenuOpenBtn = document.querySelector('.submenu-open-btn')
const submenu = document.querySelector('.submenu')




submenuOpenBtn.addEventListener('click' , (e)=> {
    e.currentTarget.parentElement.classList.toggle('text-orange-300');
    submenu.classList.toggle('submenu--open');
})