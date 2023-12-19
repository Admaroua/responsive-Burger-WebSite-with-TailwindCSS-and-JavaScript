const humburger= document.getElementById('humburger');
const menuItems= document.getElementById('menuItems');
const closeMenu= document.getElementById('closeMenu');
const menuItem=document.querySelectorAll('.menuItem');
const menu=document.querySelectorAll('.menu ul li');
const all =document.querySelectorAll('.item-wrap');
const food =document.querySelectorAll('.food');
const snack =document.querySelectorAll('.snack');
const beverage =document.querySelectorAll('.beverage');





menu.forEach((m)=>{
   m.addEventListener("click",()=>{
        menu.forEach(m=>{
            m.classList.remove('active')
        })
        m.classList.add('active');
        const tabval=m.getAttribute('data-tabs');
        all.forEach(a=>{
            a.style.display='none';
        })
        if(tabval=='food'){
            food.forEach(f=>{
                f.style.display='block';
            })
            

        }else if(tabval=='snack'){
            snack.forEach(s=>{
                s.style.display='block';
            })

        }else if(tabval=='beverage'){
            beverage.forEach(b=>{
                b.style.display='block';
            })

        }else{
            all.forEach(f=>{
                f.style.display='block';
            })

        }
    
   }) 
})
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


