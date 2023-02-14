// const  characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
// "/"];

var charcter = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-=";

const inputEl = document.getElementById("input-el")
const generateBtn = document.getElementById("generate-btn")
let ulEl = document.getElementById("ul-el")
let arr = " "


generateBtn.addEventListener("click",function() {
  
  for (let i=0; i < 15; i++) {
    let randompasswordOne = Math.floor(Math.random() * charcter.length)
    arr += (charcter[randompasswordOne])  
  }
  ulEl.textContent= arr
  arr = " "
        
})