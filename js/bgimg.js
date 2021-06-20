const imgs = ['00.png','01.png','02.png']

const todayImage = imgs[Math.floor(Math.random() * imgs.length)]
const bodyElements = document.body
bodyElements.style.backgroundImage = `url("img/${todayImage}")`