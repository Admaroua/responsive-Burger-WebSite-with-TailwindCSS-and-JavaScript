const humburger= document.getElementById('humburger');
const menuItems= document.getElementById('menuItems');
const closeMenu= document.getElementById('closeMenu');
const menuItem=document.querySelectorAll('.menuItem');
menuItem.forEach((link)=>{
    link.addEventListener('click',()=>{
        menuItems.classList.add('hidden')
    })
})
humburger.addEventListener("click",() =>{
menuItems.classList.remove('hidden')
})
closeMenu.addEventListener("click",() =>{
    menuItems.classList.add('hidden')
})