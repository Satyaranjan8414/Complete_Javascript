const wrapper = document.querySelector('.wrapper')
const loginLink=document.querySelector('.login-link');
const registerLink=document.querySelector('.register-link');

const loginbutton = document.querySelector('.btnlogin')

const iconclose=document.querySelector('.icon-close')


registerLink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
})

loginLink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
})

loginbutton.addEventListener('click', ()=>{
    wrapper.classList.add('active-Popup');
})

iconclose.addEventListener('click', ()=>{
    wrapper.classList.remove('active-Popup');
})