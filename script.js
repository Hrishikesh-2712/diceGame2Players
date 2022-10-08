dices = {
  1: `<hr class="one" />`,

  2: `<hr class="one" />
  <hr class="two" />`,

  3: ` <div class="rotate-135">
  <hr class="one" />
  <hr class="two" />
  <hr class="three" />
</div>`,

  4: `<div class="">
  <div class="row">
    <hr class="one" />
    <hr class="two" />
  </div>
  <div class="row">
    <hr class="three" />
    <hr class="four" />
  </div>
</div>`,

  5: `<div class="">
<div class="row">
  <hr class="one" />
  <hr class="two" />
</div>
<div class="row">
  <hr class="three" />
</div>
<div class="row">
  <hr class="four" />
  <hr class="five" />
</div>
</div>`,

  6: `<div class="inner">
<div class="row">
  <hr class="one" />
  <hr class="two" />
  <hr class="three" />
</div>
<div class="row">
  <hr class="four" />
  <hr class="five" />
  <hr class="six" />
</div>
</div>`

}

winner = `Player <span class="align-mid"></span> wins!`

function diceUpdate(p1, p2) {
  d1 = document.getElementById('dice1')
  d2 = document.getElementById('dice2')

  d1.innerHTML = dices[p1]
  d1.setAttribute('class', `n${p1}`)

  d2.innerHTML = dices[p2]
  d2.setAttribute('class', `n${p2}`)
}

function flagUpdate(p1, p2) {

  f1 = document.getElementById("flag1")
  f2 = document.getElementById("flag2")
  if (p1 > p2) {
    f2.classList.add('hidden')
    f1.classList.remove('hidden')

  }
  else if (p1 < p2) {
    f1.classList.add('hidden')
    f2.classList.remove('hidden')
  }
  else {
    f1.classList.remove('hidden')
    f2.classList.remove('hidden')
  }
}

function scoreUpdate(p1,p2){
  if(p1>p2){
    
    score = document.querySelector(".pl1 strong")
    score.textContent = parseInt(score.textContent)+1
  
}
else if(p2>p1){
   score = document.querySelector(".pl2 strong")
    score.textContent = parseInt(score.textContent)+1
  
}

}

function roll() { return Math.floor(Math.random() * 6 + 1) }


document.getElementsByTagName('body')[0].addEventListener('click', (e) => {
  p1 = roll()
  p2 = roll()

  diceUpdate(p1, p2)
  if (p1 > p2) {
    n = 1
    winMessage = `Player <span class="align-mid">${n}</span> wins!`
  }
  else if (p2 > p1) {
    n = 2
    winMessage = `Player <span class="align-mid">${n}</span> wins!`
  }
  else {
    n = 0
    winMessage = `Match Draw!`
  }

  scoreUpdate(p1,p2)
  flagUpdate(p1, p2)
  document.getElementsByClassName('top')[0].getElementsByTagName('h1')[0].innerHTML = winMessage
})
