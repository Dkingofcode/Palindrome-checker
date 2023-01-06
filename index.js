const Input = document.getElementById("input");
const Button = document.querySelector(".btn");
const Message = document.querySelector(".response");

// function palindrome() {
//     const word = Input.value;
//     let len = word.length;
    
//     let start = word.substring(0, Math.floor(len / 2)).toLowerCase();
//     let end = word.substring(len - Math.floor(len / 2)).toLowerCase();

//     // let flip = end.split("").reverse().join("");

//     let flip = [...end].reverse().join("");
//     if (start == flip) {
//         Message.innerHTML = `${word.toUpperCase()} is a palindrome`;
//     }  else {
//         Message.innerHTML = `${word.toUpperCase()} is NOT a palindrome`;
//     }
// }

// Button.addEventListener("click", () => {
//     palindrome();
// })









function checkString() {
  const  word = Input.value;    
   const reversedString = [];
        for (let i = word.length - 1; i >= 0; i--){
             reversedString.push(word[i])
              let reversed =  reversedString.toLocaleString();
             console.log(reversed.split(",").join("")); 
        }
    
    if (word == reversedString) {
        Message.innerHTML = "It is a Palindrome"
    } else {
        Message.innerHTML = "It is not a Palindrome"
    }
}

Button.addEventListener("click", () => {
    checkString();
})


 
















