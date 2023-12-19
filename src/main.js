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
// ~~~~~~~~Scroll up ~~~~~~~~~~~

const scrollUp=()=>{
    const scroolUpBtn= document.getElementById('scroll-up');
    if(this.scrollY >=250){
        scroolUpBtn.classList.remove("-bottom-1/2");
        scroolUpBtn.classList.add("bottom-4")
    }else{
        scroolUpBtn.classList.add("-bottom-1/2");
        scroolUpBtn.classList.remove("bottom-4")
    }
}
window.addEventListener("scroll",scrollUp);

// ~~~~~~~~Add border to header on scroll down ~~~~~~~~~~~

const scrollHeader=()=>{
    const header= document.getElementById('header');
    if(this.scrollY >=50){
        header.classList.add("border-b","border-secondaryColor");
    }else{
        header.classList.remove("border-b","border-secondaryColor");
        
    }
}
window.addEventListener("scroll",scrollHeader);
// ~~~~~~~~ Dark mode ~~~~~~~~~~~
const html=document.querySelector('html');
const modeBtn=document.getElementById('modeBtn');
if(localStorage.getItem("mode")== 'dark'){
    darkMode();
}else{
    lightMode();
}
modeBtn.addEventListener("click",()=>{
    if(localStorage.getItem("mode")== 'light'){
        darkMode();
    }else{
        lightMode();
    }
    
})
function darkMode(){
    html.classList.add('dark');
    modeBtn.classList.replace('ri-moon-line','ri-sun-line');
    localStorage.setItem("mode","dark");

}
function lightMode(){
    html.classList.remove('dark');
    modeBtn.classList.replace('ri-sun-line','ri-moon-line');
    localStorage.setItem("mode","light");

}
