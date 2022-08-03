const homeText = document.querySelector('#welcome-text');

const content = homeText.innerHTML;

homeText.innerText = '';
let count = 0;

function typing() { 
  homeText.innerText += content[count++];
  if (count >= content.length) {
    clearInterval(refresh);
  }
}

let refresh = setInterval(typing, 200);
