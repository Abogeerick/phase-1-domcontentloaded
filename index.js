// Your code goes here
const text=document.querySelector("p");
function ContentLoaded(){
  text.textContent="This is really cool!"
}
document.addEventListener("DOMContentLoaded", ContentLoaded);