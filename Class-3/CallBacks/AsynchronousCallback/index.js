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
  setTimeout(() => {
    heading2.textContent = "heading-2";
    heading2.style.color = "red";
    setTimeout(() => {
      heading3.textContent = "heading-3";
      heading3.style.color = "blue";

      setTimeout(() => {
        heading4.textContent = "heading-4";
        heading4.style.color = "green";
        setTimeout(() => {
          heading5.textContent = "heading-5";
          heading5.style.color = "purple";
          setTimeout(() => {
            heading6.textContent = "heading-6";
            heading6.style.color = "orange";
            setTimeout(() => {
              heading7.textContent = "heading-7";
              heading7.style.color = "pink";
            },1000);
          }, 2000);
        },1000);
      },2000);
    },1000);
  },2000);
}, 1000);
