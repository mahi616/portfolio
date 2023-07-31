    //   toggle style switcher (setting open)
const styleSwitcherToggle = document.querySelector(".style_switcher_toggle");
styleSwitcherToggle.addEventListener("click", () =>{
    document.querySelector(".style_switcher").classList.toggle("open");
})

// hide slide     switcher on scroll  (while scroll down theme will hide)
window.addEventListener("scroll", () => {
    if(document.querySelector(".style_switcher").classList.contains("open"))
    {
        document.querySelector(".style_switcher").classList.remove("open");
    }
})

// ******************** theme colors 
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color)
{
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else
        {
            style.setAttribute("disabled", "true");
        }
    })
}

// ********************** theme light and dark mode 
const dayNight = document.querySelector(".day_night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load", () => {
    if(document.body.classList.contains("dark"))
    {
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else
    {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})