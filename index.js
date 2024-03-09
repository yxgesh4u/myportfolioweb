let dayNight = document.querySelector(".dayNight");
let banner = document.querySelector(".banner");

dayNight.addEventListener("click", () => {
  banner.classList.toggle("night");
});

let typingEffect = new Typed("#text",{
    strings:["YOGESH MADIWAL.","an Engineer.","a Coder."],
    loop:true,
    typeSpeed:100,
    backSpeed:50,
    backDelay:1000,
})