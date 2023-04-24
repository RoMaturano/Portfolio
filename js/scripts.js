const toggleText=document.getElementById('toggle-text')
const toggleIcon=document.getElementById('toggle-icon')
const toggleTheme=document.getElementById('toggle-theme')
const toggleColors=document.getElementById('toggle-colors')

const rootStyles=document.documentElement.style
const flaggsElemenet= document.getElementById('flaggs')
const texttoChange= document.querySelectorAll("[data-section]")


const changeLanguaje= async (language)=>{

    
    const request= await fetch(`../languajes/${language}.json`)
    const texts= await request.json()//${language}.json
    console.log(request,"request");
    for (let text of texttoChange) {
   
        const section=text.dataset.section
        const value=text.dataset.value
        text.innerHTML=texts[section][value]
    }
}
flaggsElemenet.addEventListener('click',(e)=>{
 
    changeLanguaje(e.target.parentElement.dataset.language)
})

toggleTheme.addEventListener("click",()=>{
    document.body.classList.toggle("dark")
    if(toggleIcon.src.includes("moon.svg")){
        toggleIcon.src="assets/icons/sun.svg"
        toggleText.textContent="Light Mode"
    }else{
        toggleIcon.src="assets/icons/moon.svg"
        toggleText.textContent="Dark Mode"
    }
})


toggleColors.addEventListener("click",(e)=>{
    rootStyles.setProperty("--primary-color",e.target.dataset.color)
})