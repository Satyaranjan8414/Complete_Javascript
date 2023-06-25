const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");

setTimeout(function () {
  heading1.textContent = "heading-1";
  heading1.style.color = "yellow";
  heading1.style.backgroundColor ="red"
  setTimeout(() => {
    heading2.textContent = "heading-2";
    heading2.style.color = "red";
    heading2.style.backgroundColor="yellow"
    setTimeout(() => {
      heading3.textContent = "heading-3";
      heading3.style.color = "blue";
      heading3.style.backgroundColor = "green"

      setTimeout(() => {
        heading4.textContent = "heading-4";
        heading4.style.color = "green";
        heading4.style.backgroundColor = "blue";
        setTimeout(() => {
          heading5.textContent = "heading-5";
          heading5.style.color = "purple";
          heading5.style.backgroundColor = "pink";
          setTimeout(() => {
            heading6.textContent = "heading-6";
            heading6.style.color = "orange";
            heading6.style.backgroundColor = "yellow";
            setTimeout(() => {
              heading7.textContent = "heading-7";
              heading7.style.color = "pink";
              heading7.style.backgroundColor = "purple";
            },1000);
          }, 2000);
        },1000);
      },2000);
    },1000);
  },2000);
}, 1000);
