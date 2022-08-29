let serialEl = document.querySelector(".serial");
let generateEl = document.querySelector(".generate");

generateEl.addEventListener("click", (e) => {
  let characters =
    "1234567890QWERTYUIOPASDFGHJKLMNBVCXZqwertyuioplkjhgfdsazxcvbnm";
  let charactersCont = 20;
  let randomSerial = "";
  for (let i = 0; i < charactersCont; i++) {
    randomSerial += characters[Math.floor(Math.random() * characters.length)];
  }
  serialEl.innerHTML = randomSerial;
});
