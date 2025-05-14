AOS.init();

// slide-section-button
let regist_btn = document.querySelector("#registration-btn");
let close_btn = document.querySelector(".register-container span")
let form = document.querySelector(".register-container")
regist_btn.addEventListener("click",()=>{
    form.classList.add('register-container-show')
})

close_btn.addEventListener("click",()=>{
    form.classList.remove('register-container-show')
})