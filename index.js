

const initCounter = () => {
  const container = document.getElementById('container');
  const controlButtonEl = document.getElementById('control-button')
  const speedEl = document.getElementById('speed')
  const speedButtonEl = document.querySelectorAll('.speed-change')

  const counterElements = new Array(42).fill('').map(() => document.createElement('div'));

  let resetCode = null;
  let speed = 500 / 1000;
  let counter = 0;
  speedEl.textContent = speed.toFixed(2)

  counterElements.forEach(element => {
    element.className = "counter"
    container.append(element)
  });

  speedButtonEl.forEach(el => el.addEventListener('click', (ev) => {
    if (ev.target.textContent === '↑') {
      speed += 0.1;
    } else {
      speed -= 0.1;
      if (speed < 0) speed = 0;
    }
    speedEl.textContent = speed.toFixed(2)
  }))

  controlButtonEl.addEventListener('click', () => {
    if (resetCode) {
      stopCounter()
    } else {
      startCounter()
    }
  })

  const stopCounter = () => {
    controlButtonEl.textContent = 'Start'
    clearInterval(resetCode)
    counter = 0;
    resetCode = null
    speedButtonEl.forEach(btn => btn.disabled = false)

  }

  const startCounter = () => {
    controlButtonEl.textContent = 'Stop'
    speedButtonEl.forEach(btn => btn.disabled = true)
    resetCode = setInterval(() => {
      counterElements.forEach(element => element.textContent = counter)
      counter++;
    }, speed * 1000)
  }

}

initCounter()