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




const aboutText = document.querySelector('#hello-text');

const content2 = aboutText.innerHTML;

aboutText.innerText = '';
let count2 = 0;

function typing2() { 
  aboutText.innerText += content2[count2++];
  if (count2 >= content2.length) {
    clearInterval(rerefresh);
  }
}

let rerefresh = setInterval(typing2, 200);