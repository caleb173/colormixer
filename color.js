let screen = document.getElementById('screen');

let para = document.getElementById('para');
let inputs = document.getElementsByTagName('input');
for (let i = 0; i < inputs.length; i++) {
  inputs[0].style.accentColor = `red`;
  inputs[1].style.accentColor = `green`;
  inputs[2].style.accentColor = `blue`;
  inputs[i].addEventListener('input', () => {
    para.innerText = `rgb(${inputs[0].value},${inputs[1].value},${inputs[2].value})`;
    screen.style.background = `${para.innerText}`;
    
    document.body.style.background = `rgba(${inputs[0].value},${inputs[1].value},${inputs[2].value},.3)`
  });
}
